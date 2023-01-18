/// <reference types="cypress" />

const { get } = require("browser-sync");

Cypress.on('uncaught:exception', () => false);
it('should open web site', ()=> {
    cy.visit('http://localhost:3000/');
    get('.content__items')
})