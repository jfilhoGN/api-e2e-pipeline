import Menu from "../../support/pages/menu/menu";
context("Menu", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("That the user clicks on the New User tab and directs the page to create a new user", () => {
    Menu.clickMenuItem("Novo usuário?");
    Menu.validateUrlCorrectRedirect("/cadastro");
  });

  it("Let the user click on the page name and redirect to login", () => {
    Menu.clickMenuItem("Seu Barriga");
    Menu.validateUrlCorrectRedirect("/login");
  });

  it("That the user clicks on the login tab and directs the login page", () => {
    Menu.clickMenuItem("Login");
    Menu.validateUrlCorrectRedirect("/login");
  });

  it("That the user already logged in can click on the bill menu and be redirected to create a bill", () => {
    cy.login();
    Menu.clickMenuItem("Contas");
    Menu.clickMenuItem("Adicionar");
    Menu.validateUrlCorrectRedirect("/addConta");
  });

  it("That the user already logged in can click on the bill menu and be redirected to list a bill", () => {
    cy.login();
    Menu.clickMenuItem("Contas");
    Menu.clickMenuItem("Listar");
    Menu.validateUrlCorrectRedirect("/contas");
  });

  it("That the user already logged in can click on the monthly summary menu and be redirected to check the monthly statement", () => {
    cy.login();
    Menu.clickMenuItem("Resumo Mensal");
    Menu.validateUrlCorrectRedirect("/extrato");
  });

  it("That the user can log out of the system", () => {
    cy.login();
    Menu.clickMenuItem("Sair");
    Menu.validateUrlCorrectRedirect("/logout");
  });
});
