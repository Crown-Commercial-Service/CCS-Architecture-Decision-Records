# 7. Use common CMp component model

Date: 2018-07-10

## Status

Accepted

## Context

We have a number of frameworks being delivered in a series of separate but closely related projects:

Initial marketing activities will be strongly focused on particular buyer segments - for instance with the education sector.

We will use a number of partners to help build these frameworks, but CCS will be the final owners and operators. The frameworks will be built at pace, but will need to share many elements of data, user experience, and logic in order to meet CCS strategy and be deliverable in time at an acceptable level of quality.

## Decision

As defined below, in line with technology strategy, common CMP components will be built and/or used:

- store Agreement data including service offering and supplier interests in a common API
- use common repository for agreement definitions as part of the build process
- use CCS ID for buyer registration and authentication
- use SRS for supplier registration and authentication
- use common API for Party (Buyer and Supplier) details
- synchronise data to and from SalesForce as needed
- all services will be built and integrated together
- use sector specific (initially education) services for needs that are common across agreements
- share common services wherever practicable
- use a common store for questions and answer tasks for framework buyer needs 
- use the same languages and frameworks wherever practicable

![Overall architecture](../images/CMP%20applications%20high%20level%20architecture.jpg)


### Commercial agreement specific services
#### Apprenticeships Buyer Service
Code and services to support Apprenticeship Commercial Agreement. This is a Dynamic Purchasing system agreement, so that suppliers can qualify in and out of the agreement over time. The structure of the service includes items relating to different apprentice training needs. 
#### Consulting Buyer Service
Services for the new framework for buying consulting services, with a further competition workflow. The further competition design will be built based on the DOS framework. Award and call-off creation will be created as soon as possible. We don’t yet know whether common services can be built to facilitate the competition phase, but code will almost certainly be shared with Legal Services, which is very similar.
#### Legal Services Buyer Service
Services for the new framework for buying legal services, very like Consulting services.
#### Supply Teachers Buyer Service
Services for the new framework for finding supply teachers, with location specific and skills based features.
#### Facilities Management Buyer Service
Services for the new framework for buying facilities management, with two lots: one for large procurements, and one for smaller procurements. Features include locality, a large number of service items, and agreement specific rules for when to require further competition. Initially we expect the competition rules to be coded in this service. 

### Common components
#### CCS ID
A service for authenticating buyers.
#### SRS - Supplier Registration Service
A service for registering suppliers, which will need to be extended to support some of these frameworks, if only to support SAML2 authentication to the services for suppliers. 
#### DPS - Dynamic Purchasing Services
A service supporting qualification of suppliers to a number of commercial agreements, which will need to be supplemented for, at least, Apprenticeships. 
#### Sector (e.g Education) specific Registries & Services
Code and services that support sector specific buyers. For example, several services may wish to consult Dfe data sources to understand various things about schools. 
#### common services
Code and services that are shared between teams and commercial agreement services
#### User Needs Q&A Tasks
A store for task data in commercial agreement journeys that may be shared. This allows us to define journeys where buyers don’t have to repeat themselves.
#### Search Index
A logical search capability to locate commercial agreement elements, to be used in CMp phases when buyer directed matching starts to become important. 
#### Agreements Records
Data store and API for commercial agreements, including Frameworks, DPS, call-offs
#### Party Records
Data store and API for parties (buyer and supplier organisations)
#### Documents (Attachments)
Data store for documents linked in agreements and elsewhere
#### Agreements Definitions 
A repository defining agreement types, used at build time by commercial agreement related services.
#### SalesForce
CCS CRM and general workflow environment, and public website.

## Consequences

- different services need to share services and data
