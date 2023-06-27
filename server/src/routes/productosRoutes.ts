import { Router } from "express";
import { productosController } from "../controllers/productosControllers";

class Productos {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/productos', productosController.index);
    }
}

const ProductosRoutes = new Productos();
export default ProductosRoutes.router;