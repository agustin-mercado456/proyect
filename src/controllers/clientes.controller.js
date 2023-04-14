import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  const [row] = await pool.query("SELECT * FROM clientes;");

  res.json(row);
};
export const createCliente = async (req, res) => {
  const { name, dni, domicilio, telefono } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO clientes (name,dni,domicilio,telefono) VALUES (?,?,?,?)",
    [name, dni, domicilio, telefono]
  );

  res.json(rows);

  console.log(rows);
};
export const updateCliente = async (req, res) => {
  const id = req.params.id;
  const { name, dni, domicilio, telefono } = req.body;

  const [result] = await pool.query(
    "UPDATE clientes SET name=IFNULL(?, name) , dni=IFNULL(?,dni), domicilio=IFNULL(?,domicilio) , telefono=IFNULL(?,telefono) WHERE id=?",
    [name, dni, domicilio, telefono, id]
   );
   res.send(result);
  console.log(result)
};

export const deleteCliente = async (req,res) =>{


  const [result] = await pool.query(' DELETE FROM clientes WHERE id=?',[req.params.id]);
  res.send(result);
   console.log(result)



};