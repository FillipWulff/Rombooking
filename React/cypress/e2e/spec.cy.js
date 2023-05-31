describe('My first test', () => {
  it('Klikker om oss', () => {
    cy.visit("http://localhost:5174/")

    cy.contains("oss").click()
    cy.url().should("include","/OmOss")
  })
})

describe('The Home Page', () =>
  {it('successfullyloads', () =>{
    cy.visit("http://localhost:5173")

    cy.contains("Kartoversikt").click()

    cy.contains("GRØNN BASE").click()

    cy.url().should('include', '/Kartoversikt/GronnBase')
  })
})