import METHODS from "../../fixtures/method.json";
import {
  accesMarketPlace,
  newProduct,
  productMouse,
} from "../../fixtures/dataUtils/dataMarketplaceApi";

context("Edit Products in Marketplace", () => {
  it("Edit product by Id and returned message record successfully changed", () => {
    cy.loginMarketplace(accesMarketPlace.email, accesMarketPlace.password).then(
      (idAuthorization) => {
        cy.createProduct(idAuthorization).then((idProduct) => {
          cy.request({
            method: METHODS.PUT,
            url: `/produtos/${idProduct}`,
            headers: {
              Authorization: idAuthorization,
            },
            body: {
              ...newProduct,
              quantidade: 100,
              preco: 870,
            },
          }).then((response) => {
            expect(response).property("status").to.eq(200);
            expect(response).property("body").to.not.empty;
            const { body } = response;
            expect(body).to.contain({
              message: "Registro alterado com sucesso",
            });
          });
        });
      }
    );
  });

  it("Edit product by Id and returned erro of message Missing, invalid, expired access token or token user no longer exists", () => {
    const { _id, ...productMouseWithoutId } = productMouse;
    cy.request({
      method: METHODS.PUT,
      url: `/produtos/BeeJh5lz3k6kSIzA`,
      body: productMouseWithoutId,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).property("status").to.eq(401);
      expect(response).property("body").to.not.empty;
      const { body } = response;
      expect(body).to.contain({
        message:
          "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais",
      });
    });
  });
});
