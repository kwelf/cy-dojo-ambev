/// <reference types="cypress" />

describe("Tela de Cadastro", () => {
  beforeEach(() => {
    cy.createUser("Douglas Silva Machado", "douglas1111@gmail.com", "123456");
    cy.visit("https://conexaoqa.herokuapp.com/cadastrar");
  });

  it("Deve validar mensagem de alerta quando cadastrar usuário com email repetido", () => {
    cy.get(
      '[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("Douglas Silva Machado");

    cy.get(
      '[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("douglas1111@gmail.com");
    cy.get(
      '[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("123456");
    cy.get(
      '[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("123456");
    cy.get('[data-test="register-submit"]').click();

    cy.get('[data-test="alert"]').should("have.text", "Usuário já registrado");
  });
});
