// import elements from '../../elements.json'
import links from '../../links.json'

describe('Speaker Hall', () => {
  before(() => {
    cy.login()
  })

  it('Check the Speaker Hall page', () => {
    cy.pollyVisit(links.speaker.hall, { name: 'speaker-hall' })
    cy.contains('Speaker Hall')
    cy.contains('My talks')
    cy.contains('No talk yet! You should create your first talk')
  })
})
