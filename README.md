# Teste API e E2E

Este projeto tem como objetivo demonstrar o funcionamento de testes de API e E2E com a ferramenta Cypress.

## Desafio 1 - E2E

O desafio 1 consiste em criar uma automação e2e na página [Seu Barriga](https://seubarriga.wcaquino.me/), que tem como finalidade realizar o cadastro de contas e gerar movimentações, facilitando o usuário em controlar suas contas. Para a automação e2e foi utilizado a ferramenta cypress, com referência de organização de projeto PageObjects + AppActions. 

Para cada tela da página foi criado um arquivo contendo os cenários mapeados em cada `it()`. Estes se encontram dentro da pasta `integration/e2e`.

## Desafio 2 - API 

Para o desafio 2 foi utilizado o ambiente [ServeRest](https://serverest.dev/) que é uma plataforma criada pelo QA Paulo Gonçalves para servir como material de estudos para teste de API. Brevemente, a plataforma é um serviço de gerenciamento de produtos de uma loja, este tendo a possibilidade de realizar login, criar usuários, criar produtos e carrinhos de compras. Para o desafio foi utilizado o endpoint de **Produtos** sendo esse testado os métodos de listar *GET*, criar *POST*, editar *PUT* e deletar *DELETE*. Todos sendo testados com retorno de valores corretos, bem como testes voltados para validar as excessões. 

Para cada método foi criado um arquivo contendo os cenários de testes mapeados em cada `it()`. Estes se encontram dentro da pasta `integration/api`.

## Divisão do Projeto e Configuração e execução

### Divisão do projeto

* Pasta `config`: pasta contendo arquivos de configuração de ambiente, para o desafio foi criado dois arquivos de configuração, `e2e.json` e `api.json`, sendo cada um deles contendo peculiaridades que é somente responsabilidade de cada ambiente, um exemplo é o `baseUrl`, sendo esse apontado para a especifica url do desafio.

* Pasta `fixtures`: pasta contendo informações estáticas, bem como dados que são utilizados em vários cenários de teste, centralizando nesse arquivo facilita a manutenção de código e diminuição de código duplicado.
  
  * `method.json`: arquivo que contém todos os métodos utilizados para os testes de API.

  * `dataMarketplaceApi.js`: arquivo contendo dados que são utilizados nos testes, por exemplo corpo de requisição de um produto completo e informações de login.  

  * `dataUtilsE2e.js`: arquivo que contém dados que são utilizados nos testes e2e, um exemplo é a os dados gerados pela ferramenta `faker` para realizarmos uma movimentação.

* Pasta `integration`: subdivida em duas pastas `api` e `e2e`, sendo dentro de cada uma os cenários de testes especificios para cada desafio. Para os testes de API os testes foram desenvolvidos em um formato que haja indepêndencia entre os cenários, por exemplo para os testes de criação de produto, este era criado aleatóriamente e posteriormente para os cenários de edição e delete, este código foi padronizado como comando genérico (ver código dentro de `support/commandsApi.js`). Este conceito foi aplicado também para o login.

* Pasta `support`: pasta contendo comandos que foram generalizados e que podem ser utilizados no contexto do desafio. Para os testes de API foram criados dois comandos, o primeiro de realizar o login `loginMarketplace`, onde recebe como parâmetro `email` e `senha`, e após o envio da requisição ele retorna o `authorization` que é utilizado por exemplo para realizar a criação de um produto. Já o comando `createProduct` cria um produto e retorna o `id` que é utilizado para realizar a edição ou o delete de um produto.

* Pasta `support/pages`: pasta que contém as classes subdividas por páginas que foram automatizadas. Para a criação dessas classes foi utilizado o conceito de AppActions + PageObjects, sendo que o PageObjects tendo um arquivo contendo os elementos que serão utilizados para a ação do cypress, e a classe que possui os métodos que fazem a ação com esses elementos mapeados. A utilização do PageObjects + AppActions é interessante para a organização do código, sendo que cada método dentro da classe tem uma responsabilidade única. Para esse desafio poderia também ser mapeados por componentes, bem como ter métodos generalistas, contudo com o crescimento do código, ficaria o projeto mais árduo na manutenção.

### Configuração e execução

Para o projeto foi utilizado a ferramenta de testes Cypress que tem como dependência:
 
* Versão mais recente do [Node](https://nodejs.org/en/download/);
* Após a instalação do Node, na raiz do projeto com o terminal aberto execute o comando `npm install` para a instalação das dependências necessárias
* Para executar o cypress para os testes de API (desafio 2) execute no terminal o comando `npm run cy:open:api`
* Para executar o cypress para os testes E2E (desafio 1) execute no terminal o comando `npm run cy:open:e2e`

**Observações adicionais:**

* Utilizado a biblioteca [`faker-br`](https://github.com/tamnil/Faker-br) para criação de nome de produto e número aleatório;
* Para o teste de API no método PUT, para casos de excessão "Já existe produto com esse nome" de status code 400, ele mesmo adicionando todos os campos idênticos, o endpoint retorna status 200 e mensagem "Registro alterado com sucesso", dessa forma realizei o teste de 401 que é de Token inválido ou ausente. 
* Para os testes E2E foi utilizado também a biblioteca [`cypress-testing-library`](https://testing-library.com/docs/cypress-testing-library/intro/), a utilização dessa biblioteca foi para que evitasse a utilização de classes das tags html, por não ser uma boa prática, assim com o `cypress-testing-library`, consegue se mapear o elemento a partir do que é visível do usuário, evitando assim utilizar classes ou atributos de tags html que não são únicas.

### Pipelines (Github Actions)

Para a melhor verificação da execução dos testes, foi criado uma pipeline para mostrar o código automatizado sendo executado, bem como mostrar como poderia ser uma pipeline com estágios de testes automatizado com o Cypress. Para visualizar a pipeline basta clicar no link [Github Actions](https://github.com/jfilhoGN/teste-warren/actions) e clicar na descrição que possui um check em verde na frente, após clicar na descrição, clique na palavra `1 job completed` que você verá em detalhes como que foi executado a pipeline.
