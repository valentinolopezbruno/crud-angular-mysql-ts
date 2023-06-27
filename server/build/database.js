"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = require("promise-mysql");
const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cursoangularproductos'
};
const connection = (0, promise_mysql_1.createConnection)(connectionConfig);
exports.default = connection;
