const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : 'micado_test'
    },  
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection: {
      filename: ':memory:'
    },
    migrations: {
      directory: path.join(__dirname, 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'seeds')
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}