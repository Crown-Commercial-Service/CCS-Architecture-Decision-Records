# 8. CMp use shared store for capturing buyer needs

Date: 2018-07-10

## Status

Accepted

## Context

Each commercial agreement will ask the buyer questions in order to ascertain what outcomes and supplier offers are applicable to the buyer. Some of these questions will be the same across agreements. Many will have common patterns and data, even if they differ in detail.

In the future we will want to more automatically match buyers’ articulations of need so as to work out which products CCS can offer to meet their need.

The buyer needs data needs to be stored during a buying journey, but final agreement details, when the buyer agrees a call-off for instance, will need to be stored in the agreement records.

## Decision

Use a shared component to store user tasks in a question and answer format during buying journeys

The Q&A definitions should be defined from a common repository defining the agreements

Agreed outcomes must be stored in the agreement records

## Consequences

Each agreement buyer journey service must call to a shared service to record Q&A activity and track user progress. It is not acceptable to hard code questions in each flow. The flow itself, however, can be hard coded in each commercial agreement service.

The service will need to maintain and update the state of the task (especially if multiple actions are required to complete the task).
