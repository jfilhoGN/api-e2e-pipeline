import { userStatic } from "../../../fixtures/dataUtils/dataUtilsE2e";
import loginElements from "./elements";

class Login {
  static inputEmail() {
    cy.get(loginElements.inputEmail).type(userStatic.email);
  }

  static validateInputEmail() {
    cy.get(loginElements.inputEmail).should("have.value", userStatic.email);
  }

  static inputPassword() {
    cy.get(loginElements.inputPassword).type(userStatic.password);
  }

  static clickLogin() {
    cy.findAllByText("Entrar").should("exist").click();
  }

  static validateErrorMessage(fieldError) {
    cy.findAllByText(`${fieldError} é um campo obrigatório`).should("exist");
  }

  static validateUserLoggedSuccess() {
    cy.findAllByText("Bem vindo, Teste João!").should("exist");
  }
}

export default Login;
