"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const post_1 = require("../models/post");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    entities: [post_1.Post],
    subscribers: [],
    migrations: [],
    ssl: true,
    extra: {
        "ssl": {
            "rejectUnauthorized": false
        }
    }
});
//# sourceMappingURL=db-connect.js.map