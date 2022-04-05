import NewUser from "../../support/pages/newUser/newUser";

context("Page New User", () => {
  beforeEach(() => {
    cy.visit("/cadastro");
  });

  it("Expect the user to successfully create a new user", () => {
    NewUser.inputName();
    NewUser.validateInputName();
    NewUser.inputEmail();
    NewUser.validateInputEmail();
    NewUser.inputPassword();
    NewUser.clickButtonRegister();
    NewUser.validateUserRegisterSuccess();
  });

  it("That the user tries to create a record without the name and returns an error that the name field is mandatory", () => {
    const fieldError = "Nome";
    NewUser.inputEmail();
    NewUser.validateInputEmail();
    NewUser.inputPassword();
    NewUser.clickButtonRegister();
    NewUser.validateErrorMessage(fieldError);
  });

  it("That the user tries to create a registration without the email and returns an error that the email field is mandatory", () => {
    const fieldError = "Email";
    NewUser.inputName();
    NewUser.validateInputName();
    NewUser.inputPassword();
    NewUser.clickButtonRegister();
    NewUser.validateErrorMessage(fieldError);
  });

  it("That the user tries to create a registration without the password and returns an error that the password field is mandatory", () => {
    const fieldError = "Senha";
    NewUser.inputName();
    NewUser.validateInputName();
    NewUser.inputEmail();
    NewUser.validateInputEmail();
    NewUser.clickButtonRegister();
    NewUser.validateErrorMessage(fieldError);
  });
});
