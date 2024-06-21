# Dia 8 - NoSQL 🗂

MongoDB day

### com base nos usuários listados, você deve:

1. Realizar uma consulta que conte o número de registros existentes.

```
db.usuarios.countDocuments();
```

Result:

```
[16];
```

#

2. Realizar uma consulta para alterar o usuário com o nome "Teste Start" para "Teste Finish".

```
db.usuario.updateOne(
  { nome: "Teste Start" },
  { $set: { nome: "Teste Finish" } }
);
```

Result:

```
[
  {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  },
];
```

#

3. Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".

```
db.collection.find({ nome: "Bruce Wayne" })
```

Result:

```
[
  {
    _id: "667477465e823a037deb4879",
    nome: "Bruce Wayne",
    email: "brucewayne@gothan.com",
  },
];
```

#

4. Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".

```
db.collection.findOne({ email: "ghost_silva@fantasma.com" })
```

Result:

```
[
  {
    _id: "66747a145e823a037deb4928",
    nome: "Ghost Silva",
    email: "ghost_silva@fantasma.com",
  },
];
```

#

5. Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".

```
db.collection.deleteOne({ email: 'peterparker@marvel.com' })
```

Result:

```
[
  {
    acknowledged: true,
    deletedCount: 1,
  },
];
```

### Agora, com base nos produtos listados, você deve:

1. Realizar uma consulta que apresente produtos com descrição vazia;

```
db.collection.find({ descricao: '' })
```

Result:

```
[
  {
    _id: "66748498222a7dae662fc0dd",
    nome: "caneca chopp",
    categoria: "utilitários",
    preco: 25.5,
    descricao: "",
  },
  {
    _id: "66748498222a7dae662fc0de",
    nome: "copo grande térmico",
    categoria: "utilitários",
    preco: 35.9,
    descricao: "",
  },
];
```

#

2. Realizar uma consulta que apresente produtos com a categoria "games";

```
db.collection.find({ categoria: 'games' })
```

Result:

```
[
  {
    _id: "66747c585e823a037deb4a8c",
    nome: "mouse gamer",
    categoria: "games",
    preco: 101,
    descricao: "Mouse com leds.",
  },
  {
    _id: "66747c585e823a037deb4a8d",
    nome: "teclado gamer",
    categoria: "games",
    preco: 99,
    descricao: "Teclado com leds.",
  },
  {
    _id: "66747c585e823a037deb4a8e",
    nome: "monitor gamer",
    categoria: "games",
    preco: 1500,
    descricao: "Monitor grande para jogar.",
  },
  {
    _id: "66747c585e823a037deb4a8f",
    nome: "jogo batman",
    categoria: "games",
    preco: 150,
    descricao: "Jogo do Batman para PC.",
  },
  {
    _id: "66747c585e823a037deb4a90",
    nome: "jogo tomb raider",
    categoria: "games",
    preco: 100,
    descricao: "Jogo Tomb Raider para PC.",
  },
  {
    _id: "66747c585e823a037deb4a91",
    nome: "jogo spider-man",
    categoria: "games",
    preco: 200,
    descricao: "Jogo Spider-man para PS4.",
  },
  {
    _id: "66747c585e823a037deb4a92",
    nome: "jogo pac-man",
    categoria: "games",
    preco: 180,
    descricao: "Jogo Pac-man para Xbox One.",
  },
];
```

#

3. Realizar uma consulta que apresente produtos com preço "0".

```
db.collection.find({ preco: 0 })
```

Result:

```
[
  {
    _id: "667484f6222a7dae662fc10a",
    nome: "adesivo",
    categoria: "utilitários",
    preco: 0,
    descricao:
      "desivo com precificação para produtos.",
  },
  {
    _id: "667484f6222a7dae662fc10b",
    nome: "caneca",
    categoria: "utilitários",
    preco: 0,
    descricao: "Caneca para café.",
  },
];
```

#

4. Realizar uma consulta que apresente produtos com o preço maior que "100.00";

```
db.collection.find({ preco: { $gt: 100.00 } })
```

Result:

```
[
  {
    _id: "6674857f5e823a037deb4e6e",
    nome: "mouse gamer",
    categoria: "games",
    preco: 101,
    descricao: "Mouse com leds.",
  },
  {
    _id: "6674857f5e823a037deb4e70",
    nome: "monitor gamer",
    categoria: "games",
    preco: 1500,
    descricao:
      "Monitor grande para jogar.",
  },
  {
    _id: "6674857f5e823a037deb4e71",
    nome: "jogo batman",
    categoria: "games",
    preco: 150,
    descricao:
      "Jogo do Batman para PC.",
  },
  {
    _id: "6674857f5e823a037deb4e73",
    nome: "jogo spider-man",
    categoria: "games",
    preco: 200,
    descricao:
      "Jogo Spider-man para PS4.",
  },
  {
    _id: "6674857f5e823a037deb4e74",
    nome: "jogo pac-man",
    categoria: "games",
    preco: 180,
    descricao:
      "Jogo Pac-man para Xbox One.",
  },
  {
    _id: "6674857f5e823a037deb4e75",
    nome: "guarda-roupas lady bug",
    categoria: "casa",
    preco: 2500,
    descricao:
      "Guarda-roupas gigante da Lady Bug.",
  },
  {
    _id: "6674857f5e823a037deb4e76",
    nome: "cama solteiro",
    categoria: "casa",
    preco: 1800,
    descricao: "Cama box solteiro.",
  },
];
```

#

5. Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";

```
db.collection.find({ preco: { $gte: 1000.00, $lte: 2000.00 } })
```

Result:

```
[
  {
    _id: "667486ac222a7dae662fc1a2",
    nome: "monitor gamer",
    categoria: "games",
    preco: 1500,
    descricao:
      "Monitor grande para jogar.",
  },
  {
    _id: "667486ac222a7dae662fc1a8",
    nome: "cama solteiro",
    categoria: "casa",
    preco: 1800,
    descricao: "Cama box solteiro.",
  },
];
```

#

6. Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".

```
db.collection.find({ nome: { $regex: /jogo/i } })
```

Result:

```
[
  {
    _id: "66748dbf5e823a037deb51bb",
    nome: "jogo batman",
    categoria: "games",
    preco: 150,
    descricao: "Jogo do Batman para PC.",
  },
  {
    _id: "66748dbf5e823a037deb51bc",
    nome: "jogo tomb raider",
    categoria: "games",
    preco: 100,
    descricao: "Jogo Tomb Raider para PC.",
  },
  {
    _id: "66748dbf5e823a037deb51bd",
    nome: "jogo spider-man",
    categoria: "games",
    preco: 200,
    descricao: "Jogo Spider-man para PS4.",
  },
  {
    _id: "66748dbf5e823a037deb51be",
    nome: "jogo pac-man",
    categoria: "games",
    preco: 180,
    descricao: "Jogo Pac-man para Xbox One.",
  },
];
```
