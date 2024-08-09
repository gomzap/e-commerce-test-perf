# Plano de teste para a Interface da API Serverest

#### Resumo

Este documento apresenta o planejamento das atividades de testes do sistema e descreve o plano de ação para implementar e testar o CRUD das rotas de login, usuários, produtos e carrinhos no MarketPlace do ServeRest, deseja-se verificar se a usabilidade da interface da API, se cumpre todos os requisitos funcionais, garantir a qualidade geral do uso da API e identificar possíveis defeitos, para isso será utilizada a ferramenta Postman para executar e avaliar os testes.

#### Envolvidos

Gabriel Oliveira
CompassUOL PerfMerch 3

#### Funcionalidade ou Módulos a serem testados

Teste da funcionalidade da interface da API Serverest com base na documentação Swagger seguindo as rotas e seus endpoints disponíveis para verificar sua integridade e funcionalidades.

- rota de login para a autenticação do usuário, consultar dados para login e cadastrar administrador.
- rota de usuário para cadastrar, editar, listar e excluir usuários.
- rota de produtos para poder cadastrar, editar, atualizar e excluir produtos.
- rota de carrinhos para poder cadastrar, listar e deletar/finalizar a compra.

#### Local dos testes

Será desenvolvido no computador próprio do testador, utilizando o software Postman com o URL base da API

#### Recursos necessários

É necessário internet com conexão estável e máquina pessoal com o software Postman e acesso a APIrest ServeRest.

#### Critérios usados

Serão realizados todos os testes funcionais com base aos critérios de aceitação da user stories e serão avaliados como “passou” e “falhou” com base no resultado esperado e o resultado obtido, os cenários de testes levantados são de mais importância e valor para a aplicação.

#### Riscos

Os testes deverão ser executados o quanto antes para evitar imprevistos, como ficar sem fornecimento de energia elétrica perto da deadline. Caso a conexão com a internet WiFi seja interrompida, deve-se ativar os dados móveis do celular para a execução da tarefa.

#### Como os resultados do teste serão divulgados

Os resultados finais serão fornecidos após o término dos ciclos, será apresentado um relatório dos resultados de testes e os problemas (bugs) encontrados serão reportados pelo Jira.

#### Cronogramas

**Rota Usuários**
Realização do planejamento de teste: 02/07/24 – 09/07/24

Tabulação de dados: 09/07/24 -10/07/24

Entrega dos resultados: 11/07/2024

**Rotas Login e Produtos**
Realização do planejamento de teste: 15/07/2024-24/07/2024

Tabulação de dados: 16/07/2024-24/07/2024

Entrega dos resultados: 25/07/2024

**Rota Carrinho**
Realização do planejamento de teste: 05/08/24

Tabulação de dados: 06/08/24

Entrega dos resultados: 08/08/24

#### Testes candidatos a automação

Foram selecionados os fluxos principais da aplicação, que não podem parar para serem selecionados a automação.

- Verificação para todos os status CODE
- Verificar a validade Bearer Token de 10 minutos
- Verificar se senha tenha entre 5 e 10 caracteres
- Verificar se o email já foi cadastrado
- Verificar se o login está funcionando corretamente

#### Matriz de Rastreabilidade

A matriz de rastreabilidade foi executada e demonstrada através do Jira Atlassian com auxílio da ferramenta QAlity.

### User Story: Consulta de Detalhes da API ServeRest

### US 001: [API] Usuários

Sendo um vendedor de uma loja
Gostaria de poder me cadastrar no Marketplace do ServeRest
Para poder realizar as vendas dos meus produtos.

#### DoR (Definição de pronto)

    Banco de dados e infraestrutura para desenvolvimento disponibilizados;
    Ambiente de testes disponibilizado.

#### DoD (Definição de Feito)

    CRUD de cadastro de vendedores (usuários) implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
    Análise de testes cobrindo todos verbos;
    Matriz de rastreabilidade atualizada;
    Automação de testes baseado na análise realizada;

#### Acceptance Criteria

    Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR;
    Não deverá ser possível fazer ações e chamadas para usuários inexistentes;
    Não deve ser possível criar um usuário com e-mail já utilizado;
    Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;
    Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;
    Os testes executados deverão conter evidências;
    Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;
    Os e-mails devem seguir um padrão válido de e-mail para o cadastro;
    As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres;
    A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

### US 002: [API] Login

Sendo um vendedor de uma loja com cadastro já realizado
Gostaria de poder me autenticar no Marketplace da ServeRest
Para poder cadastrar, editar, atualizar e excluir meus produtos

#### DoR

    Banco de dados e infraestrutura para desenvolvimento disponibilizados;
    API de cadastro de usuários implementada;
    Ambiente de testes disponibilizado.

