import {createPool} from 'mysql2/promise'


export const pool =createPool({
host: 'localhost',
user:'root',
password:'mercado43652957' ,
port:3306 ,
database:'negocio'


});
