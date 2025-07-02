# Projeto de testes da API ServeRest

<p align="center">
 <img alt="Logo do ServeRest" src="https://user-images.githubusercontent.com/29241659/115161869-6a017e80-a076-11eb-9bbe-c391eff410db.png" height="120">
</p>

[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

#### Sobre o projeto

Esta API foi desenvolvida e utilizada para simplificar o aprendizado e prática de gerenciamento de um e-commerce. Permitindo um controle rápido, eficaz através de uma interface RESTful e para treinamento de testes manuais e automatizados.

#### Funcionalidades e endpoints

**LOGIN** - Autentique o seu usuário para montar um carrinho e, se for administrador, gerenciar os produtos

- POST /login - Realizar Login

**Usuários** - Gerencie os usuários, consulte dados para login e cadastre administrador

- GET /usuarios - Listar e cadastrar usuários
- POST /usuarios - Cadastrar usuário
- GET /usuarios/{\_id} - Buscar usuário por ID
- DELETE /usuarios/{\_id} - Excluir usuário
- PUT /usuarios/{\_id} - Editar usuário

**Produtos** - Consulte produtos cadastrados ou, como administrador, gerencie os produtos da loja

- GET /produtos - Listar produtos cadastrados
- POST /produtos - Cadastrar produto
- GET /produtos/{\_id} - Buscar produtos por ID
- DELETE /produtos/{\_id} - Excluir produto
- PUT /produtos/{\_id} - Editar produto

**Carrinho** - Consulte os carrinhos cadastrados, faça um para o seu usuário e, no final, desista da compra pois estava só dando uma olhadinha

- GET /carrinhos - Listar carrinhos cadastrados
- POST /carrinhos - Cadastrar carrinhos
- GET /carrinhos/{\_id} - Buscar carrinho por ID
- DELETE /carrinhos/concluir-compra - Ao concluir a compra, o carrinho é excluído
- DELETE /carrinhos/cancelar-compra - Excluir carrinho e retornar produtos para estoque

#

#### Tecnologias utilizadas

- **JavaScript**
- **K6**
- **RESTful API ServeRest**
- **Node.js**
#

### Configuração da Serverest Local 💻

**Localmente com NPM**

Execute o seguinte comando no terminal com o node.js instalado:

` npx serverest@latest`

Para visualizar as configurações que são possíveis de serem feitas execute o comando:

`npx serverest -h`

<p align="center">
 <a href="https://npmjs.com/package/serverest"><img alt="serverest version" src="https://img.shields.io/npm/v/serverest?style=for-the-badge"></a>
</p>

## Como testar os testes de performance com k6 🤖 🤖 🤖 🤖

- Configure a API de forma local explicado nas configurações
- Instalar o K6, instale o chocolatey e depois no terminal digite o comando dentro da pasta k6 serverest performace/serverest api:

```
choco install k6
```

- Para testar siga o path: k6 serverest performace/projeto-base-k6/tests, dentro do repositório, abra o prompt de comando e digite o comando:

```
k6 run fluxo-compra.js [test file name]
```

para testar o fluxo completo do e-commerce

- Ou **postLogin.js** para testar a rota login, **postUsuarios.js** para testar a rota para cadastro dos usuários, **postProdutos.js** para testar a rota para cadastro de carrinho e **deleteCarrinho.js** para concluir a compra e deletar o carrinho.

### Para alteração das métricas de testes

- O arquivo projeto-base-k6/**k6-config.js** tem todas as métricas para a realização dos testes, para descomentar uma seção do código, utilize do atalho CTRL+K + CTRL U e para comentar outro CTRL+K + CTRL+C para tornar a realização dos testes um pouco mais conveniente.

- Como padrão no arquivo path: k6 serverest performace/projeto-base-k6/**k6-config.js** tem como métricas pré-definidas o teste smoke, para testar os diferentes tipos de testes, apenas descomente o as linhas de teste que irá testar em específico como, /SMOKE TEST, /LOAD TEST, /STRESS TEST, /SPIKE TEST, /SOAK TEST

#

<img src="/assets/xmindServeRest.png">

#

#### Ferramenta para controle e Plano de Testes com Casos de Testes 🔎

- Todos os casos e planejamento de testes estão disponibilizados pelo **Jira Atlassian** com a ferramenta **QAlity** para a organização dos casos de teste.

#### Como foi executado a organização do projeto? 📂✔

- Foi dividido em 4 epics para realizar a visão macro dos endpoints da API, utilizando a ferramenta Jira para realização do plano de teste e casos de testes.
  <br/>
  /usuários

  /login

  /produtos

  /carrinho

Seus testes foram realizados com base nos critérios de aceitação das histórias de usuários.

#

#### A API permite o estudo de: 📑

- Verbos GET, POST, PUT e DELETE com persistência de dados
- Teste de carga
- Autenticação no header
- Query string
- Teste de schema json

#

### Casos para automação de testes no postman 🤖

Foram selecionados os fluxos principais da aplicação, que não podem parar para serem selecionados a automação:

- Verificação para todos os status CODE
- Verificar a validade Bearer Token de 10 minutos
- Verificar se senha tenha entre 5 e 10 caracteres
- Verificar se o email já foi cadastrado
- Verificar se o login está funcionando corretamente

#

#### - Exercícios JavaScript 🟨🦏

Exercícios propostos para fixação de conhecimento sobre a linguagem de programação JavaScript.

#### - Projeto Calculadora.js 🔢

Projeto proposto de uma calculadora durante a sprint 4 com a finalidade de realização da instalação e funcionamento dos códigos com métodos robustos na classe calculadora.js e arquivos de teste com testes eficientes.

**Para instalar:**

Instale o NodeJS - <a href="https://nodejs.org/en/download/" target="_blank">NodeJS</a>

Instale a ferramenta <a href="https://mochajs.org/" target="_blank">Mocha</a> para disponibilizar a estrutura para os testes.

Instale o <a href="https://www.chaijs.com/​​​​​​​" target="_blank">Chai</a> para disponibilizar os métodos para validarmos as informações em nossos testes.

**Configurando:**
inicializando o **node.js** em uma pasta

```
npm init -y
```

No package.json já dentro da **IDE** escolhida adicionar as estruturas do **ecmascript 6**

```
¨type¨: module
```

Agora instale as bibliotecas **Mocha** e **Chai** no terminal

```
npm i -D mocha chai
```

#### Contribuídores 📌

- Gabriel Oliveira - Trilha Perfomance 2024