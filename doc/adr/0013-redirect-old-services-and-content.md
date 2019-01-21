# 13. Redirect old services and content

Date: 2018-11-28

## Status

Accepted

## Context

As we replace services and content their location on the internet may change.

For example:

* When MISO is replaced by Report MI, https://miso.ccs.cabinetoffice.gov.uk will be replaced with https://reportmi.crowncommercial.gov.uk
* When we migrate content from the CCS Agreements website to the new CCS website, content will move from https://ccs-agreements.cabinetoffice.gov.uk/abc to https://www.crowncommercial.gov.uk/xyz.

Many of these domain names and URLs have existed for a long period of time, and can be found all over the internet.

Lots of users will have bookmarked pages, URLs will be published in documents, on company intranets, internal guidance, in the National Archives, buried in inboxes, written on posters and marketing material etc.

If we switch off those URLs, we will break user journeys and make things more difficult for users of our services.

This will also affect SEO rankings in search engines.

We should stop this from happening wherever we can by redirecting users to the replacement content and services.

When GOV.UK replaced Directgov and Business Link, the Government Digital Service adopted a policy of “[no link left behind](https://gds.blog.gov.uk/2012/10/11/no-link-left-behind/)”. They redirected hundreds of thousands of pages of content from these two sites to their equivalents on GOV.UK (or the National Archives for pages that weren’t migrated).

This process of redirection continued for all the sites migrated to GOV.UK and is part of the standard for operating government websites. Prior to GOV.UK, providing redirects was also part of the COI-TG109 minimum technical standards for operating government websites.


## Decision

When we replace a service or move content from one service to another, we should redirect users to either the replacement location or the appropriate cache on the National Archives.

We will issue HTTP 301 (permanent) redirects.

These redirects will be maintained for a minimum of 3 years, after which, they will continue if data shows users continue to access the old URLs.

It will be the responsibility of each project to ensure that this is done - and should form part of the service and operational acceptance criteria.


## Consequences

Each project will need to consider how to apply redirects to the old service or content. This should form part of the production of every new service and iteration of a service to ensure that user journeys are not negatively impacted.

We need to consider adding this to the operational acceptance criteria.

We should also consider whether we can use tools provided by GOV.UK for handling redirects.
