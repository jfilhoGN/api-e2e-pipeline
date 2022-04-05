var faker = require("faker-br");
const today = new Date();
const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
const month =
  today.getMonth() + 1 < 10 ? "0" + today.getMonth() : today.getMonth();
const year = today.getFullYear();

export const newUser = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

export const userStatic = {
  name: Cypress.config("name"),
  email: Cypress.config("email"),
  password: Cypress.config("password"),
};

export const bill = {
  name: `${faker.finance.account()}+${faker.random.number()}`,
};

export const transition = {
  dataTransition: `${day}/${month}/${year}`,
  dataPayment: `${day}/${month}/${year}`,
  description: faker.lorem.word(),
  interested: faker.name.firstName(),
  value: faker.random.number(),
  bill: `${faker.finance.account()}+${faker.random.number()}`,
};
