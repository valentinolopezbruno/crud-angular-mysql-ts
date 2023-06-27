import { createConnection, Connection, Pool, PoolConnection } from 'promise-mysql';
const connectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cursoangularproductos'
  };

  const connection: Promise<Connection> = createConnection(connectionConfig);


  export default connection;