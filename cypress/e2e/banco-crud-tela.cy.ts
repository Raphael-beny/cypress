describe('empty spec', () => {

  before(() => {
    cy.visit('http://localhost:4200/banco')
  })

    it('criar banco', () => {
      cy.get('[data-test="banco-open-form"]').click();
      cy.get('[data-test="banco-form-codigo"]').type("999");
      cy.get('[data-test="banco-form-nome"]').type("Teste");
      cy.get('[data-test="banco-form-tipo"]').
        click().
        find('ul li > span')
        .contains('Banco de Desenvolvimento')
        .click();
      cy.get('[data-test="banco-form-submit"]').click();
      cy.get('.p-dialog-header-close-icon').click();
    })

    it('editar banco', () => {
      cy.get(':nth-child(1) > .text-center > .mr-2').click();
      cy.get('[data-test="banco-form-codigo"]').type("{selectall}998");
      cy.get('[data-test="banco-form-nome"]').type("{selectAll}Teste Alterado");
      cy.get('[data-test="banco-form-tipo"]').
        click().
        find('ul li > span')
        .contains('Banco de Desenvolvimento')
        .click();
      cy.get('[data-test="banco-form-submit"]').click();
      cy.get('.p-dialog-header-close-icon').click();
    })

    it('excluir banco', () => {
      cy.get(':nth-child(1) > .text-center > .ml-2').click();
      cy.get('.p-button-danger').click();
    })

  })