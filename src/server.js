import express from 'express';
import morgan from 'morgan';
import clientesRoutes from './routes/clientes.routes.js'
const app= express();




///////midddewer///////////

app.use(express.static('/home/mercado/Escritorio/proyect/src/public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); ///para recibir formulario html
app.use(express.json()); ////para recibir jason en el servidor

///routes//


app.use(clientesRoutes);




///setting/////
app.listen(4000);