# Voice guide

Visitors can talk to an AI guide about the work on this site, by voice or by typing. It is an ElevenLabs agent, the same kind of assistant used on Bhoomi.

## How it works

1. `npm run voice:sync` reads the site data in `lib/` and builds the agent on ElevenLabs: its facts, its rules, its limits. The guide only knows what the site says.
2. A visitor opens the guide. The browser asks this site's server (`app/api/voice/session`) for a short-lived pass. The API key never reaches the browser.
3. The browser connects to ElevenLabs with that pass. Voice runs over WebRTC, typed chat over a WebSocket.
4. The guide can call one tool in the browser, `open_page`, to open a page of this site.

The voice SDK is only downloaded when someone opens the guide, so it adds nothing to page load.

## Guardrails

| Layer | What it does |
| --- | --- |
| Facts only | The prompt contains the site's content and tells the guide to answer from it and nothing else. Unknown details get "I do not have that", not a guess. |
| Scope | Off-topic requests (code, homework, general questions) get a one-line redirect. |
| Private topics | Salary, visa, age, address, phone, family, health, religion and politics are refused and pointed to the Contact page. |
| No promises | It cannot book interviews, accept offers, or speak as Abhishek. It always says it is an AI. |
| Platform checks | ElevenLabs focus, prompt-injection and content checks are on. A custom check re-reads each reply for private details and promises before it is spoken. An injection attempt ends the chat. |
| Private agent | A conversation needs a pass from this site's server. The server only answers this site's own pages. |
| Limits | 3 minutes per chat, 40 chats a day (set on the agent), and per-visitor limits on the server. Typed questions are capped at 300 characters. |
| Navigation | `open_page` only accepts paths on a fixed list. |
| Microphone | Asked for only when the visitor presses "Start talking". Closing the panel ends the call. |
| Privacy | Audio is not saved. Transcripts are kept for 30 days on ElevenLabs. The panel says so. |
| Fixed setup | The browser cannot change the prompt, the voice or the model. The only thing it may choose is text instead of voice. |

All the numbers are in `lib/voice.js`.

## Checking it

`npm run voice:test` asks the guide 12 questions in text mode and checks each reply: a known fact, an unknown detail, salary, visa, a booking request, an off-topic request, two injection attempts, a page to open, a prototype caveat, and a goodbye. Last run: 12 of 12 on November 16, 2026.

Run it after every `voice:sync`.

## Setup

Local: put the key in `.env.local` (see `.env.example`), then run `npm run voice:sync`. It creates the agent, saves `ELEVENLABS_AGENT_ID` to `.env.local`, and makes the four interface sounds in `public/assets/sfx/`.

Live site: add `ELEVENLABS_API_KEY` and `ELEVENLABS_AGENT_ID` in the Vercel project settings, then redeploy. Without them the guide button does not appear and the rest of the site is unchanged.

When the content in `lib/` changes, run `npm run voice:sync` again so the guide stays in step.

## Cost

Each chat uses ElevenLabs credits. The daily cap on the agent bounds the spend. Lower `dailyConversations` or `maxSeconds` in `lib/voice.js` and sync again to tighten it.

## Sounds

Four short sounds made with ElevenLabs sound effects: panel open, connected, chat ended, page opened. They play only after a click, and the speaker button in the panel turns them off.
