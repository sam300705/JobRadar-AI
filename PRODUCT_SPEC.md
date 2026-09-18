# JobRadar AI — Product Specification

## Product thesis
JobRadar AI is a production-grade **Career Intelligence System**, not a conventional job board. It continuously discovers public job opportunities from authoritative sources, verifies whether they are still live, evaluates candidate eligibility separately from relevance, links requirements to candidate evidence, tracks job changes over time, and turns observed market demand into actionable career intelligence.

## Core user questions
1. What relevant opportunities actually exist right now?
2. Is the original employer still accepting applications?
3. Am I genuinely eligible?
4. What evidence from my real work supports the match?
5. What specifically blocks eligibility or relevance?
6. Which realistic career action would unlock the most relevant opportunities?

## Product identity
- Verified over viral.
- Evidence over keywords.
- Eligibility over guesswork.
- Changes over static listings.
- Career intelligence over endless scrolling.
- Truth over artificial AI confidence.

## Signature systems
### Source-of-truth layer
Prefer official employer career pages and official ATS records. Persist provenance for material extracted fields.

### Temporal Job Graph
Treat jobs as evolving entities:
`JOB -> SNAPSHOTS -> CHANGES -> EVENTS`.
Track first seen, last seen, last verified, meaningful revisions, closure and reappearance.

### Eligibility Compiler
LLMs may extract requirements, but deterministic rules evaluate explicit constraints wherever possible. Supported states:
- ELIGIBLE
- INELIGIBLE
- UNCERTAIN
- NOT_ENOUGH_INFORMATION

Hard eligibility is never merged into a soft match score.

### Candidate Evidence Graph
Model:
`Candidate -> Project/Artifact -> Capability -> Technology -> Job Requirement`.
Evidence states:
- CLAIMED
- DEMONSTRATED
- VERIFIED
- NOT_FOUND

### Requirement Coverage Matrix
For each requirement, expose evidence strength and gap classification:
- TRUE_GAP
- RESUME_GAP
- PROOF_GAP
- DEPTH_GAP
- OPTIONAL_GAP
- UNCERTAIN_GAP

### Job Trust Card
Expose source authority, current visibility, official ATS recognition, last verification time, confirmed/unknown fields, duplicate sources, source conflicts and revision count.

### Skill Market Graph
Aggregate skill demand from the user's own target opportunity set, with explicit sample/time-window boundaries.

### Opportunity Unlock Simulator
Run counterfactuals against actual stored job requirements. Example: “If I can demonstrate Docker, how many currently relevant opportunities improve?” Never present this as a promise of employment.

## Trust contract
JobRadar must never invent:
- qualifications
- salary
- deadlines
- employer statements
- candidate skills
- project accomplishments
- job activity
- interview or employment guarantees

Use KNOWN / INFERRED / UNKNOWN and VERIFIED / UNVERIFIED / UNCERTAIN intentionally.

## Public-web boundary
Use public employer/ATS information only. Do not bypass authentication, CAPTCHAs, private data controls, or technical restrictions. Prefer official APIs, feeds and structured ATS endpoints where available.

## Initial candidate QA fixture
The first golden test fixture is Kumar Sambhav's supplied 2027 B.Tech CS/IT resume. It is a QA fixture only; behavior must remain generic.

## Initial target
V1 prioritizes students/freshers and early-career software roles, especially graduation-year-aware opportunities, while keeping the architecture general enough for professional users later.

## Definition of done
A production-capable release must demonstrate:
1. Account creation and secure sign-in.
2. Resume -> editable Career Passport without fabricated data.
3. Candidate evidence graph.
4. User role/company/watch preferences.
5. Public opportunity discovery.
6. Official-source identification and provenance.
7. Job normalization and duplicate merging.
8. Live-status verification.
9. Requirement extraction with evidence.
10. Deterministic eligibility evaluation.
11. Separate explainable relevance/evidence analysis.
12. Radar presentation.
13. Repeat fetch -> snapshot -> meaningful change event.
14. Eligibility re-evaluation after changes.
15. Accurate alerts.
16. Skill-market analysis.
17. Opportunity Unlock simulation.
18. Application tracking with historical job snapshot.
19. Secure, observable, testable production deployment.

## Non-goals for early releases
Do not prioritize social feeds, candidate chat, mass auto-apply, generic cover-letter generators, generic interview bots, gamification, resume-template marketplaces, or opaque AI scores.
