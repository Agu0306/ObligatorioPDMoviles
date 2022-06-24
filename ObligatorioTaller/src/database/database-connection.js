import * as SQLite from 'expo-sqlite';
const dbName = 'database.db';
const DatabaseConnection = {
    getConnection: () => {
        return SQLite.openDatabase('database.db');
    }
};
export default DatabaseConnection;




//generamos una constante con un metodo dentro 
// el metodo con funcion flecha
// va a devolver la conexion a la base de datos
// importa todo con asterisco y usa un alias con "as"