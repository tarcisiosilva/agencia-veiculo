# GraphQL API - Vehicle Agency

## Descrição

Esta API GraphQL foi projetada para uma agência de veículos, permitindo a consulta, adição, atualização e exclusão de informações sobre veículos.

## Funcionalidades

- **Consultar todos os veículos**
- **Consultar veículo por ID**
- **Adicionar novo veículo**
- **Atualizar informações de um veículo**
- **Excluir veículo por ID**

---

## Estrutura do Projeto

```
project-root/
├── src/
│   ├── data/
│   │   └── vehicles.js
│   ├── resolvers/
│   │   └── vehicleResolvers.js
│   ├── schemas/
│   │   └── vehicleSchema.js
│   └── index.js
├── package.json
└── README.md
```

### Arquivos principais

- ``: Define o esquema GraphQL.
- ``: Contém dados mock de veículos.
- ``: Implementa os resolvers GraphQL.
- ``: Configura e inicia o servidor Apollo.

---

## Instalação

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
node src/index.js
```

O servidor estará disponível em `http://localhost:4000/`.

---

## Exemplos de Consultas e Mutações

### Consultas

#### Listar todos os veículos

```graphql
query {
  vehicles {
    id
    make
    model
    year
    price
  }
}
```

#### Buscar veículo por ID

```graphql
query {
  vehicle(id: "1") {
    id
    make
    model
    year
    price
  }
}
```

---

### Mutações

#### Adicionar novo veículo

```graphql
mutation {
  addVehicle(make: "Chevrolet", model: "Cruze", year: 2022, price: 25000) {
    id
    make
    model
    year
    price
  }
}
```

#### Atualizar veículo existente

```graphql
mutation {
  updateVehicle(id: "1", make: "Toyota", model: "Camry", year: 2021, price: 23000) {
    id
    make
    model
    year
    price
  }
}
```

#### Deletar veículo por ID

```graphql
mutation {
  deleteVehicle(id: "3")
}
```

---

## Dependências

- **apollo-server**: Framework para configurar o servidor GraphQL.
- **graphql**: Linguagem de consulta para APIs.

---

## Notas

- O projeto utiliza dados mock para simplificar testes iniciais. Em produção, os dados devem ser integrados a um banco de dados.
- O servidor é iniciado na porta padrão `4000`.

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

## Licença

Este projeto está sob a licença MIT.


