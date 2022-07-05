const ContenedorCarrito = require('../controllers/claseCarrito')
const carrito = new ContenedorCarrito("carrito.txt")

const getCarrito = (req, resp) =>{
    const id = Number(req.params.id)
    const getCarrito = async () =>{
        try{
            resp.status(201).json(await carrito.getCarritoById(id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    getCarrito();
}

const postCarrito = (req, resp) =>{
    const crearCarrito = async () =>{
        try{
            resp.status(201).json(await carrito.save())
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    crearCarrito();
}

const deleteCarrito = (req, resp) =>{
    const id = Number(req.params.id)
    const borrarID = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
            resp.status(201).json(await carrito.deleteCarrito(id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    borrarID();
}

const getCarritoProductos = (req, resp) =>{
    const id = Number(req.params.id)

    const getProductosById = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
            resp.status(200).json(await carrito.getProductosById(id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    getProductosById();
}

const postProductoInCarrito = (req, resp) =>{
    const id = Number(req.params.id)
    const agregarProducto = async () =>{
        try{
            resp.status(201).json(await carrito.saveProductoInCarrito(id))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    agregarProducto();
}

const deleteProductoInCarrito = (req, resp) =>{
    const idCarrito = Number(req.params.id)
    const idProducto = Number(req.params.id_prod)
    const borrarID = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
        try{
            resp.status(201).json(await carrito.deleteProductoInCarrito(idCarrito, idProducto))
        }catch(err){
            resp.status(500).json(`Error de servidor ${err}`)
        }
    }
    borrarID();
}

module.exports = {
    getCarrito,
    postCarrito,
    deleteCarrito,
    getCarritoProductos,
    postProductoInCarrito,
    deleteProductoInCarrito
}