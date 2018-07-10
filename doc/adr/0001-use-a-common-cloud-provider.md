# 1. use a common cloud provider

Date: 2018-07-10

Crown Commercial Service uses many different approaches for hosting business applications. These are not managed consistently, and each new project has to make its own decision on what route to use.

This paper seeks approval for the use of a 'default' common cloud platform for new services.

## Status
Approved

## Abstract

CCS have decided to ...
because ...
which means ...

## Context

### Current landscape
There are many existing services and applications in CCS, each of which has made their own decision about how to host their systems.

For example, we have recently developed a private beta service for Travel bookings (DigiTS) which uses Amazon Web Service (AWS). We have also procured a database and reporting platform (Powerbuilder and SQL Server) which is hosted on Microsoft Azure.

This is a non-exhaustive list of hosting platforms in use across CCS:

|System           | Hosting arrangement |
|-------          |---------------------|
|DigiTS (Travel)  |   AWS managed by Keytree|
|Data Warehouse   | Azure (Powerbuilder and SQL Warehouse)|
|CaSIE            | Azure  |
|Contracts Finder, TRUK | Azure managed by NQC |
|Digital Marketplace | GDS Government-as-a-Platform managed service on top of AWS |
|Emptoris, Bravo, SalesForce, MISO, Fleet Portal, Optima | Supplier specific |

### Imperative for decision
CCS will be producing several services over the next few months which will need to make decisions relating to appropriate cloud hosting. 

Crown Marketplace (CMp) already operate the DigiTS service on AWS. A decision on the future hosting and support for this service will be required shortly.

CMp also need to decide on a hosting platform for the next 4 frameworks, starting with Facilities Management. 
  
The Facilities Management service will be built using a Digital Marketplace approach and will potentially reuse code and assets from there. A Digital Outcomes and Specialists framework tender has already been issued for Facilities Management. All CMp frameworks are likely to operate on the same software, so a single provider would be advantageous

The first phase of core CMp deliverables may also require cloud hosting, as will the new Data Submission Service.

There is likely to be an overhead for having a different approach for each project, and we arguably don't have sufficient capabilities and controls for any of the existing solutions.


## Decision

We use Amazon Web Services (AWS) as the default cloud provider for newly built services which require Infrastructure as a Service (IaaS) or Platform as a Service (PaaS) hosting.

This will provide clarity for the immediate in-flight projects (eg Facilities Management, CMp first phase, Data Submission Service, DigiTS etc) and allow us to consider consolidating support and operations of these services.

New services which are not to be hosted on AWS will require an Architectural Decision to explain why.

We will re-evaluate this decision in 6 months, taking account of current market trends, industry moves, the upcoming pipeline of work and the success of the current in flight projects. 

This decision does not apply to services comprised entirely of Software as a Service (SaaS) solutions, and does not affect systems which already exist.

## Consequences

New services will be hosted in AWS unless there is an architectural decision overriding this decision.

We will need to establish a commercial mechanism for managing AWS accounts. We will also need to consider what capability we require to design and run the platform.

We must provide support and training to the existing Applications and Infrastructure Team to enable them to support services on AWS.

Prior to the next review, we should develop an approach to evaluate existing services and assess whether they should be migrated to an alternative cloud provider.

We will review this decision in 6 months.
