describe('My first test', () => {
  it('Klikker om oss', () => {
    cy.visit("http://localhost:5174/")

    cy.contains("oss").click()
    cy.url().should("include","/OmOss")
  })
})