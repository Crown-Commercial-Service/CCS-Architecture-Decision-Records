# 3. Common records layer

Date: 2018-07-10

## Status

Accepted

## Context

### Many services

We have many services at the moment each providing a different part of the CCS user journey.

We don't expect there to be a single service that will do all of what CCS needs. In fact even within one part of the user journey there are likely to be several services.

We need an architecture that delivers a consistent and joined up journey for users, and which stores data in a consistent and shareable way, but which allows more than one service.

We envisage the solution to this to be like a 'hamburger' with the top being the consistent web experience, the bottom being the consistent data, and the filling being the services. Our approach to providing a consistent web experience is outlined in ADR-002.

### Distributed data

Data for services is entered many times in different places. For example:

An agreement (eg framework) is first conceived of in a SalesForce pipeline activity
It then gets detailed in word documents
It is entered into competition tools - either Bravo or Emptoris
It is then manually retyped into SalesForce (with automated assistance in Bravo)
It is re-entered into MISO

There is a similar convoluted journey for customer data. For instance customer contact data is entered into SalesForce directly, and into various systems across CCS.

### One source of the truth
Some data will be common across services and software components. We call these common records. These common records will be used by many services. 

In addition, all services should make their data available via API to encourage new patterns of use, even if we don’t know they will be common at first. However, these APIs are less urgent than APIs for common records.

## Decision

### Directive

When designing services you should ensure that: 


All common records are accessed through a common API
Service specific data are made available via an API so it can be used by others
All data types used in APIs are described and published
Common data types are used wherever possible
Government open standards are used where appropriate
Data quality is improved as a result of the service development 


### Recommendation

We should start with an area of data required by the next service we develop, such as user details. We can define APIs so services can access user details without having to reenter or replicate them (which helps with data protection). The API may either store canonical data in SalesForce or in a separate database.

We will commit to improving data quality when we do this.

## Consequences


We will have to define a data layer API and decide which parts will be supported by SalesForce and which will be stored elsewhere

All services will need to publish APIs.

We will need to agree our data governance, and agree to improve data quality. For example we will need to decide on:

- data owners
- data standards
- data definitions
- a process for people to find out what to do about data that is being worked on
- a process for describing our data
