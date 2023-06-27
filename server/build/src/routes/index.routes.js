"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class Index {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', indexControllers_1.indexController.index);
        this.router.get('/:id', indexControllers_1.indexController.getProducto);
        this.router.post('/', indexControllers_1.indexController.agregarProducto);
        this.router.delete('/:id', indexControllers_1.indexController.eliminarProducto);
        this.router.put('/:id', indexControllers_1.indexController.actualizarProducto);
    }
}
const IndexRoutes = new Index();
exports.default = IndexRoutes.router;
