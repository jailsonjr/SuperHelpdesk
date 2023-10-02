import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
        host : process.env.DB_HOST,
        port : parseInt(process.env.DB_PORT as string),
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : "superdesk_dev"
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
    client: "postgresql",
    connection: {
        host : process.env.DB_HOST,
        port : parseInt(process.env.DB_PORT as string),
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
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

export default config;