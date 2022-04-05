import METHODS from "../../fixtures/method.json";
import {
  productMouse,
  productTv,
  endpoints,
} from "../../fixtures/dataUtils/dataMarketplaceApi";

context("List Products Marketplace", () => {
  it("List all products of marketplace and validade status code e list products not empty", () => {
    cy.request({
      method: METHODS.GET,
      url: endpoints.produtos,
    }).then((response) => {
      expect(response).property("status").to.eq(200);
      expect(response).property("body").to.not.empty;
      const { body } = response;
      expect(body).property("produtos").to.not.empty;
    });
  });

  it("List product by ID and returned correct product", () => {
    cy.request({
      method: METHODS.GET,
      url: `${endpoints.produtos}/${productMouse._id}`,
    }).then((response) => {
      expect(response).property("status").to.eq(200);
      expect(response).property("body").to.not.empty;
      const { body } = response;
      expect(body).to.contain(productMouse);
    });
  });

  it("List product by Id and returned message Product not found", () => {
    cy.request({
      method: METHODS.GET,
      url: `${endpoints.produtos}/123`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).property("status").to.eq(400);
      expect(response).property("body").to.not.empty;
      const { body } = response;
      expect(body).to.deep.equal({
        message: "Produto não encontrado",
      });
    });
  });

  it("Search a product and returned correct product", () => {
    cy.request({
      method: METHODS.GET,
      url: `${endpoints.produtos}?descricao=${productTv.descricao}`,
    }).then((response) => {
      expect(response).property("status").to.eq(200);
      expect(response).property("body").to.not.empty;
      const { body } = response;
      expect(body).to.deep.eq({
        quantidade: 1,
        produtos: [productTv],
      });
    });
  });
});
