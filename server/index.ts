import express, {Application} from "express";
import morgan from 'morgan';
import cors from "cors";
import indexRoutes from "./src/routes/index.routes";
import productosRoutes from "./src/routes/productosRoutes";

class Server {   // Creo el servidor
    
    public app:Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{  // Defino el puerto
        this.app.set('port', process.env.PORT || 3000)
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false})); // formatos html
    }

    routes(): void{
        this.app.use(indexRoutes)
        this.app.use(productosRoutes)

    }

    start(): void{ //Ejecuto
        this.app.listen(this.app.get('port'))
            console.log('servidor iniciado')
    }
}

const server = new Server();
server.start();