# SaaS Subscription Management — Case Study

**Industry:** SaaS / Financial operations  
**Duration:** 16 weeks  
**Role:** Aithentrix (CEO — Project Manager & Delivery Oversight)

## Client problem
The client managed subscriptions manually, resulting in billing errors and delayed renewals.

## Solution
We designed and delivered a cloud SaaS application with:
- Customer portal (self-serve)
- Automated billing and invoicing (Stripe integration)
- Recurring subscription engine
- Admin dashboard for reports & KPIs
- Email & SMS reminders for renewals

## Key Features Delivered
- Subscription plans & trials
- Automated invoices & tax handling
- Payment gateway integration (Stripe)
- Admin analytics and export
- Multi-currency support

## Tech Stack (recommendation)
Frontend: React | Backend: Node.js + Express | DB: PostgreSQL | Payments: Stripe | Hosting: AWS

## Timeline
- Discovery & BRD: 2 weeks
- UI/UX & Wireframes: 2 weeks
- Development (M1–M3): 10 weeks
- QA & Launch: 2 weeks

## Outcome
- 70% fewer billing errors
- 25% faster onboarding for new customers
- Improved revenue collection and reduced churn

## CEO Role (Subrato)
- Led discovery, signed-off BRD & scope
- Managed milestones and client communications
- Coordinated dev/design/QA teams
- Oversaw delivery and UAT

---

##  How the System Runs & Works (For Client Understanding)

Below is a simple explanation of how the SaaS Subscription Platform operates during development, testing, and deployment.

---

###  Backend (API Layer)

Our backend system powers subscriptions, billing, invoicing, user authentication, notifications, and admin operations.

During setup, the backend:

- Loads project configuration from environment variables  
- Connects securely to the database  
- Integrates with Stripe for subscriptions & payments  
- Activates webhooks to handle automated billing events  
- Runs background tasks for renewals and reminders  

This ensures that all subscription processes (billing, renewals, invoices, failed payments, tax handling) run reliably.

---

###  Stripe Billing & Webhooks

Stripe is used for:

- Secure payment processing  
- Subscription plan management  
- Automatic renewal billing  
- Invoice generation  
- Tax calculations (if enabled)  
- Multi-currency support  

To enable real-time automation, Stripe notifies our backend via secure **webhooks** whenever:

- A payment succeeds or fails  
- A subscription is created, renewed, canceled, or expired  
- An invoice is generated or updated  

These events keep the system 100% accurate and up-to-date without manual work.

---

###  Frontend (Customer & Admin Portals)

The frontend includes:

- **Customer Portal** → Browse plans, subscribe, manage billing  
- **Admin Dashboard** → Create plans, track revenue, export reports  
- **Secure Login System** with JWT  
- **Stripe Checkout** for safe, PCI-compliant payments  

Everything is built for a clean user experience and easy navigation.
