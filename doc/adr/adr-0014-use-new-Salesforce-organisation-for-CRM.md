# 14. Use new Salesforce organisation for CRM

Date: 2019-02-18

## Status

Approved

## Abstract

CCS have decided to implement a new, clean Salesforce organisation for the CRM platform for reasons of time and cost.  This means that there will be some additional technical debt and that the business processes remaining in Salesforce will need to be migrated to a new platform.

## Context

Salesforce is currently live within CCS and is used for a number of processes, including managing commercial agreements.  It has not so far been used as a pure CRM tool.

It has been agreed by Exec to implement a CRM system.  As Salesforce was originally designed as a CRM tool, it is proposed to utilise Sf in this context.  The existing instance, however, has been significantly customised and contains a large quantity of poor-quality data.

## Decision

The current Sf instance be maintained, but that a new Sf instance specifically for use as a CRM, without significant customisation.

## Consequences

- Increased admin - additional workload in administering the second instance
- Need to integrate - Unless the new instance will be standalone, there may be cost and time implications for any required integrations
- Data quality - Issues of data quality are not necessarily solved by a new instance.  Good business processes and user training will be required
- Technical debt - Introduction of an additional system, whether on existing technology platforms or otherwise, will incur additional technical debt
- Quicker time to implement - Being able to freely implement a CRM instance without the legacy of earlier Sf customisation may decrease implementation time.
- No changes to existing Sf service - Existing workloads can be maintained on the current platform without change                                                                                                                    
