class Menu {
  static clickMenuItem(item) {
    cy.findAllByText(item).should("exist").click();
  }

  static validateUrlCorrectRedirect(url) {
    cy.url().should("include", url);
  }
}

export default Menu;
