import Environments from "../shared/Environments"; 
import http from 'http';
import STATIC_PATH from "./tools/static-path";

const cors = require('cors');

require('dotenv').config()
import { AppDataSource } from "./tools/db-connect";
import { createPost } from "./business/post";
import Controller from "./controllers/Controller";

const ENV = process.env.NODE_ENV || Environments.DEVELOPMENT;

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(STATIC_PATH));
app.use("/api/posts", Controller);

const serverPort = process.env.PORT || 8000;
const server = http.createServer(app);

AppDataSource.initialize()
  .then(async () => {
    console.log("Datasource initialized!")
  })
  .catch((error) => console.log("Error: ", error))

// app.get("/api", (res) => {
//     res.json({ message: "Hello from server!" })
// });

// Starts the server listening for http requests
server.listen(serverPort, () => {
    console.log(`Server started on port ${serverPort} in mode ${ENV}`);
});

export {};