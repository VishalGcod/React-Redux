describe("Validating Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Check for Headers", () => {
    cy.get("h1").contains("Build The Community Your Fans Will Love");
  });
  it("Check for Data", () => {
    cy.get("dt");
  });
  it("Check for button click", () => {
    cy.get('[data-test="my-button"]').click();
  });
  it("Check for form input", () => {
    cy.get("#input-name");
  });
  it("Check for input values", () => {
    cy.get("#input-name").type("vishal");
    cy.get("#input-name").should("have.value", "vishal");
    cy.get("#input-name").type("vishal1233455667789");
    cy.get("#input-pass").type("123");
    cy.get("#submit-button").click();
  });
  it("Check for correct input value takes to drawer page", () => {
    cy.visit("http://localhost:3000/login");
    cy.get(".textInput").type("vishal");
    cy.get(".passwordInput").type("123");
    cy.get(".subBtn").click();
    cy.url().should("include", "http://localhost:3000/drawer");
  });
  it("Check for input value in wrong url", () => {
    cy.get(".textInput").type("vishal");
    cy.get(".passwordInput").type("12345");
  });
  it("Check for password having value", () => {
    cy.visit("http://localhost:3000/login");
    cy.get(".passwordInput").should("have.value");
  });
  it("Check for input value", () => {
    cy.visit("http://localhost:3000/login");
    cy.get(".textInput").should("exist");
    cy.get(".textInput").should("have.value");
  });
  it("Check for submit without values", () => {
    cy.visit("http://localhost:3000/login");
    cy.get(".subBtn").click();
  });
  it("Check for submit without values", () => {
    cy.get("#input-name").should("have.value");
    cy.get("#input-pass").should("have.value");
    cy.get("#submit-button").click();
  });
  it("Check for submit without values", () => {
    cy.get("#input-name").should("have.attr", "placeholder", "enter name");
    cy.get("#input-pass").should("have.attr", "placeholder", "enter password");
    cy.get("#submit-button").click();
  });
});
