import METHODS from "../fixtures/method.json";
import {
  newProduct,
  endpoints,
} from "../fixtures/dataUtils/dataMarketplaceApi";

Cypress.Commands.add("loginMarketplace", (email, password) => {
  cy.request({
    method: METHODS.POST,
    url: endpoints.login,
    body: {
      email,
      password,
    },
  }).then((response) => {
    expect(response).property("status").to.eq(200);
    expect(response).property("body").to.not.empty;
    const { body } = response;
    expect(body).to.have.keys("message", "authorization");
    expect(body).to.contain({
      message: "Login realizado com sucesso",
    });
    return body.authorization;
  });
});

Cypress.Commands.add("createProduct", (tokenAuthorization) => {
  cy.request({
    method: METHODS.POST,
    url: endpoints.produtos,
    headers: {
      Authorization: tokenAuthorization,
    },
    body: newProduct,
  }).then((response) => {
    expect(response).property("status").to.eq(201);
    expect(response).property("body").to.not.empty;
    const { body } = response;
    expect(body).to.have.keys("message", "_id");
    return body._id;
  });
});
