const Producto = require('../models/Product');
const Usuario = require('../models/User');
const {mercadopago} = require ('../utils/mercadoPago');


const PagarProducto = async (req,res) =>{
    // const categoriabuscar = req.params.id;
    // const datos = req.boday.items;
    // const productos = await Producto.findById(categoriabuscar);
    let preference ={
        // id: 
        total_amount: parseInt(),
        binary_mode:true,
        payer:{
            name:datos.nombre,
            email:datos.email
        }
    }
}