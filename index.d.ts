/// <reference types="cypress" />

namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Starts a time span using the User Timings API. A `cy.time`
     * should always be followed by a `cy.timeEnd` with the same label.
     * This command is useful for getting durations for a series of
     * commands and getting performance profiles out of your application
     * given some series of commands you want to profile.
     * @param label Name of the time span you wish to capture
     */
    time(label: string): Chainable<null>;
    /**
     * Ends a time span using the User Timings API.
     * @param label Name of the time span you wish to capture
     */
    timeEnd(label: string): Chainable<PerformanceEntry>;
  }
}
