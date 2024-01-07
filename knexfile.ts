import { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config()

/* configurações do database */
const { /* Carrega variáveis de ambiente */
    DB_CLIENT: client,
    DB_HOST: host,
    DB_USER: user,
    DB_PWD: password,
    DB_DATABASE: database
} = process.env

const knexConfig: Knex.Config = { /* Configura o Knex */
    client,
    connection: {
        host,
        user,
        password,
        database
    },
    migrations: {
        tableName: "migrations"
    }
};

export default knexConfig;