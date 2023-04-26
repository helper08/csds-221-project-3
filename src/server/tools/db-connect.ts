import { DataSource } from "typeorm";
import { Post } from "../models/post"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [Post],
    subscribers: [],
    migrations: [],
    ssl: true,
    extra: {
        "ssl": {
            "rejectUnauthorized": false
    }
  }
})

