# Projeto de testes da API ServeRest

<p align="center">
 <img alt="Logo do ServeRest" src="https://user-images.githubusercontent.com/29241659/115161869-6a017e80-a076-11eb-9bbe-c391eff410db.png" height="120">
</p>

[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

#### Sobre o projeto

Esta API foi desenvolvida e utilizada para simplificar o aprendizado e prática de gerenciamento de um e-commerce. Permitindo um controle rápido, eficaz através de uma interface RESTful e para treinamento de testes manuais e automatizados.

#### Funcionalidades

- Realizar Login
- Listar e cadastrar usuários
- Buscar usuário por ID
- Excluir e editar usuário
- Cadastrar, editar e excluir produtos
- Listar produtos cadastrados
- Buscar produtos por ID
- Cadastrar carrinho
- Listar carrinhos cadastrados
- Buscar carrinho por ID
- Excluir carrinho e retornar produtos para estoque

#### Tecnologias utilizadas

- **Postman**
- **Jira Atlassian**
- **RESTful API ServeRest**
- **Node.js**

#### Como testar? 📑

- Acessar a API <a href="https://compassuol.serverest.dev/" target="_blank">Serverest</a>
- Instalar o <a href="https://www.postman.com/" target="_blank">Postman</a>

##### ACESSE O **MAPA MENTAL** PRODUZIDO PARA ANÁLISE DA API <a href=" " target="_blank"> CLIQUE AQUI</a>!

<img src="/assets/ServeRest.png">

#

O ServeRest permite o estudo de:

    Verbos GET, POST, PUT e DELETE com persistência de dados
    Teste de carga
    Autenticação no header
    Query string
    Teste de schema json

#### Configuração 💻

**Online**

Acesse https://serverest.dev para visualizar a documentação e as rotas disponíveis.

    Essa é a melhor opção para quem não possui NPM e Docker na máquina ou não quer preocupar em gerenciar ambiente.

**Localmente com NPM**

Execute o seguinte comando no terminal com o node.js instalado:

` npx serverest@latest`

Para visualizar as configurações que são possíveis de serem feitas execute o comando:

`npx serverest -h`

<p align="center">
 <a href="https://npmjs.com/package/serverest"><img alt="serverest version" src="https://img.shields.io/npm/v/serverest?style=for-the-badge"></a>
</p>

#

#### Ferramenta para controle 🔎

- Todos os casos e planejamento de testes estão disponibilizados pelo **Jira Atlassian** com a ferramenta **QAlity** para a organização dos casos de teste.

#### Casos para automação de testes 🤖

Foram selecionados os fluxos principais da aplicação, que não podem parar para serem selecionados a automação:

- Para todos os status CODE
- Validade Bearer Token

#### Como foi executado o projeto? 📂✔

- Foi dividido em 3 Epics para realizar a visão macro dos endpoints da API
  /usuários
  /login
  /produtos
  /carrinho

Seus testes foram realizados com base aos critérios de aceitação das histórias de usuários.

#

#### Diretório do GitLab 🦊

- Foi organizado em pastas com todo o conteúdo das sprints durante o programa de capacitação, na WIKI também é possível encontrar os arquivos da primeira sprint, templates e principais documentos do projeto.

#### Projeto Calculadora.js 🔢

**Para instalar:**
​​​​​​​
Versionamento pelo <a href="https://git-scm.com/" target="_blank">GIT</a>
instale uma IDE - <a href="https://code.visualstudio.com/download" target="_blank">VSCode</a>
instale o NodeJS - <a href="https://nodejs.org/en/download/" target="_blank">NodeJS</a>
instale a ferramenta <a href="https://mochajs.org/" target="_blank">Mocha</a> para disponibilizar a estrutura para os testes.
instale o <a href="https://www.chaijs.com/​​​​​​​" target="_blank">Chai</a> para isponibilizar os métodos para validarmos as informações em nossos testes.

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

#### Contribuídor 📌

- Gabriel Oliveira - Trilha Perfomance 2024

#

<p align="center">
 <img alt="Logo da Compass Uol" src="https://user-images.githubusercontent.com/29241659/195455525-6d97e444-630e-45c6-92b9-50ea44f06590.png#gh-light-mode-only" height="80">
 <img alt="Logo da Compass Uol" src="https://user-images.githubusercontent.com/29241659/195455635-abb91250-8288-4d3a-a180-a9d37bffcba2.png#gh-dark-mode-only" height="80">
 </p>
