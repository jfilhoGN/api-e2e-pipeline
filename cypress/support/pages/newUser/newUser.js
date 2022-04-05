import newUserElements from "./elements";
import { newUser } from "../../../fixtures/dataUtils/dataUtilsE2e";

class NewUser {
  static inputName() {
    cy.get(newUserElements.inputName).type(newUser.name);
  }

  static validateInputName() {
    cy.get(newUserElements.inputName).should("have.value", newUser.name);
  }

  static inputEmail() {
    cy.get(newUserElements.inputEmail).type(newUser.email);
  }

  static validateInputEmail() {
    cy.get(newUserElements.inputEmail).should("have.value", newUser.email);
  }

  static inputPassword() {
    cy.get(newUserElements.inputPassword).type(newUser.password);
  }

  static clickButtonRegister() {
    cy.get(newUserElements.buttonRegister).click();
  }

  static validateUserRegisterSuccess() {
    cy.findAllByText("Usuário inserido com sucesso").should("exist");
  }

  static validateErrorMessage(fieldError) {
    cy.findAllByText(`${fieldError} é um campo obrigatório`).should("exist");
  }
}

export default NewUser;
