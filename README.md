<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=60px src="https://i.imgur.com/gdRBzDd.png" alt="Project logo"></a>
</p>

<h3 align="center">Foodfy</h3>

---

<p align="center"> As melhores receitas
    <br> 
    criadas por profissionais do mundo todo.
</p>

## 🧐 Sobre

Este projeto faz parte do desafio final do bootcamp online LaunchBase realizado pela Rocketseat, o Foodfy é um site de receitas criadas por profissionais.

## 🏁 Começando

### Pré-requisitos

É necessário ter instalado em seu computador: NodeJS, Npm, Git e PostgreSQL.

### Instalando

Clone o projeto e baixe as dependências:

```
# Clonar o repositório
git clone https://github.com/miqueiasousa/foodfy.git

# Instalar as dependências
npm install
```

Em seguida, vá até o arquivo de configuração do banco de dados, dentro da pasta src/config, e atualize as credenciais de usuário com seu login, agora rode os seguintes comandos:

```
# Criar database
npx sequelize db:create

# Rodar as migrations
npx sequelize db:migrate

# Rodar as seeds
npx sequelize db:seed:all
```

## 🎈 Uso

Execute o projeto:

```
npm start
```

Agora, acesse http://localhost:3333

Para ter acesso a administração do site, vá até http://localhost:3333/admin/users/login e utilize o seguinte usuário:

```
email: admin@foodfy.com
senha: Qwe123
```

## ⛏️ Construído usando

- [PostgreSQL](https://www.postgresql.org/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) - Templating Engine
- [NodeJs](https://nodejs.org/en/) - Server Environment

## 📝 Licença

Este projeto está licenciado sobe Licença MIT - olhe o arquivo LICENSE.md para mais detalhes
