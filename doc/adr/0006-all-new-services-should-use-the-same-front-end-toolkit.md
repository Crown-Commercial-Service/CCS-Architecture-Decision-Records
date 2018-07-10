# 6. All new services should use the same front end toolkit

Date: 2018-07-10

## Status

Approved

## Context

The services need to look and feel the same. They need to comply with [adr 0002 - Use a consistent user experience](0002-use-a-consistent-user-experience.md).

NQC’s SRS and DPS services are already built. They comply with GOV.UK styles to a certain extent. They should be partially exempted from this decision for the moment

GDS have released their new [Design System](https://design-system.service.gov.uk). It does not yet support non-GOV.UK designs but that is on the [roadmap](https://design-system.service.gov.uk/roadmap/).

[CCS Website](https://www.crowncommercial.gov.uk/s/) has complied with, and contributed to, GDS patterns, but has a divergent colour palette.

## Decision

- All new services should share a common front end toolkit
- There may be different modules per language, sharing the same HTML, CSS, JavaScript assets
- SRS stylesheets should comply with this kit as closely as practicable. We should revisit this decision as new phases of work are considered for transparency and supplier registration including DPS
- Comply with GDS Design System except where CCS styling requires differences; document the differences
- Use a checkout of the Frontend toolkit as the base for front end resources
- Add a new repository for style and other resource overrides to meet CCS needs, 
- Periodically pull new versions of Frontend toolkit and test
- Work with GDS to help them support non-GOV.UK styles

## Consequences

Teams must share a repository and work out a way to signal changes and test UX reliably.

We extend the GDS Frontend Toolkit and use the same forked repository for all new services

Many resource identifiers will say ‘gov_uk’ or similar but actually refer to CCS designs.

We must monitor Frontend Toolkit and GDS Design System for changes and merge as appropriate.

We must work with GDS to help them understand how non-GOV.UK sites can work with the Design System.
