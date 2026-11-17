// Settings for the voice guide: the AI assistant visitors can talk to about the work on this site.
// The agent itself lives on ElevenLabs. `npm run voice:sync` builds it from this file and the
// site data, so it only knows what the site says. See docs/voice-guide.md.

export const voice = {
  name: "Portfolio guide",
  // Stock ElevenLabs voice. The guide is an AI and says so; it is not a copy of anyone's voice.
  voiceId: "cjVigY5qzO86Huf0OWal",
  greeting: "Hi, I'm the AI guide for Abhishek's portfolio. Ask me about his projects, his experience, or his skills.",
  // Limits. ElevenLabs enforces the first two; the site enforces the rest.
  maxSeconds: 180,
  dailyConversations: 40,
  sessionsPerTenMinutes: 4,
  sessionsPerDay: 12,
  maxTypedLength: 300,
  suggestions: ["What has Abhishek shipped to production?", "Tell me about Trinetra", "What is he strongest at?", "Is he open to full-time roles?"],
};
