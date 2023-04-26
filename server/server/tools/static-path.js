"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const Environments_1 = __importDefault(require("../../shared/Environments"));
require('dotenv').config();
/*
    The static path is the path to the client files.
    The ternary operator is used to change the path... this is because the app runs in a different location
    when it has been built vs when running the typescript directly (which is the case for npm run dev)
*/
const STATIC_PATH = process.env.NODE_ENV === Environments_1.default.PRODUCTION ? path_1.default.join(__dirname, "../../../client") : path_1.default.join(__dirname, "../../../builds/client");
exports.default = STATIC_PATH;
//# sourceMappingURL=static-path.js.map