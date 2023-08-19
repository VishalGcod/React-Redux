// import React from "react";
// import { Comp2 } from "../../src/ProtectedRoutePrac"
// import { mount } from 'cypress/react18'
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
    it.only("Check for input value",()=>{
      cy.get('#input-name').type("vishal")
      cy.get('#input-name').type("vishal12334556677899")
      cy.get('#input-pass').type("123")
      cy.get('#submit-button').click()
      cy.visit('http://localhost:3000/login')
    })
})