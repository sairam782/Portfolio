import { voice } from "@/lib/voice";

// Hands the browser a short-lived pass to talk to the voice guide.
// The ElevenLabs key stays on the server. The agent is private, so without this
// pass nobody can start a conversation with it.

export const dynamic = "force-dynamic";

const API = "https://api.elevenlabs.io";
const TEN_MINUTES = 10 * 60 * 1000;
const DAY = 24 * 60 * 60 * 1000;

// Per-visitor limits. This memory is per server instance, so it slows down a
// single abusive visitor rather than guaranteeing a total. The hard ceiling is
// the daily conversation limit set on the agent itself.
const visits = new Map();

function overLimit(visitor) {
  const now = Date.now();
  const times = (visits.get(visitor) ?? []).filter((time) => now - time < DAY);
  const recent = times.filter((time) => now - time < TEN_MINUTES).length;
  if (recent >= voice.sessionsPerTenMinutes || times.length >= voice.sessionsPerDay) {
    visits.set(visitor, times);
    return true;
  }
  times.push(now);
  visits.set(visitor, times);
  if (visits.size > 5000) visits.delete(visits.keys().next().value);
  return false;
}

const reply = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request) {
  const key = process.env.ELEVENLABS_API_KEY;
  const agentId = process.env.ELEVENLABS_AGENT_ID;
  if (!key || !agentId) return reply({ error: "off" }, 503);

  // Only this site's own pages may ask.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  let sameSite = false;
  try {
    sameSite = Boolean(origin) && new URL(origin).host === host;
  } catch {
    sameSite = false;
  }
  if (!sameSite) return reply({ error: "forbidden" }, 403);

  const visitor = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (overLimit(visitor)) return reply({ error: "busy" }, 429);

  const body = await request.json().catch(() => ({}));
  const text = body?.mode === "text";
  const path = text ? "/v1/convai/conversation/get-signed-url" : "/v1/convai/conversation/token";

  try {
    const response = await fetch(`${API}${path}?agent_id=${encodeURIComponent(agentId)}`, { headers: { "xi-api-key": key }, cache: "no-store" });
    if (!response.ok) return reply({ error: response.status === 429 ? "busy" : "unavailable" }, response.status === 429 ? 429 : 502);
    const data = await response.json();
    const pass = text ? { signedUrl: data.signed_url } : { token: data.token };
    if (!pass.signedUrl && !pass.token) return reply({ error: "unavailable" }, 502);
    return reply({ ...pass, maxSeconds: voice.maxSeconds });
  } catch {
    return reply({ error: "unavailable" }, 502);
  }
}
