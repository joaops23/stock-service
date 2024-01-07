import Knex from "knex";
import knexConfig from "./../../knexfile";

/* Inicializa o Knex com as confiureações do knexfile.ts */
const knex = Knex(knexConfig);

export default knex;