const { Router } = require('express')
const { getProductos, postProductos, editProductos, deleteProductos } = require('../controllers/productoController')
const { getCarrito, postCarrito, deleteCarrito, getCarritoProductos, postProductoInCarrito, deleteProductoInCarrito } = require('../controllers/carritoController')
const path = require('path')
const router = Router()


//PRODUCTOS
router.get('/productos', getProductos)
router.post('/productos', postProductos)
router.put('/productos/:id', editProductos)
router.delete('/productos/:id', deleteProductos)


//CARRITO
router.get('/carrito/:id', getCarrito)
router.post('/carrito', postCarrito)
router.delete('/carrito/:id', deleteCarrito)
router.get('/carrito/:id/productos', getCarritoProductos)
router.post('/carrito/:id/productos', postProductoInCarrito)
router.delete('/carrito/:id/productos/:id_prod', deleteProductoInCarrito)

module.exports = router