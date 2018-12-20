beforeEach(() => {
  cy.log('Start polly')
})

afterEach(async () => {
  const polly = Cypress.config('polly')
  if (polly) {
    cy.log('Stop polly')
    await polly.stop()
    Cypress.config('polly', null)
  }
})
