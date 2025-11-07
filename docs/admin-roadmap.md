# Admin Platform Roadmap

This document captures the next steps required to turn the new `/admin` dashboard into a full backend operations console.

## 1. API & Data Layer
- **Backend stack:** Recommend building a tRPC/Express or NestJS service with PostgreSQL (Neon/AWS RDS). Define entities for Clients, Engagements, Meetings, Forms, Runbooks.
- **Auth:** Add SSO (Okta/AAD) or JWT-based session service. Ensure RBAC (Ops Lead, Engagement Lead, Finance).
- **Telemetry ingest:** Connect to existing monitoring platforms (Datadog/New Relic) via webhooks to populate MTTR/automation data.
- **Forms:** Create `/api/forms` endpoints to store Reliability Baseline requests, contact submissions, and meeting notes.

## 2. Frontend Integration
- Replace mock data in `src/data/admin.ts` with hooks powered by React Query hitting `/api/*` endpoints.
- Add optimistic updates for client health changes, meeting scheduling, and program progress.
- Introduce filtering (industry, stage) and search.

## 3. Analytics & Reporting
- Embed charts (Recharts already in repo) for MTTR trends, automation adoption, cost stability. Use same color palette.
- Export capabilities: PDF or CSV snapshots with metrics, pipeline, and inbound requests.
- Notification center fed by the API to highlight watch/critical accounts.

## 4. Security & Ops
- Feature flag `/admin` behind auth middleware in `App.tsx` once backend auth is added.
- Log admin actions for audit (who changed stage, who scheduled call, etc.).
- Ensure data residency + compliance for healthcare/finance clients.

## 5. Next UI Enhancements
- Add editable drawers for clients/meetings.
- Build Kanban for Stage 1–4 journey.
- Integrate reliability baseline form submissions with scheduling (Calendly/HubSpot) directly.

Keep this roadmap updated as backend milestones ship.
