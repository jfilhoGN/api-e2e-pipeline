import transitionElements from "./element";
import { bill, transition } from "../../../fixtures/dataUtils/dataUtilsE2e";

class CreateTransition {
  static selectTransitionType(type) {
    cy.get(transitionElements.selectType).select(type);
  }

  static inputDateTransition() {
    cy.get(transitionElements.inputDateTransition).type(
      transition.dataTransition
    );
  }

  static inputDatePayment() {
    cy.get(transitionElements.inputDataPayment).type(transition.dataPayment);
  }

  static inputDescription() {
    cy.get(transitionElements.inputDescription).type(transition.description);
  }

  static inputInterested() {
    cy.get(transitionElements.inputInterested).type(transition.interested);
  }

  static inputValueTransition() {
    cy.get(transitionElements.inputValue).type(transition.value);
  }

  static selectBill() {
    cy.getCookie("bill").then((cookie) => {
      cy.get(transitionElements.selectBill).select(cookie.value);
    });
  }

  static radioSituationPaid() {
    cy.get(transitionElements.radioPaid).check();
  }

  static radioSituationPendent() {
    cy.get(transitionElements.radioPendent).check();
  }

  static clickSave() {
    cy.findAllByText("Salvar").should("exist").click();
  }

  static validateMessageCreateTansitionSuccess() {
    cy.findAllByText("Movimentação adicionada com sucesso!").should("exist");
  }

  static validateErrorMessageValue() {
    cy.findAllByText("Valor é obrigatório").should("exist");
  }
}

export default CreateTransition;
