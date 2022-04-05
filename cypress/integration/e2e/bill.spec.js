import Bill from "../../support/pages/bill/bill";
import { bill } from "../../fixtures/dataUtils/dataUtilsE2e";
context("Page Bill - AddBill", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.login();
    cy.visit("/addConta");
  });

  it("That the user can successfully register a bill", () => {
    Bill.inputName(bill.name);
    Bill.clickSave();
    Bill.validateMessageBillSuccess();
  });

  it("That the user tries to add the same bill and returns that this bill already exists", () => {
    Bill.inputName(bill.name);
    Bill.clickSave();
    Bill.validateErrorBillAlreadyExists();
  });

  it("That the user clicks on save without adding the bill and returns mandatory field error", () => {
    Bill.clickSave();
    Bill.validateErrorMessageField();
  });
});
