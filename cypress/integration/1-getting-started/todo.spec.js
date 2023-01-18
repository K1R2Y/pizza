/// <reference types="cypress" />
Cypress.on('uncaught:exception', () => false);
it('should open web site', ()=> {
    cy.visit('http://localhost:3000/');
    cy.location('protocol').should('eq', 'http:')
    cy.get('.container input').click().type('Пеппероні{enter}')
    cy.get('.content__items svg rect',{ timeout: 10000 }).should('not.exist')
    
    
    //cy.get('div[class="Search_input__GkS+P"]')
    //.should.('be.visble')
    //.click()
    //cy.get('.categories > ul > :nth-child(3)').click()
    //cy.get(':nth-child(3) > .pizza-block > .pizza-block__title').click()
    //cy.get(':nth-child(3) > .pizza-block > .pizza-block__selector > :nth-child(2) > :nth-child(2)').click()
    //cy.get(':nth-child(3) > .pizza-block > .pizza-block__bottom > .button').click()
    //cy.get('.header__cart > .button').click()
    //cy.get('.cart__item-count-plus').click()
});
