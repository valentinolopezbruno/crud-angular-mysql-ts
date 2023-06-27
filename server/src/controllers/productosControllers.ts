import {Request, Response} from "express";

class ProductosController {
    public index (req:Request,res:Response){
        res.send("Hello")
    }
}


export const productosController = new ProductosController();