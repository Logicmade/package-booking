//import env from './src/env';


export = {
  type: "mysql",
  port: 3306,
  host: process.env.DB_HOST, // "localhost",
  username: process.env.DB_USERNAME, //"logicuser",
  password: process.env.DB_PASSWORD, //"L0g1cUs3r",
  database: process.env.DB_DATABASE, //"logic-booking",
  synchronize: true,
  logging: false,
  migrationsRun: true,
  entities: [
    "src/entity/**/*.ts"
  ],
  migrations: [
    "src/migration/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts"
  ],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber"
  }
}