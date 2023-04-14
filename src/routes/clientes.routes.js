import {Router} from 'express';
import { getClientes , createCliente , updateCliente, deleteCliente} from '../controllers/clientes.controller.js';
const router=Router();

router.get('/clientes',getClientes);
router.post('/clientes',createCliente);
router.patch('/clientes/:id',updateCliente);
router.delete('/clientes/:id',deleteCliente)
export default router