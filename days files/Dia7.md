# Dia 7 📑 - SQL

Neste dia nos foi proposta a realização de exercício prático de SQL com o arquivo "database_challenge.sql".

### Com base na tabela de Usuários, você deve:

1. Realizar uma consulta que conte o número de registros na tabela.

```
SELECT COUNT(*) AS total_registros

FROM usuarios;
```

| total_registros |
| --------------- |
| 16              |

#

2. Realizar uma consulta para encontrar o usuário com o id 10.

```
SELECT *
FROM usuarios
WHERE id = 10;
```

| id  | nome             | email                                  |
| --- | ---------------- | -------------------------------------- |
| 10  | Lucca Ryan Jesus | lucca_ryan_jesus@imoveisvillani.com.br |

#

3. Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".

```
SELECT *
FROM usuarios
WHERE nome = 'Bruce Wayne';
```

| id  | nome        | email                 |
| --- | ----------- | --------------------- |
| 13  | Bruce Wayne | brucewayne@gothan.com |

#

4. Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".

```
SELECT *
FROM usuarios
WHERE email = 'ghost_silva@fantasma.com';
```

| id  | nome        | email                    |
| --- | ----------- | ------------------------ |
| 4   | Ghost Silva | ghost_silva@fantasma.com |

#

5. Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".

```
DELETE FROM usuarios
WHERE email = 'peterparker@marvel.com';
```

### Agora com base na tabela de Produtos, você deve:

1. Realizar uma consulta que apresente produtos com descrição vazia;

```
SELECT *
FROM produtos
WHERE descricao = '';
```

| id  | nome                | categoria   | preco | descricao |
| --- | ------------------- | ----------- | ----- | --------- |
| 5   | caneca chopp        | utilitários | 25.5  | NULL      |
| 6   | copo grande térmico | utiliários  | 35.9  | NULL      |

#

2. Realizar uma consulta que apresente produtos com a categoria "games";

```
SELECT *
FROM produtos
WHERE categoria = 'games';
```

| id  | nome             | categoria | preco | descricao                   |
| --- | ---------------- | --------- | ----- | --------------------------- |
| 7   | mouse gamer      | games     | 101   | Mouse com leds.             |
| 8   | teclado gamer    | games     | 99    | Mouse com leds.             |
| 9   | monitor gamer    | games     | 1500  | Monitor grande para jogar.  |
| 10  | jogo batman      | games     | 150   | Jogo do Batman para PC.     |
| 11  | jogo tomb raider | games     | 100   | Jogo Tomb Raider para PC.   |
| 12  | jogo spider-man  | games     | 200   | Jogo Spider man para PS4.   |
| 13  | jogo pac-man     | games     | 180   | Jogo Pac-man para Xbox One. |

#

3. Realizar uma consulta que apresente produtos com preço "0";

```
SELECT *
FROM produtos
WHERE preco = 0;
```

| id  | nome    | categoria   | preco | descricao                               |
| --- | ------- | ----------- | ----- | --------------------------------------- |
| 3   | adesivo | utilitários | 0     | Adesivo com precificação para produtos. |
| 4   | caneca  | utilitários | 0     | Caneca para café.                       |

#

4. Realizar uma consulta que apresente produtos com o preço maior que "100.00";

```
SELECT *
FROM produtos
WHERE preco > 100.00;
```

| id  | nome                   | categoria | preco | descricao                          |
| --- | ---------------------- | --------- | ----- | ---------------------------------- |
| 7   | mouse gamer            | games     | 101   | Mouse com leds.                    |
| 9   | monitor gamer          | games     | 1500  | Monitor grande para jogar.         |
| 10  | jogo batman            | games     | 150   | Jogo do Batman para PC.            |
| 11  | jogo tomb raider       | games     | 100   | Jogo Tomb Raider para PC.          |
| 12  | jogo spider-man        | games     | 200   | Jogo Spider man para PS4.          |
| 13  | jogo pac-man           | games     | 180   | Jogo Pac-man para Xbox One.        |
| 14  | guarda-roupas lady bug | casa      | 2500  | Guarda-roupas gigante da Lady Bug. |
| 15  | cama solteiro          | casa      | 1800  | Cama box solteiro.                 |

#

5. Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";

```
SELECT *
FROM produtos
WHERE preco BETWEEN 1000.00 AND 2000.00;
```

| id  | nome          | categoria | preco | descricao                  |
| --- | ------------- | --------- | ----- | -------------------------- |
| 9   | monitor gamer | games     | 1500  | Monitor grande para jogar. |
| 15  | cama solteiro | casa      | 1800  | Cama box solteiro.         |

#

6. Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo";

```
SELECT *
FROM produtos
WHERE nome LIKE '%jogo%';
```

| id  | nome             | categoria | preco | descricao                   |
| --- | ---------------- | --------- | ----- | --------------------------- |
| 10  | jogo batman      | games     | 150   | Jogo do Batman para PC.     |
| 11  | jogo tomb raider | games     | 100   | Jogo Tomb Raider para PC.   |
| 12  | jogo spider-man  | games     | 200   | Jogo Spider man para PS4.   |
| 13  | jogo pac-man     | games     | 180   | Jogo Pac-man para Xbox One. |
