# Abdulmajid Sharipov

**Frontend / Full-stack Developer · AI-native workflow**

Kokand, Uzbekistan · open to remote, relocation to Tashkent negotiable

[abdulmajidsharipovlc@gmail.com](mailto:abdulmajidsharipovlc@gmail.com) ·
Telegram [@Abdulloh_77700](https://t.me/Abdulloh_77700) ·
[GitHub](https://github.com/Abdulmajidkhan007) ·
[LinkedIn](https://linkedin.com/in/abdulmajid-sharipov-profile) ·
[Portfolio](https://abdulmajidkhan-portfolio.web.app)

---

## Summary

Frontend-focused full-stack developer (React, TypeScript, Node.js, Python) with about one year of
hands-on product work (independent since October 2025, team lead on a startup since August 2026).
I build with AI in two ways: AI features inside products (vision-based catalog ingestion, RAG,
LLM chat bots) and an AI-native engineering process. I run Claude Code as a supervisor session
that plans phases, delegates them to worker sessions and verifies every PR in a clean clone
(typecheck, lint, tests, e2e) before merge.

---

## Experience

### Learning Center — school-automation CRM startup
*Frontend Team Lead · Aug 2026 – present · team of 4* ·
[code](https://github.com/nurulloh-coder-dev/learning-center-front)

- Migrated the whole frontend from JSX to strict TypeScript, so type errors are caught at build
  time (75 commits).
- Reviewed the backend code and reported several bugs the team had missed; the backend
  developers fixed them.
- Wrote shared engineering rules and AI-agent instructions (`CLAUDE.md`, `docs/`) so that both
  people and coding agents follow one style.
- Built two-step login, developer and super-admin panels, phone-number duplicate checks and
  teacher KPI screens.

### Independent developer / freelancer
*Oct 2025 – present*

- **Atoyo e-commerce** for a plumbing store in Kokand: website, Android app, desktop app, in-store
  TV screen and Telegram bot on one Firestore database. Used in the store until October 2026
  (~500 products). Paused on 2026-10-26 because the store staff had no time to manage it and could
  not pay for hosting. Repo is private and available on request.
- **AI catalog ingestion:** the admin uploads a photo and Gemini Vision returns a ready product card
  (name, code, category, price, description). Duplicate photos are skipped using a perceptual
  hash (pHash).
- **AI-native delivery (Oct 2026):** coordinated parallel Claude Code sessions across about 10
  repositories (supervisor plus Sonnet/Opus workers). Each phase ends with a written report,
  verified tests and an honest "not tested yet" list.
- Since July 2026: bringing projects to production level (deploy, tests, CI, security rules).
  Since October 2026: client work (Telegram bots, store sites, landing pages).

---

## AI projects

- **telegram-bots** ([code](https://github.com/Abdulmajidkhan007/telegram-bots)): 15 bots in one
  monorepo with a custom CLI, tests and a secret scanner before every commit. Includes a RAG
  bot (LangChain, ChromaDB) and Gemini-based assistants. Public bots:
  [@KillSpam_007_Bot](https://t.me/KillSpam_007_Bot) and
  [@COUNTLIST_BOT](https://t.me/COUNTLIST_BOT) (expense tracking from voice messages).
- **Instagram AI auto-reply (design stage, private):** multi-tenant DM assistant on the official
  Meta API. Threat model against prompt injection: no tool access for the model, user text kept
  separate from instructions, untrusted FAQ/RAG content, least-privilege context and output
  validation. At least 20 attack test cases are planned for the AI phase.
- **AI security learning:** OWASP Top 10 for LLM Applications, prompt-injection testing.

## Other projects

- **Suhbat** ([live](https://suhbatweb-production.up.railway.app) ·
  [code](https://github.com/Abdulmajidkhan007/suhbat)): messenger with chats, groups, channels and
  1:1 calls. Built with NestJS, Prisma, PostgreSQL, Socket.IO and WebRTC with its own TURN server.
  Web, desktop (Electron) and Android clients. Beta, v0.6.0.
- **KidsWear** ([live](https://kids-wear-007.web.app)): web and Android store in a Turborepo monorepo
  (React 19, MUI, React Native). Admin catalog management and a profit report, with Firestore
  rules covered by tests.
- **Organick** ([live](https://organick-e1c5a.web.app)): React 19, Redux Toolkit, Tailwind v4,
  three languages, Playwright e2e tests and CI deploy.

---

## Skills

**Frontend:** React 19, Next.js 16, TypeScript (strict), Tailwind CSS v4, MUI, Redux Toolkit,
TanStack Query, Zustand
**Mobile / desktop:** React Native (bare CLI), Electron
**Backend:** Node.js, NestJS, Python (FastAPI, aiogram), REST, WebSocket, PostgreSQL, Prisma,
Firestore
**AI:** Gemini API, Claude Code (multi-agent workflow), LangChain, ChromaDB, RAG, prompt-injection
defense
**Tooling:** Git, GitHub Actions, Docker, Vite, Vitest, Playwright, Firebase, Railway, Linux

## Education

**Proteach IT training center, Kokand** · Sep 2024 – Aug 2025 · programming track
**Secondary school** · graduated May 2026

## Languages

Uzbek (native) · English (reads technical documentation) · Russian (basic)
