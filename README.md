# CCS-Architecture-Decision-Records
CCS will record here all **[architecture decision records](doc/adr)**:
 - that need to be agreed at TDDA
 - that apply to more than one project
 - where those decisions are _not_ considered sensitive

Project specific records can be stored in a separate repository. See, for instance,
[DataSubmissionService-ADRs](https://github.com/Crown-Commercial-Service/DataSubmissionService-ADRs).

## Process

1. All Architecture decision records that are _not_ considered sensitive should be mastered here.
1. records should be named ADR-XXXX-\<name>.md
1. Some diagrams are stored in .dot file format - they need to be converted to `jpg` format.

## Structure

```
/doc/adr - adr files
/doc/diagrams - .dot diagram source files
/doc/images - images generated from .dot files for linking into ADRs.
```

### Diagrams

As an experiment we will store some diagrams in [.dot](https://www.graphviz.org/documentation/) language.
That allows us to change control diagrams. But it adds a generation stage which we can incorporate into our build pipeline.
Until then we can generate the files via command lines or web tools.

## Decisions

* [1. use a common cloud provider](doc/adr/0001-use-a-common-cloud-provider.md)
* [2. Use a consistent user experience](doc/adr/0002-use-a-consistent-user-experience.md)
* [3. Common records layer](doc/adr/0003-common-records-layer.md)
* [4. Language choices for new development](doc/adr/0004-language-choices-for-new-development.md)
* [5. Use version control, trunk based development and continuous integration](doc/adr/0005-use-version-control-trunk-based-development-and-continuous-integration.md)
* [6. All new services should use the same front end toolkit](doc/adr/0006-all-new-services-should-use-the-same-front-end-toolkit.md)
* [7. Use common CMp component model](doc/adr/0007-use-common-CMp-component-model.md)
* [8. CMp use shared store for capturing buyer needs](doc/adr/0008-cmp-use-shared-store-for-capturing-buyer-needs.md)
* [9. Use common API for Agreements, Parties and Documents](doc/adr/0009-use-common-api-for-agreements-parties-and-documents.md)
* [10. Use shared definition of CMp agreement when building all CMp services](doc/adr/0010-use-shared-definition-of-cmp-agreement-when-building-all-cmp-services.md)
* [11. Use the same cloud architecture](doc/adr/0011-use-the-same-cloud-architecture.md)

