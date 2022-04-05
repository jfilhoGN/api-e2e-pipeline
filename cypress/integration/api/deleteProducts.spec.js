import METHODS from "../../fixtures/method.json";
import {
  accesMarketPlace,
  endpoints,
} from "../../fixtures/dataUtils/dataMarketplaceApi";

context("Delete Products in Marketplace", () => {
  it("Delete product by Id and returned message Successfully deleted record", () => {
    cy.loginMarketplace(accesMarketPlace.email, accesMarketPlace.password).then(
      (idAuthorization) => {
        cy.createProduct(idAuthorization).then((idProduct) => {
          cy.request({
            method: METHODS.DELETE,
            url: `${endpoints.produtos}/${idProduct}`,
            headers: {
              Authorization: idAuthorization,
            },
          }).then((response) => {
            expect(response).property("status").to.eq(200);
            expect(response).property("body").to.not.empty;
            const { body } = response;
            expect(body).to.contain({
              message: "Registro excluído com sucesso",
            });
          });
        });
      }
    );
  });

  it("Delete product by Id and returned error of It is not allowed to delete product that is part of cart", () => {
    cy.loginMarketplace(accesMarketPlace.email, accesMarketPlace.password).then(
      (idAuthorization) => {
        cy.createProduct(idAuthorization).then(() => {
          cy.request({
            method: METHODS.DELETE,
            url: `${endpoints.produtos}/BeeJh5lz3k6kSIzA`,
            headers: {
              Authorization: idAuthorization,
            },
            failOnStatusCode: false,
          }).then((response) => {
            expect(response).property("status").to.eq(400);
            expect(response).property("body").to.not.empty;
            const { body } = response;
            expect(body).to.contain({
              message:
                "Não é permitido excluir produto que faz parte de carrinho",
            });
          });
        });
      }
    );
  });
});
