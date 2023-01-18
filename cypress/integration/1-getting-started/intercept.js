/// <reference types="cypress" />

const { findAllInRenderedTree } = require("react-dom/test-utils");

Cypress.on('uncaught:exception', () => false);
it('should open web site', ()=> {
   let name = ['Пеппероні Фреш з перцем', 'Кисло-солодке циплятко', 'Крейзі пеппероні']
   cy.intercept('GET','https://634c6231317dc96a30975abf.mockapi.io/pizzas?page=1&limit=4&category=2&sortBy=rating&order=desc&search=').as('requestTag'); 
   cy.visit('http://localhost:3000/')
   cy.get('.categories > ul > :nth-child(3)').click()
   cy.wait('@requestTag')
   cy.get('@requestTag').then(res => {
    console.log(res)
   for (let x = 0; x<name.length; x++){
   expect(res.response.body.[x].title).to.contain(name[x])
   }     
   })
});
