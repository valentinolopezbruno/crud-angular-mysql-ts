import {Request, Response} from "express";
import connection from "../../database";
import { Connection } from 'promise-mysql';


class IndexController {

    public index (req:Request,res:Response){

        connection.then((conn: Connection) => {
            return conn.query('SELECT * FROM productos');
          })
          .then((results: any[]) => {
            // Procesa los resultados
            console.log(results);
            res.send(results)
          })
          .catch((error: Error) => {
            // Maneja los errores
            console.error(error);
          });
          
    }

    public getProducto (req:Request,res:Response){

      const { id } = req.params

      connection.then((conn: Connection) => {
          return conn.query('SELECT nombre, precio, imagen FROM productos WHERE id = ? LIMIT 1', id);
        })
        .then((results: any[]) => {
          // Procesa los resultados
          console.log(results[0].nombre);

          const producto = {
            nombre:results[0].nombre,
            precio:results[0].precio,
            imagen:results[0].imagen
          }
          
          res.send(producto)
        })
        .catch((error: Error) => {
          // Maneja los errores
          console.error(error);
        });
        
  }

    public async agregarProducto (req:Request,res:Response){
        
        var nombre = req.body.nombre
        var precio = req.body.precio
        var imagen = req.body.imagen


        await connection.then((conn: Connection) => {
             return conn.query('INSERT INTO productos (nombre, precio, imagen) VALUES (?, ?, ?)', [nombre,precio,imagen] );
          })
          .then((results: any[]) => {
            // Procesa los resultados
            console.log(results);
            res.send("producto creado")
          })
          .catch((error: Error) => {
            // Maneja los errores
            console.error(error);
          });
    }



    public eliminarProducto (req:Request,res:Response){

        const { id } = req.params

        connection.then((conn: Connection) => {
            return conn.query('DELETE FROM productos WHERE id = ?', [id]);
          })
          .then((results: any[]) => {
            // Procesa los resultados
            console.log(results);
            res.send("producto eliminado")
          })
          .catch((error: Error) => {
            // Maneja los errores
            console.error(error);
          });
          
    }

    public async actualizarProducto (req:Request,res:Response){

        const { id } = req.params

        var nombre = req.body.nombre
        var precio = req.body.precio
        var imagen = req.body.imagen

        const producto = {
            nombre: nombre,
            precio: precio,
            imagen: imagen
        }


        await connection.then((conn: Connection) => {
           return conn.query('UPDATE productos SET ? WHERE id = ?', [producto, id]);
          })
          .then((results: any[]) => {
            // Procesa los resultados
            console.log(results);
            res.send("producto eliminado")
          })
          .catch((error: Error) => {
            // Maneja los errores
            console.error(error);
          });
          
    }
}


export const indexController = new IndexController();