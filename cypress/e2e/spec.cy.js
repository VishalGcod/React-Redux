
describe('Validating Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it("Check for Headers",()=>{
    cy.get("h1").contains("Build The Community Your Fans Will Love")
  })
  it("Check for Data",()=>{
    cy.get("dt")
  })
  it("Check for button click",()=>{
    cy.get('[data-test="my-button"]').click()  })
    it("Check for form input",()=>{
      cy.get('#input-name')
    })
    it("Check for input values",()=>{
      cy.get('#input-name').type("vishal")
      cy.get('#input-name').type("vishal1233455667789")
      cy.get('#input-pass').type("123")
      cy.get('#submit-button').click()
    })
    it("Check for correct input value",()=>{
      cy.visit('http://localhost:3000/login')
      cy.get('.textInput').type("vishal")
      cy.get('.passwordInput').type("123")
      cy.get('.subBtn').click() 
      cy.url().should("include","http://localhost:3000")
    })
    it("Check for input value in wrong url",()=>{
      cy.get('.textInput').type("vishal")
      cy.get('.passwordInput').type("12345")
      cy.get('.subBtn').click() 
    })
    it("Check for input value",()=>{
      cy.visit('http://localhost:3000/login')
      cy.get('.textInput').should("exist")
      cy.get('.passwordInput').should("have.value")
      cy.get('.subBtn').click() 
    })
    it.only("Check for input value",()=>{
      cy.visit('http://localhost:3000/login')
      cy.get('.textInput').type("vishal")
      cy.get('.textInput').should("have.value","vishal")
    })
})