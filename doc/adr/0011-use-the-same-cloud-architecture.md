# 11. Use the same cloud architecture

Date: 2018-07-23

## Status

Approved

## Context

CCS are  building 5 new services for Crown Marketplace (CMp) over the next few months and each
will need to decide on a range of cloud technologies.

We will want to ensure that new code and services delivered with/for CCS follow a standard pattern,
and are not constrained by habitual toolsets from suppliers, which will make future operation more
complex.

Existing decisions set the context for new services

- [0001-use-a-common-cloud-provider](0001-use-a-common-cloud-provider.md)
- [0004-language-choices-for-new-development](0004-language-choices-for-new-development.md)
- [0005-use-version-control-trunk-based-development-and-continuous-integration](0005-use-version-control-trunk-based-development-and-continuous-integration.md)

There are a number of more detailed decisions that need to be made on how to build, package, deploy and operate these new services.

## Existing digital services

DigiTS and CCS ID both use Spring Boot and are packaged/deployed with AWS Elastic Beanstalk.

Data Submission Service is built with Ruby on Rails, deployed with Terraform scripted infrastructure into AWS Elastic
Container Service Docker containers, and some Lambda functions.

Digital Marketplace is built with Python Flask into Docker containers, deployed to GOV.UK PaaS using CloudFoundry, with
additional components deployed using Terraform.


## Goals

- All services should use the same Identity & Access Management (IAM) strategy and user accounts hierarchy
   - Properly discriminate between service operator roles, service admin roles, infrastructure roles, security
     policies and zones, and application roles
   - Same approach to administration accounts
   - Possibly different accounts per framework for some roles
- All services should use the same consolidated billing
- Identify (tag) resources so they can be differentiated by service
- Use a consistent logging strategy such that logs can be aggregated across services
- Use a consistent monitoring strategy such that incidents can be monitored across services
- All services should use the same infrastructure deployment technology
- All services should comply with the same zoning strategy
- It is easy to create dev and test environments
- All services that integrate must be built and integration tested together

Assuming a REST based microservice strategy, and complying with CCS technology strategy.

# Decision

## Infrastructure configuration code
- Use Terraform to define infrastructure

## Containerisation
- Use Docker containers, deployed by Terraform on AWS ECS - portable, simple
- Use AWS auto scaling features - built into network infrastructure; well understood
- Use AWS lambda functions for high volume highly variable functions where appropriate
## Content distribution network
- Use AWS CloudFront - cheap, easy to configure, adequate
## Continuous Integration suite
- Use AWS CodeBuild, CodePipeline, CodeDeploy to manage build pipeline - cheap, no additional config, SaaS approach
## Source Control
- Use CCS GitHub - it [exists](https://github.com/Crown-Commercial-Service); common tech; well understood
## Account management
- Use AWS IAM
- Follow [best practice](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
for account management.
- Document and use a consistent template and process for IAM user, group and policy management
across CCS services
## Consistent network design
- Put layers in different VPCs or Security Groups
- Differentiate between admin and web ports and routes
- Use multiple availability zones
## Security
- Closely follow [NCSC Cloud Security Policy](https://www.ncsc.gov.uk/guidance/implementing-cloud-security-principles)
- Closely follow [NCSC Bulk Data Policy](https://www.ncsc.gov.uk/guidance/protecting-bulk-personal-data-main)
## Discovery and Config
- Use DNS for service discovery
- Environment specific config via Terraform environment variables
- Optionally use AWS API Gateway for service discovery

## Availability features
- implement bulkhead and circuit breaker patterns in Docker containers
- enable auto-scaling architecture on container cluster
- test component failure
- design for multiple availability zones
- (Possble exception -- exception - Gluu is scaled via EC2 manually and may not be Containerisable

## Logging
- Use CloudWatch for AWS resource monitoring
- Use common log format
- Use transaction tracing through service calls
- Use CloudWatch Logs for log aggregation

## Resource management
- Label resources according to a documented tagging model, with tags for layer, service, and where applicable, owning business area.
