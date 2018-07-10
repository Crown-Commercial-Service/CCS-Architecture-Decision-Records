# 2. Use a consistent user experience

Date: 2018-07-10

## Status

Accepted

## Context

CCS provides many online services, each available through different web domains and providing a different look and feel. 

This provides an inconsistent user experience to people who use CCS services, which makes their use more difficult as users have to re-learn how things work for each new service they access.

For example:


|Service|Domain|Look & Feel|
|-------|------|-----------|
|MISO|miso.ccs.cabinetoffice.gov.uk|Custom
Fleet Portal|fleetportal.crowncommercial.gov.uk|Custom
Energy Portal|ccsutilities.energycloud.com|Custom
Bravo|crowncommercialservice.bravosolution.co.uk|Custom
Emptoris|gpsesourcing.cabinetoffice.gov.uk|Custom
Digital Marketplace|digitalmarketplace.service.gov.uk|GOV.UK Standard
Digital Travel Service (DigiTS)|travel.crowncommecial.gov.uk|GOV.UK Standard
Purchasing Platform|purchasingplatform.crowncommercial.gov.uk|Custom with GOV.UK elements
Supplier Registration Service (SRS / SID4GOV)|supplierregistration.crowncommercial.gov.uk|Similar to GOV.UK 
CCS Here to Help|ccsheretohelp.uk|Custom
CCS Website|crowncommercial.gov.uk|Custom based on GOV.UK with new CCS branding
CCS Salesforce (SSO edition)|buying.crowncommercial.gov.uk|Custom

We don't expect there to be a single service that will do all of what CCS needs - in fact even within one part of the user journey there are likely to be several services.

We need an architecture that delivers a consistent and joined up journey for users.

GOV.UK Design Patterns
GOV.UK provides a series of consistent design patterns which have been developed to make government services look and work the same.

These patterns have been through extensive user research and are used on many high-value and high-traffic government transactions.

These patterns are accompanied by a selection of toolkits and frameworks to allow government services to adopt them easily and quickly. These frameworks also provide useful underlying accessibility features for users.

Recreating these patterns, toolkits, frameworks will take an significant effort.

### Government Digital Service Standard
The [Digital Service Standard](https://www.gov.uk/service-manual/service-standard) applies to all newly built government services. 

Standard #13 requires that all services have a user experience consistent with GOV.UK using the GOV.UK Design Patterns.

### CCS Branding
CCS is developing its own brand to support its marketing activities.

This new brand includes an exemption from the GOV.UK domain for the marketing website.

### Consistency

Jumping between standard GOV.UK design and the custom new CCS brand may cause surprise or confusion for users, and so we should minimise the potential impact from this.

Additionally, users shouldn't be particularly aware that they are moving between subdomains and different services.

### Content Management
Content is a fundamental part of providing a consistent user experience. CCS stores content in various systems, including Wordpress (CCS Here to Help / Energy Portal), Salesforce, Drupal and other locations.

We should review our approach to ensure our content is stored in a consistent manner that meets our needs.

## Decision

For all new services we should use the standard GOV.UK Design Patterns and Frontend Toolkit.

We should apply a minimal CCS-brand to this toolkit, replacing the ‘GOV.UK’ top bar with the CCS colour and brand, and replacing the footer where appropriate. All other design patterns should remain consistent with GOV.UK where possible.

All new services should use the `crowncommercial.gov.uk` domain name. Where new services do not use this domain, there should be an Architectural Decision to explain why.

As we develop new services, we should contribute our research and work back to the GOV.UK design patterns and toolkits to support other government services.

We will review our content management needs before beginning the third phase of the CCS website development.

## Consequences

All new services should use the GOV.UK Design Patterns and Frontend Toolkits.

We should develop a minimal layer on-top of the GOV.UK Frontend Toolkit to apply the CCS brand.

All services should use the `crowncommercial.gov.uk` domain name.

New services which do not follow these decisions will require an Architectural Decision to explain why.

Before starting the third phase of the website project, we should evaluate our needs around content design and produce an appropriate Architectural Decision.
