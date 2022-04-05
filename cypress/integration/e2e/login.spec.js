import Login from "../../support/pages/login/login";

context("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("That the user can successfully log in", () => {
    Login.inputEmail();
    Login.validateInputEmail();
    Login.inputPassword();
    Login.clickLogin();
    Login.validateUserLoggedSuccess();
  });

  it("That the user, when trying to log in only with the email, be warned that the email is a mandatory field", () => {
    const fieldError = "Email";
    Login.inputPassword();
    Login.clickLogin();
    Login.validateErrorMessage(fieldError);
  });

  it("That the user, when trying to login with the password only, be warned that password is a mandatory field", () => {
    const fieldError = "Senha";
    Login.inputEmail();
    Login.validateInputEmail();
    Login.clickLogin();
    Login.validateErrorMessage(fieldError);
  });
});
