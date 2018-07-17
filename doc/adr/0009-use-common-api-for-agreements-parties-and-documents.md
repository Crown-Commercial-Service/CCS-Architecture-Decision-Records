# 9. Use common API for Agreements, Parties and Documents

Date: 2018-07-10

## Status

Accepted

## Context

Architectural Decision 003 Use a common records layer decides to use a common records layer. Common Sourcing design defines how to interact various components in a coordinated sourcing strategy.

All Agreement services need party and agreement records to coordinate supplier registration and DPS qualification with the buyer journey.

## Decision

- Store all new suppliers and updates using Party API
- Store all new buyers and updates using Party API
- Retrieve details of services and supplier offers from Agreement API 
- Retrieve attachments from Document store (S3, with metadata in agreements)
- Store purchase orders in Agreements API where appropriate
- Synchronise with SalesForce as needed

As Suppliers are added to, removed from or change their offer on agreements, the service will call the common record API to update all required consumers.

Store relevant supporting documents and attachments directly in AWS S3, with a supporting document API to synchronise with SalesForce content linked to document URI. Salesforce API links may be fragile and have access limits. S3 documents have an easier API for volume based consumption. The S3 store can be used to insulate the service for SalesForce web releases.

The agreement and Party APIs have not been defined yet but will use json over HTTPS with RESTful access patterns, with OAuth identity tokens. This is in line with GDS guidelines. OAuth is used instead of simple shared secrets because the number of API clients is likely to be large and fluid. Data definitions will be controlled by CCS but will map to OCDS standards wherever practical. 

Agreement records will contain:

- Agreements, lot structure, items (services) and related content, and call-offs
- Interests linking suppliers (by ID) to Agreements and their offers
- Offers from Suppliers linked to the relevant part of agreements services
- Purchase orders where appropriate

Party records will contain details about buyer and supplier organizations (not individuals):

- Supplier identifiers and details
    - supplier qualifications questions and answers
    - other details not specific to agreements
- Buyer identifiers and details.
    - articulation of various user needs not specific to agreements, such as details of physical estate, people, plans, budgets.

Individual data, where needed, will be stored as user ID references to CCS ID only.

## Consequences

- These records need to have been put in place
- Agreement records API and Agreement repository must be built to support agreement services
- Party records API must be built to support agreement services
