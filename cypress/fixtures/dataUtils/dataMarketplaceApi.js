var faker = require("faker-br");

export const accesMarketPlace = {
  email: Cypress.config("email"),
  password: Cypress.config("password"),
};

export const endpoints = {
  produtos: Cypress.config("endpointProdutos"),
  login: Cypress.config("endpointLogin"),
};

export const productMouse = {
  nome: "Logitech MX Vertical",
  preco: 470,
  descricao: "Mouse",
  quantidade: 382,
  _id: "BeeJh5lz3k6kSIzA",
};

export const productTv = {
  nome: "Samsung 60 polegadas",
  preco: 5240,
  descricao: "TV",
  quantidade: 49977,
  _id: "K6leHdftCeOJj8BJ",
};

export const newProduct = {
  nome: `${faker.lorem.word()}+${faker.random.number()}`,
  preco: faker.random.number(),
  descricao: "Monitor",
  quantidade: 100,
};
