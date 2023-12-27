require ("dotenv").config()
/* configurações do database */
const {
    DB_CLIENT: client,
    DB_HOST: host,
    DB_PORT: port,
    DB_USER: user,
    DB_PWD: password,
    DB_DATABASE: database
} = process.env

module.exports = {
        client,
    connection: {
        host,
        port,
        user,
        password,
        database
    },
    migrations: {
        tableName: "migrations"
    }
};