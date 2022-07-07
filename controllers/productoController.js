const ContenedorProducto = require('./claseProducto')
const productos = new ContenedorProducto("productos.txt")
let administrador = true

const getProductos = (req, resp) =>{
    const id = req.params.id 
    if(id){
        const getById = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
            try{
                resp.status(200).json(await productos.getById(id))
            }catch(err){
                resp.status(500).json(`Error de servidor ${err}`)
            }
        }
        getById();
    }else{
        const getAll = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
            try{
                resp.status(200).json(await productos.getAll())
            }catch(err){
                resp.status(500).json(`Error de servidor ${err}`)
            }
        }
        getAll();
    }
}

const postProductos = (req, resp) =>{
    const producto = req.body
    if(administrador){
        const subirProd = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
            try{
                resp.status(201).json(await productos.save(producto))
            }catch(err){
                resp.status(500).json(`Error de servidor ${err}`)
            }
        }
        subirProd();
    }else{
        resp.status(401).json({error: -1, descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizada`})
    }
}

const editProductos = (req, resp) =>{
    const producto = req.body
    if(administrador){
        const id = Number(req.params.id)
        const getAll = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
            try{
               resp.status(201).json(await productos.changeById(producto,id))
            }catch(err){
                resp.status(500).json(`Error de servidor ${err}`)
            }
        }
        getAll();
    }
    else{
        resp.status(401).json({error: -1, descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizada`})
    }
}

const deleteProductos = (req, resp) =>{
    const id = Number(req.params.id)
    if(administrador){
        const borrarID = async () =>{ //Se hace con funcion Async y Await porque de otra forma me tiraba un objeto vacio
            try{
               resp.status(201).json(await productos.deleteById(id))
            }catch(err){
                resp.status(500).json(`Error de servidor ${err}`)
            }
        }
        borrarID();
    }else{
        resp.status(401).json({error: -1, descripcion: `ruta '${req.path}' metodo '${req.method}' no autorizada`})
    }
}


module.exports = {
    getProductos,
    postProductos,
    editProductos,
    deleteProductos
}