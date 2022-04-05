import CreateTransition from "../../support/pages/createTransition/createTransition";

context("Create Transition Page", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.login();
  });

  it("That the user can create a transaction with the paid situation", () => {
    cy.visit("/addConta");
    cy.createBill();
    cy.visit("/movimentacao");
    const revenue = "Receita";
    CreateTransition.selectTransitionType(revenue);
    CreateTransition.inputDateTransition();
    CreateTransition.inputDatePayment();
    CreateTransition.inputDescription();
    CreateTransition.inputInterested();
    CreateTransition.inputValueTransition();
    CreateTransition.selectBill();
    CreateTransition.radioSituationPaid();
    CreateTransition.clickSave();
    CreateTransition.validateMessageCreateTansitionSuccess();
  });

  it("That the user tries to create a transaction without adding value and that the field is mandatory", () => {
    cy.visit("/movimentacao");
    const expense = "Despesa";
    CreateTransition.selectTransitionType(expense);
    CreateTransition.inputDateTransition();
    CreateTransition.inputDatePayment();
    CreateTransition.inputDescription();
    CreateTransition.inputInterested();
    CreateTransition.radioSituationPendent();
    CreateTransition.clickSave();
    CreateTransition.validateErrorMessageValue();
  });
});
