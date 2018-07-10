# 4. Language choices for new development

Date: 2018-07-10

## Status

Accepted

## Context

When developing a new system, there are many possible language choices available.

-CCS uses a mixture of different languages for existing systems including:
- PHP for the Supplier Registration Service and Contracts Finder
- C# for MISO
- Java for the CCS ID and DigiTS services
- Python for the Digital Marketplace

Other services in government use a mixture of PHP, Java, Python, Ruby, Scala and GO.

Picking one standard language for all CCS services could restrict the pool of potential suppliers we could interact with when building new services. Conversely, allowing an unlimited selection of languages can make future management and support of services more complex and expensive.

Agreeing a selection of acceptable languages will allow the greatest flexibility in supplier choice, but also helps minimise future ongoing support costs.

Any decision we make about languages and frameworks should consider:

- Skills available in the current team(s) - what are the current team(s) comfortable using? What do they have experience in?
- Skills of a future team - is there a large enough pool of suppliers and contractors who could support and maintain the services in the future?
- External toolkits and modules - are there useful toolkits and modules which could reduce development effort (eg the GOV.UK Frontend Toolkit)
- Cost - what is the cost of developing in this way? Are there licence costs?
- Hosting - would picking a language restrict hosting options?

We should also consider the Service Manual guide on [choosing technology](https://www.gov.uk/service-manual/technology/choosing-technology-an-introduction).

## Decision

New services developed by CCS should use the following languages:

- Java
- Python
- Ruby
- Javascript

Digital services should also use HTML5, CSS3 and JSON as required.

Salesforce work may continue to use the Salesforce Apex language, but where possible, we should use external web service components to reduce the volume of Apex in use.

New services which do not use these languages will require an Architectural Decision to explain why.

As the software development industry changes quickly, we will re-evaluate this decision in 6 months, taking account of current market trends and industry moves.

This decision does not apply to services comprised entirely of Software as a Service (SaaS) solutions, and does not affect systems which already exist. It also does not cover the development of native mobile applications.

## Consequences

New services will be developed using the languages above unless there is an architectural decision overriding this decision.

We will review this decision in 6 months.

We need to make sure any relevant recruitment, training and procurements (eg via Digital Outcomes and Specialists) takes account of this decision.
