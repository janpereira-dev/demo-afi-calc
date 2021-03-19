/// <reference types="cypress" />

context('Sumar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/home');
  });

  it('Revisar Responsive en Home', () => {
    cy.viewport('ipad-2', 'portrait');
    cy.wait(500);
    cy.viewport('iphone-4', 'landscape');
    cy.wait(500);
  });

  it('Localizar Sumar en Home', () => {

  });

  
});
