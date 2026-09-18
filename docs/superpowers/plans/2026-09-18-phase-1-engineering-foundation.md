# Phase 1 Engineering Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish a secure, strict, testable Next.js/TypeScript foundation that can support the later JobRadar intelligence phases without prematurely implementing product features.

**Architecture:** A Next.js 16.3 App Router application with server-first defaults. Runtime configuration is validated in a server-only module, health/readiness is exposed through a route handler, and CI gates typecheck/lint/tests/build. No database or external API integration is introduced in this phase.

**Tech Stack:** Next.js 16.3.3, React 19, TypeScript, Zod, Vitest, ESLint, npm, GitHub Actions.

**Spec:** `PRODUCT_SPEC.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `DECISIONS.md`

## Global Constraints
- Never commit secrets.
- Use Node.js runtime by default.
- Prefer Server Components unless client behavior is required.
- No Supabase/Tavily code in Phase 1.
- No fake production integrations.
- Every behavioral production function is introduced test-first.
- Phase 1 gate: install, typecheck, lint, tests and production build all pass.

---

### Task 1: Project scaffold and quality commands

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `eslint.config.mjs`
- Create: `.gitignore`
- Create: `.env.example`
- Create: `vitest.config.ts`

**Interfaces:**
- Produces npm scripts: `dev`, `build`, `start`, `typecheck`, `lint`, `test`, `test:run`, `verify`.
- Produces `@/*` -> `./src/*` TypeScript alias.

- [ ] Create package metadata and dependencies pinned to safe compatible versions.
- [ ] Enable `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` and `noImplicitOverride`.
- [ ] Configure ESLint using `eslint-config-next` Core Web Vitals + TypeScript presets.
- [ ] Configure Vitest for Node-side unit tests.
- [ ] Add secret-safe ignore rules and documented environment example.
- [ ] Generate and commit npm lockfile after verification.

### Task 2: Environment validation (TDD)

**Files:**
- Create first: `src/server/env.test.ts`
- Then create: `src/server/env.ts`

**Interfaces:**
- Produces: `parseServerEnv(input: NodeJS.ProcessEnv): ServerEnv`
- Produces: `serverEnv` lazily from `process.env`

- [ ] Write a failing test proving invalid `NODE_ENV` is rejected.
- [ ] Run the test and confirm it fails because implementation is absent.
- [ ] Implement the minimal Zod schema.
- [ ] Verify the test passes.
- [ ] Add tests for accepted environments and optional `APP_URL`.
- [ ] Keep future Supabase/Tavily variables out until their phases.

### Task 3: Health endpoint (TDD)

**Files:**
- Create first: `src/app/api/health/route.test.ts`
- Then create: `src/app/api/health/route.ts`

**Interfaces:**
- Produces: `GET(): Promise<Response> | Response`
- Response shape: `{ status: "ok", service: "jobradar-ai" }`

- [ ] Write a failing route-handler test.
- [ ] Run and confirm expected failure.
- [ ] Implement minimal GET handler.
- [ ] Verify status 200 and JSON contract.

### Task 4: Minimal application shell

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/app/error.tsx`
- Create: `src/app/not-found.tsx`

**Interfaces:**
- Produces a server-rendered product shell only; no business functionality.

- [ ] Add accessible metadata and semantic layout.
- [ ] Add restrained product positioning consistent with `PRODUCT_SPEC.md`.
- [ ] Add global error and not-found states.
- [ ] Keep page free of fake metrics/testimonials/live job claims.

### Task 5: CI gate

**Files:**
- Create: `.github/workflows/ci.yml`

**Interfaces:**
- Pull requests/pushes run install, typecheck, lint, tests and build.

- [ ] Use current Node LTS supported by Next.js 16.
- [ ] Use `npm ci`.
- [ ] Run `npm run verify`.
- [ ] Run `npm run build`.
- [ ] Ensure no external secrets are required in Phase 1 CI.

### Task 6: Local verification and lockfile

**Files:**
- Create: `package-lock.json`

- [ ] Install from package metadata.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run test:run`.
- [ ] Run `npm run build`.
- [ ] Run `npm audit --omit=dev` and record material production findings.
- [ ] Commit generated lockfile.

### Task 7: Phase ledger update

**Files:**
- Modify: `PHASE_STATUS.md`

- [ ] Record exact verification results.
- [ ] Mark Phase 1 COMPLETE only if every gate passes.
- [ ] Otherwise mark BLOCKED with exact failing command and evidence.
- [ ] Do not start Phase 2 until Phase 1 is green.
