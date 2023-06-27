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
exports.indexController = void 0;
const database_1 = __importDefault(require("../../database"));
class IndexController {
    index(req, res) {
        database_1.default.then((conn) => {
            return conn.query('SELECT * FROM productos');
        })
            .then((results) => {
            // Procesa los resultados
            console.log(results);
            res.send(results);
        })
            .catch((error) => {
            // Maneja los errores
            console.error(error);
        });
    }
    getProducto(req, res) {
        const { id } = req.params;
        database_1.default.then((conn) => {
            return conn.query('SELECT nombre, precio, imagen FROM productos WHERE id = ? LIMIT 1', id);
        })
            .then((results) => {
            // Procesa los resultados
            console.log(results[0].nombre);
            const producto = {
                nombre: results[0].nombre,
                precio: results[0].precio,
                imagen: results[0].imagen
            };
            res.send(producto);
        })
            .catch((error) => {
            // Maneja los errores
            console.error(error);
        });
    }
    agregarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var nombre = req.body.nombre;
            var precio = req.body.precio;
            var imagen = req.body.imagen;
            yield database_1.default.then((conn) => {
                return conn.query('INSERT INTO productos (nombre, precio, imagen) VALUES (?, ?, ?)', [nombre, precio, imagen]);
            })
                .then((results) => {
                // Procesa los resultados
                console.log(results);
                res.send("producto creado");
            })
                .catch((error) => {
                // Maneja los errores
                console.error(error);
            });
        });
    }
    eliminarProducto(req, res) {
        const { id } = req.params;
        database_1.default.then((conn) => {
            return conn.query('DELETE FROM productos WHERE id = ?', [id]);
        })
            .then((results) => {
            // Procesa los resultados
            console.log(results);
            res.send("producto eliminado");
        })
            .catch((error) => {
            // Maneja los errores
            console.error(error);
        });
    }
    actualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var nombre = req.body.nombre;
            var precio = req.body.precio;
            var imagen = req.body.imagen;
            const producto = {
                nombre: nombre,
                precio: precio,
                imagen: imagen
            };
            yield database_1.default.then((conn) => {
                return conn.query('UPDATE productos SET ? WHERE id = ?', [producto, id]);
            })
                .then((results) => {
                // Procesa los resultados
                console.log(results);
                res.send("producto eliminado");
            })
                .catch((error) => {
                // Maneja los errores
                console.error(error);
            });
        });
    }
}
exports.indexController = new IndexController();
