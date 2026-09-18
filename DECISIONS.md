# JobRadar AI — Architecture Decision Log

## ADR-001 — Build career intelligence, not a job-board clone
**Status:** Accepted
**Decision:** The core product is verified, temporal, evidence-backed opportunity intelligence.
**Reason:** Generic search, matching, tracking and resume assistance are already crowded. The product moat should be provenance, eligibility correctness, job changes, evidence mapping and market-derived career actions.

## ADR-002 — Separate eligibility from relevance
**Status:** Accepted
**Decision:** Hard eligibility uses explicit states and deterministic evaluation where possible. Relevance is a separate explainable analysis.
**Reason:** A high skill match can still be ineligible; combining them creates misleading outputs.

## ADR-003 — Model jobs as temporal entities
**Status:** Accepted
**Decision:** Store canonical job + source records + immutable snapshots + meaningful changes/events.
**Reason:** Career opportunities change after first discovery; freshness and revision history are product features.

## ADR-004 — Prefer official sources
**Status:** Accepted
**Decision:** Employer and employer-linked ATS sources receive highest default authority. Conflicts are preserved and surfaced.
**Reason:** Aggregators can be stale or inconsistent.

## ADR-005 — Tavily is a provider, not the data model
**Status:** Accepted
**Decision:** Tavily is integrated through provider interfaces; ATS adapters may bypass it.
**Reason:** Avoid lock-in, control cost and keep core intelligence testable.

## ADR-006 — PostgreSQL/Supabase as durable system of record
**Status:** Accepted
**Decision:** Use PostgreSQL with migrations, constraints and RLS where user isolation applies.
**Reason:** The product is relational, historical and provenance-heavy.

## ADR-007 — TypeScript end-to-end for V1
**Status:** Accepted
**Decision:** Next.js + TypeScript for web/backend application logic.
**Reason:** Single-language velocity and alignment with the initial candidate/developer stack.

## ADR-008 — LLM extraction, deterministic evaluation
**Status:** Accepted
**Decision:** LLMs can interpret messy job text into validated structures; deterministic code applies explicit eligibility rules.
**Reason:** Reduces hallucination and makes decisions testable.

## ADR-009 — Unknown is a first-class value
**Status:** Accepted
**Decision:** Missing/ambiguous data remains UNKNOWN/UNCERTAIN rather than inferred without evidence.
**Reason:** Trustworthiness is more important than cosmetic completeness.

## ADR-010 — No early mass auto-apply
**Status:** Accepted
**Decision:** Early releases focus on discovery, verification, intelligence and application tracking.
**Reason:** Auto-apply adds operational/legal/quality complexity without strengthening the unique product thesis.

## ADR-011 — Golden fixture must not become hard-coded behavior
**Status:** Accepted
**Decision:** The supplied resume is used as a QA fixture only.
**Reason:** The product must remain general and multi-user.

## ADR-012 — Gated delivery
**Status:** Accepted
**Decision:** Each phase has explicit acceptance criteria; failed critical gates block dependent phases.
**Reason:** Prevents a polished shell over unreliable core intelligence.
