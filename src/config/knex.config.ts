import type { Knex } from "knex";
import * as dotenv from "dotenv";

dotenv.config({
  path: '../../.env'
})

console.log(process.env)

const configKnex: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
        host : process.env.DB_HOST,
        port : parseInt(process.env.DB_PORT as string),
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : "superdesk_dev",
        ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "../data/migrations",
      tableName: "db_versions"
    }
  },

  production: {
    client: "pg",
    connection: {
        host : process.env.DB_HOST,
        port : parseInt(process.env.DB_PORT as string),
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME,
        ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "../data/migrations",
      tableName: "db_versions"
    }
  }

}

export default configKnex;