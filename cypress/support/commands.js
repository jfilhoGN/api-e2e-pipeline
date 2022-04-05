import Login from "./pages/login/login";
import Bill from "./pages/bill/bill";
import { transition } from "../fixtures/dataUtils/dataUtilsE2e";

Cypress.Commands.add("login", () => {
  Login.inputEmail();
  Login.validateInputEmail();
  Login.inputPassword();
  Login.clickLogin();
  Login.validateUserLoggedSuccess();
});

Cypress.Commands.add("createBill", () => {
  const bill = transition.bill;
  cy.visit("/addConta");
  Bill.inputName(bill);
  Bill.clickSave();
  Bill.validateMessageBillSuccess();
  cy.setCookie("bill", bill);
});
