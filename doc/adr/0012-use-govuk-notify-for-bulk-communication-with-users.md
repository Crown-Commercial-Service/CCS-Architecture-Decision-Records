# 12. Use GOV.UK Notify for bulk communication with users

Date: 2018-11-28

Note that CCS Architectural Standards are now mastered in Confluence. The updated version of this standard can be found at: https://crowncommercialservice.atlassian.net/wiki/spaces/AG/pages/585826383/Notify+for+bulk+communication+with+users

## Status

Accepted

## Context

Most public-facing digital services have a need to notify its users about something at a critical business process, or just to manage their expectations to prevent incoming contact.

The notifications can, for example, be:

* Telling a supplier they have a task to complete,
* Telling a supplier that a deadline is approaching,
* Telling a supplier that a buyer has been shortlisted for a procurement,
* Providing a receipt,
* Providing status updates,
* Etc...

Generally, the notifications will be email, but may also need to be SMS in some cases.

To reduce the need for each organisation or service team to build its own infrastructure for sending email and SMS based messages, the Government Digital Service (GDS) has built GOV.UK Notify.

GOV.UK Notify can send notifications either via an API call, or by uploading a CSV to the website. Sending email is free, and the service provides feedback on what messages have failed to be delivered.

The service is already used in various parts of CCS, including MISO, Report MI, DigiTS etc.

Using GOV.UK Notify instead of other solutions (eg using the BCC field in an email) also reduces the potential for an accidental data breach.


## Decision

We will use GOV.UK Notify to send notifications to users of any newly built CCS digital services.

This will make sure Notify offers the same user experience across all CCS digital services, and it is currently the most cost-effective (having no-cost for emails) bulk messaging 3rd party solution on the market.

The dashboard to create new Notify templates and send bulk emails is very easy, and new Service Teams at CCS can easily be onboarded to use it, with minimal/no training.

This ADR does not apply to generic Email Newsletter communication, for which other, more market specific tools may be more appropriate.


## Consequences

We will set up a GOV.UK Notify account per digital project, and configure the appropriate message templates.

The GOV.UK Notify account will need to be maintained as part of the future operation of all digital services at CCS.