#### DoD

    Autenticação com geração de token Bearer implementada;
    Análise de testes cobrindo a rota de login;
    Matriz de rastreabilidade atualizada;
    Automação de testes baseado na análise realizada;

#### Acceptance Criteria

    Usuários não cadastrados não deverão conseguir autenticar;
    Usuários com senha inválida não deverão conseguir autenticar;
    No caso de não autenticação, deverá ser retornado um status code 401 (Unauthorized);
    Usuários existentes e com a senha correta deverão ser autenticados;
    A autenticação deverá gerar um token Bearer;
    A duração da validade do token deverá ser de 10 minutos;
    Os testes executados deverão conter evidências;
    A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

### US 003: [API] Produtos

Sendo um vendedor de uma loja com cadastro já realizado
Gostaria de poder me autenticar e cadastrar produtos no Marketplace do ServeRest
Para poder cadastrar, editar, atualizar e excluir meus produtos

#### DoR

    Banco de dados e infraestrutura para desenvolvimento disponibilizados;
    API de cadastro de usuários implementada;
    API de autenticação implementada;
    Ambiente de testes disponibilizado.

#### DoD

    CRUD de cadastro de Produtos implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
    Análise de testes cobrindo a rota de produtos;
    Matriz de rastreabilidade atualizada;
    Automação de testes baseado na análise realizada;

#### Acceptance Criteria

    Usuários não autenticados não devem conseguir realizar ações na rota de Produtos;
    Não deve ser possível realizar o cadastro de produtos com nomes já utilizados;
    Não deve ser possível excluir produtos que estão dentro de carrinhos (dependência API Carrinhos);
    Caso não exista produto com o o ID informado na hora do UPDATE, um novo produto deverá ser criado;
    Produtos criados através do PUT não poderão ter nomes previamente cadastrados;
    Os testes executados deverão conter evidências;
    A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## User Story US 004: [API] Carrinho

US 004: [API] Carrinho
Sendo um usuário de uma loja já aunteticado
Gostaria de poder cadastrar, buscar e finalizar um carrinho de compras no Marketplace do ServeRest
Para poder consultar os carrinhos cadastrados e desistir da compra no final pois estava só dando uma olhadinha OU finalizar a compra

**DoR**

    Banco de dados e infraestrutura para desenvolvimento disponibilizados;
    API de cadastro de usuários implementada;
    API de autenticação implementada;
    Ambiente de testes disponibilizado.

**DoD**

    CRUD de cadastro de Produtos implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
    Análise de testes cobrindo a rota de carrinho;
    Matriz de rastreabilidade atualizada;
    Automação de testes baseado na análise realizada;

### Acceptance Criteria:

    Os carrinhos retornados para lista devem ser únicos por usuário
    Deve ser possível o usuário finalizar a compra com o carrinho cadastrado.
    Não deve ser possível retornar para estoque um carrinho já finalizado.
    O usuário não deve conseguir cadastrar um carrinho com a quantidade do produto em '0'.
    Usuário deve estar autenticado para cadastrar carrinho
    Um usuário não deve ser permitido a ter mais de um carrinho.
    Carrinho que retornar ao estoque deve consta uma mensagem "Estoque dos produtos reabastecido" quando finalizado.
    Usuário sem carrinho não devem conseguir finalizar a compra.
    Usuário com token ausente, inválido ou expirado não deve conseguir finalizar a compra.

    Os carrinhos retornados para lista devem ser únicos por usuário

### Endpoints necessários

**Login** - Autentique o seu usuário para montar um carrinho e, se for administrador, gerenciar os produtos

POST /login - Realizar Login

**Usuários** - Gerencie os usuários, consulte dados para login e cadastre administrador

GET /usuarios - Listar e cadastrar usuários
POST /usuarios - Cadastrar usuário
GET /usuarios/{\_id} - Buscar usuário por ID
DELETE /usuarios/{\_id} - Excluir usuário
PUT /usuarios/{\_id} - Editar usuário

**Produtos** - Consulte produtos cadastrados ou, como administrador, gerencie os produtos da loja

GET /produtos - Listar produtos cadastrados
POST /produtos - Cadastrar produto
GET /produtos/{\_id} - Buscar produtos por ID
DELETE /produtos/{\_id} - Excluir produto
PUT /produtos/{\_id} - Editar produto

**Carrinho** - Consulte os carrinhos cadastrados, faça um para o seu usuário e, no final, desista da compra pois estava só dando uma olhadinha

GET /carrinhos - Listar carrinhos cadastrados
POST /carrinhos - Cadastrar carrinhos
GET /carrinhos/{\_id} - Buscar carrinho por ID
DELETE /carrinhos/concluir-compra - Ao concluir a compra, o carrinho é excluído
DELETE /carrinhos/cancelar-compra - Excluir carrinho e retornar produtos para estoque
