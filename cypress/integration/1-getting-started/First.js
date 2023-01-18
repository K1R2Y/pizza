/// <reference types="cypress" />
Cypress.on('uncaught:exception', () => false);
it('should open web site', ()=> {
    cy.visit('http://localhost:3000/');
    cy.viewport(1920, 1080)
    cy.location('protocol').should('eq', 'http:')
    cy.get('div[class="Search_input__GkS+P"]')
    .should.('be.visble')
    .click()
})