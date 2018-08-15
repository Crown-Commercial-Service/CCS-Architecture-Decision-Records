# 5. Use version control, trunk based development and continuous integration

Date: 2018-07-10

## Status

Accepted

## Context

CCS is developing many new services over the coming months, each of which will be producing new application source code. 

These services will be developed by several independent teams including people from different supplier organisations.

There is a risk that each workstream operates in a different way using different standards which could lead to confusion and complexity in the future.

#### Version control
It is standard industry practice that all source code should be stored somewhere that allows it to be properly versioned and controlled. 

There are several options for software version control, including for example SVN, Git, Mercurial and Team Foundation Server (TFS) etc.

CCS already uses [Git](https://en.wikipedia.org/wiki/Git#Adoption) for the Data Submission Service and Salesforce. Git is also widely used across government, and the industry as a whole (for example Microsoft is migrating Windows development to use Git).

Git is a distributed version control system, which means that a full copy of the repository is stored locally on the developer’s device. It is standard practice for a copy of a Git repository to be stored in a central place so that code can be shared between developers.

CCS uses GitHub as this central place for Salesforce and Data Submission Service, while DigiTS uses BitBucket. GitHub is widely used across government including for [all GDS services](https://github.com/alphagov). Other services also exist including BitBucket, GitLab, AWS CodeCommit and Google CloudSource.

### Trunk-based development
[Trunk-based development](https://trunkbaseddevelopment.com/) is a source code management methodology which is aimed at making it easier for multiple people to make changes to code at the same time without breaking each other’s work.

With many teams working on common interfaces, there is a risk that development activities will work to different versions, which can cause integration issues later on. Trunk based development reduces the risk of this occurring.

### Continuous integration (CI)
[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) (CI) is a software development practice that involves regularly and automatically running unit and integration tests on code as it is being developed. The aim of this practice is to reduce potential integration issues later in development.

The adoption of CI can also reduce the time-to-deployment by introducing automated testing and standardised builds. This is important part of being able to [deploy software regularly](https://www.gov.uk/service-manual/technology/deploying-software-regularly) as recommended in the Service Manual.

## Decision

All new services will use Git for version control and GitHub as a central code repository. We will use public repositories by default, unless there is a convincing reason not to (which must approved by TDDA and then be documented in the README of the private repository).

All new services will adopt Trunk-based development and Continuous Integration practices. Any branches should be short-lived feature branches which last for no more than a few days before being merged into the trunk. Feature switches should be deployed where necessary. 

Services should use a common continuous integration tool and build monitor, with a common set of build phases. A decision on this common tool and common build phases isn’t made in this ADR, but will be subject to a future ADR.

The decision to use GitHub as the central code repository should be reviewed in 6 months to determine if a better alternative is available.

CCS-owned source code should be migrated to use Git and GitHub. 

We should develop an approach to evaluate the impacts of migrating existing services to use Trunk-based development and Continuous Integration practices.

## Consequences

Teams building new services should follow this ADR by default unless there is an architectural decision overriding this decision.

We will review the decision to use GitHub in 6 months.

Any CCS-owned source code should be migrated to Git and GitHub.

We should review existing services to identify the impacts of migrating them to Trunk-based development and Continuous Integration practices.

CCS may need to procure more GitHub user licences.
