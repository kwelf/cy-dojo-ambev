describe("Criar perfil", () => {
  beforeEach(() => {
    cy.createUser("Douglas Silva Machado", "douglas1111@gmail.com", "123456");
    cy.visit("https://conexaoqa.herokuapp.com/login");
    cy.login("douglas1111@gmail.com", "123456");
  });

  it("Deve criar perfil com sucesso - Usando Commands", () => {
    cy.get('[data-test="dashboard-createProfile"]').click();
    cy.get("#mui-component-select-status").customSelect("QA Junior");
    cy.get(
      '[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("Travessos");
    cy.get(
      '[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("http://www.google.com");
    cy.get(
      '[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("USA");
    cy.get(
      '[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("Developer");
    cy.get(
      '[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input'
    ).type("@kwelf");
    cy.get('textarea[name="bio"]').type("Meu profile bio");
    cy.get('[data-test="profile-submit"]').click();
    cy.get('[data-test="dashboard-welcome"]').should(
      "contain",
      "Bem-vindo Douglas Silva Machado"
    );
  });
});