import METHODS from "../../fixtures/method.json";
import {
  accesMarketPlace,
  newProduct,
  endpoints,
} from "../../fixtures/dataUtils/dataMarketplaceApi";

context("Add Product in Marketplace", () => {
  it("Add product in marketplace and returned message Successfully registered ", () => {
    cy.loginMarketplace(accesMarketPlace.email, accesMarketPlace.password).then(
      (idAuthorization) => {
        cy.request({
          method: METHODS.POST,
          url: endpoints.produtos,
          headers: {
            Authorization: idAuthorization,
          },
          body: newProduct,
        }).then((response) => {
          expect(response).property("status").to.eq(201);
          expect(response).property("body").to.not.empty;
          const { body } = response;
          expect(body).to.have.keys("message", "_id");
          expect(body).to.contain({
            message: "Cadastro realizado com sucesso",
          });
        });
      }
    );
  });

  it("Add product without access token and should return missing token error", () => {
    cy.request({
      method: METHODS.POST,
      url: endpoints.produtos,
      body: newProduct,
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
