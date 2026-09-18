# JobRadar AI — Architecture

## Architecture goal
Build an evidence-first, temporal career-intelligence platform with deterministic eligibility rules and provider-abstracted web intelligence.

## Proposed stack
- Web: Next.js + TypeScript
- UI: Tailwind CSS + accessible component primitives
- Validation: Zod
- Database: PostgreSQL / Supabase
- Authentication: Supabase Auth
- Storage: Supabase Storage where needed
- Search: PostgreSQL full-text initially
- Semantic retrieval: pgvector only when validated as useful
- Web intelligence: Tavily behind provider interfaces
- Deployment: Vercel
- Async work: durable queue/scheduler appropriate to production workload
- Observability: structured logs, error monitoring, pipeline metrics

## Primary bounded contexts
### Candidate Intelligence
Career Passport, education, preferences, skills, projects, certifications, resume versions and candidate evidence.

### Company & Source Registry
Companies, official career pages, ATS providers, source authority, watch configuration and crawl state.

### Opportunity Intelligence
Canonical jobs, source records, normalized requirements, provenance, snapshots, diffs and job events.

### Decision Intelligence
Eligibility evaluations, match dimensions, evidence coverage, gap classification, skill-market statistics and counterfactual unlock analysis.

### Engagement
Watchlists, notifications, daily briefs and application workspace.

### Operations
Crawl/extraction runs, failures, budgets, parser/model versions, feature flags and audited admin actions.

## Ingestion pipeline
```
Company/Watchlist
      |
      v
Source Discovery (Tavily Search/Map + known ATS adapters)
      |
      v
Source Fetch/Extract
      |
      v
Schema Validation
      |
      v
Normalization
      |
      +--> Canonicalization/Dedup
      |
      +--> Provenance records
      |
      v
Snapshot persistence
      |
      v
Meaningful Diff Engine
      |
      v
Job Events
      |
      +--> Eligibility re-evaluation
      +--> Match/evidence re-evaluation
      +--> Alerts / Daily Brief
```

## Provider abstraction
Do not couple the core product directly to Tavily.

Interfaces:
- SearchProvider
- SiteMapProvider
- CrawlProvider
- ExtractProvider
- ResearchProvider (optional/deep workflows)

Tavily is the first implementation. ATS-specific adapters should bypass general extraction when a trustworthy structured source exists.

## Source authority
Default authority order:
1. official employer structured ATS/API
2. official employer career page
3. official employer-linked third-party ATS
4. trusted aggregator
5. other public source

Authority is evidence, not truth by fiat. Conflicts are stored and shown.

## Data model principles
- Canonical job separate from source records.
- Raw snapshots separate from normalized structured data.
- Field-level provenance where material.
- Unknown values remain nullable/unknown rather than guessed.
- Evaluation outputs are versioned.
- Historical application state references immutable job snapshot.
- Large raw snapshots have explicit retention rules.

## Security boundaries
- Server-side authorization for protected actions.
- RLS where Supabase tables are user-owned.
- Secrets only server-side.
- Strict upload validation.
- SSRF protection for user-supplied URLs.
- Rate limiting for public/expensive routes.
- Audit privileged/admin actions.
- No credentials in repository or browser bundle.

## Cost controls
- URL fingerprints
- content hashes
- fetch caching
- scheduled refresh tiers
- domain rate limits
- retry/backoff
- crawl budgets
- source-health tracking
- cost attribution per run/company/job

## Test architecture
- unit tests: parsers, normalization, eligibility, diff, scoring helpers
- integration tests: DB + API + auth + pipeline boundaries
- fixture tests: different ATS/job-page shapes
- adversarial tests: ambiguity, source conflicts, duplicates
- E2E tests: critical user flow
- AI eval set: extraction correctness, unsupported-claim rate, attribution quality

## Repository conventions
Until implementation proves a better layout:
- `src/app` — Next.js routes/layouts
- `src/features/*` — feature-oriented application modules
- `src/lib/*` — shared infrastructure
- `src/server/*` — server-only integrations/services
- `src/types/*` — cross-feature contracts only
- `tests/fixtures` — deterministic ingestion/evaluation fixtures
- `docs` — architecture/plans/runbooks
- `supabase/migrations` — database migrations

Prefer small focused files and feature-oriented ownership over large technical-layer buckets.
