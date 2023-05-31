
describe('The Home Page', () =>
  {it('successfullyloads', () =>{
    cy.visit("http://localhost:5173")

    cy.contains("Kartoversikt").click()

    cy.contains("GRØNN BASE").click()

    cy.url().should('include', '/Kartoversikt/GronnBase')
  })
})