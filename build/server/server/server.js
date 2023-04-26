"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Environments_1 = __importDefault(require("../shared/Environments"));
const http_1 = __importDefault(require("http"));
const static_path_1 = __importDefault(require("./tools/static-path"));
const cors = require('cors');
require('dotenv').config();
const db_connect_1 = require("./tools/db-connect");
const Controller_1 = __importDefault(require("./controllers/Controller"));
const ENV = process.env.NODE_ENV || Environments_1.default.DEVELOPMENT;
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(static_path_1.default));
app.use("/api/posts", Controller_1.default);
const serverPort = process.env.PORT || 8000;
const server = http_1.default.createServer(app);
db_connect_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Datasource initialized!");
}))
    .catch((error) => console.log("Error: ", error));
// app.get("/api", (res) => {
//     res.json({ message: "Hello from server!" })
// });
// Starts the server listening for http requests
server.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort} in mode ${ENV}`);
});
//# sourceMappingURL=server.js.map