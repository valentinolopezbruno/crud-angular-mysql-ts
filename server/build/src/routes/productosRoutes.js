"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosControllers_1 = require("../controllers/productosControllers");
class Productos {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/productos', productosControllers_1.productosController.index);
    }
}
const ProductosRoutes = new Productos();
exports.default = ProductosRoutes.router;
