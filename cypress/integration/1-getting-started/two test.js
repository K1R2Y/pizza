/// <reference types="cypress" />
Cypress.on('uncaught:exception', () => false);
it('should open web site', ()=> {
    cy.visit('http://localhost:3000/');
    cy.intercept('GET', 'Search_input__GkS\+P?q=*').as('search');
    cy.contains('Чізбургер-піцца').click();
    cy.wait('@search');
    

});
    