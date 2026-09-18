# Database migrations

JobRadar AI uses committed, forward-only PostgreSQL migrations under this directory.

## Rules

- Phase 1 establishes the migration location only; no product schema exists yet.
- Phase 2 introduces the first authentication/user migration after the Supabase project is connected.
- Migration files use the Supabase timestamp convention: `YYYYMMDDHHMMSS_description.sql`.
- Never edit an already-applied production migration. Add a new corrective migration instead.
- Every schema change must be reproducible from migrations and reviewed with its authorization/RLS implications.
- Destructive changes require an explicit data-migration/rollback plan.
- Generated demo data never belongs in production migrations.
- Secrets and credentials must never appear in SQL migrations.
