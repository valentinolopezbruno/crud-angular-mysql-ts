import { Router } from "express";
import { indexController } from "../controllers/indexControllers";

class Index {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', indexController.index);
        this.router.get('/:id', indexController.getProducto);
        this.router.post('/', indexController.agregarProducto);
        this.router.delete('/:id', indexController.eliminarProducto);
        this.router.put('/:id', indexController.actualizarProducto);
    }
}

const IndexRoutes = new Index();
export default IndexRoutes.router;