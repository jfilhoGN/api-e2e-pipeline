import billElements from "./elements";

class Bill {
  static inputName(bill) {
    cy.get(billElements.name).type(bill);
  }

  static clickSave() {
    cy.findAllByText("Salvar").should("exist").click();
  }

  static validateErrorMessageField() {
    cy.findAllByText("Informe o nome da conta").should("exist");
  }

  static validateErrorBillAlreadyExists() {
    cy.findAllByText("Já existe uma conta com esse nome!").should("exist");
  }

  static validateMessageBillSuccess() {
    cy.findAllByText("Conta adicionada com sucesso!").should("exist");
  }
}

export default Bill;
