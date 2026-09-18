# JobRadar AI — Gated Roadmap

Each phase follows:
**Inspect -> Plan -> Implement -> Test -> Verify -> Fix -> Re-test -> Document -> Proceed**

A phase cannot be marked complete with known critical failures.

## Phase 0 — Repository Audit + Product Contract
Status: IN PROGRESS
Deliverables: PRODUCT_SPEC.md, ARCHITECTURE.md, ROADMAP.md, DECISIONS.md, PHASE_STATUS.md.
Gate: repository state understood; no destructive rewrite without justification.

## Phase 1 — Engineering Foundation
Next.js/TypeScript foundation, strict config, environment validation, lint/format, tests, CI, logging baseline, health endpoint, preview-ready build.
Gate: clean install/build/tests; no leaked secrets.

## Phase 2 — Authentication + User Foundation
Supabase-backed auth, sessions, protected routes, profile, RLS.
Gate: unauthorized and cross-user isolation tests pass.

## Phase 3 — Career Passport
Resume upload/import, structured candidate model, editing/confirmation, education/preferences/skills/projects.
Gate: real resume creates a passport without invented facts.

## Phase 4 — Candidate Evidence Graph
Skills/projects/resume/certification evidence with provenance.
Gate: every evidence relationship traceable.

## Phase 5 — Company + Source Registry
Company, career-page, ATS, source authority/status and seed companies.
Gate: multiple sources per company with clear authority.

## Phase 6 — Tavily Intelligence Layer
Search/map/crawl/extract provider implementation with cache/retry/budgets/metrics.
Gate: a company can produce traceable career/job sources.

## Phase 7 — ATS + Direct Source Adapters
Structured adapters for high-value ATS patterns; Tavily fallback.
Gate: multiple source types normalize to common contracts.

## Phase 8 — Job Normalization + Canonicalization
Canonical jobs, source relationships and duplicate merging.
Gate: same opening appears once.

## Phase 9 — Verification + Trust Engine
Live verification, official-source detection, trust signals and source conflicts.
Gate: every displayed trust conclusion is explainable.

## Phase 10 — Snapshot + Job Diff Engine
Immutable snapshots, meaningful field diffs and job events.
Gate: signal changes generate events; markup noise does not.

## Phase 11 — Eligibility Compiler
Requirement extraction schema, deterministic evaluation and uncertainty.
Gate: release-blocking eligibility matrix passes.

## Phase 12 — Match + Job DNA
Explainable relevance dimensions separate from eligibility.
Gate: no opaque unexplained score.

## Phase 13 — Requirement Evidence Matrix
Requirement-to-candidate evidence and gap classification.
Gate: supported/unsupported/uncertain are traceable.

## Phase 14 — Skill Market Graph
Demand aggregation with dataset/time-window boundaries.
Gate: every statistic has defined sample and period.

## Phase 15 — Opportunity Unlock Simulator
Counterfactual skill/evidence analysis on live relevant jobs.
Gate: outputs derive from stored requirements, not generic advice.

## Phase 16 — Radar Dashboard
Event-centric views: new, changed, closing, newly eligible, target companies, gaps.
Gate: useful without endless-feed browsing.

## Phase 17 — Search + Filters
Structured, advanced and natural-language-to-structured search.
Gate: query behavior is reproducible/explainable.

## Phase 18 — Watchlists
Companies, roles, skills, locations and programs.
Gate: watchlists materially drive ingestion/alerts.

## Phase 19 — Alerts
In-app + email, preferences, dedupe, quiet periods and digest.
Gate: no duplicate alert storms.

## Phase 20 — Application Workspace
Status workflow, snapshot/resume-version references, notes and follow-ups.
Gate: application history remains correct after job changes/closure.

## Phase 21 — AI Career Analyst
Conversation grounded exclusively in stored evidence for factual job claims.
Gate: hallucination/evidence tests pass.

## Phase 22 — Daily Career Brief
Event-derived personalized brief.
Gate: no events means no invented update.

## Phase 23 — Admin + Operations
Secure control plane for sources, failures, costs and pipeline health.
Gate: normal users cannot access admin data/actions.

## Phase 24 — Security Hardening
Threat model, authorization/upload/SSRF/rate-limit/dependency/secret review.
Gate: no unresolved critical/high findings.

## Phase 25 — AI Evaluation + Reliability
Curated eval data and regression metrics.
Gate: agreed extraction/eligibility thresholds met.

## Phase 26 — Cost + Scale Optimization
Cache, refresh policy, queue tuning, indexes and retention.
Gate: measurable unit economics for representative load.

## Phase 27 — Production UX Pass
Responsive/accessibility/error/loading/performance polish.
Gate: critical flows work on desktop and mobile.

## Phase 28 — Deployment
Production data/env/Vercel/scheduler/monitoring/backups.
Gate: production smoke test passes.

## Phase 29 — Observability
Frontend/API/worker/crawl/extraction/latency/DB/API-usage monitoring.
Gate: major failures are visible before user reports.

## Phase 30 — Closed Beta
Measure eligibility correctness, freshness, duplicates, alert utility, recommendation utility.
Gate: evidence-backed product-quality review.

## Phase 31 — Productization
Only after quality is proven: plans, premium watch frequency, expanded company coverage and advanced intelligence.
