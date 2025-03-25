import express from 'express'
import createProductController from '../controllers/product/createProductController.js'
import listProductController from '../controllers/product/listProductController.js'
import editEstoqueController from '../controllers/product/editEstoqueController.js'
import deleteProductController from '../controllers/product/deleteProductController.js'
import updateProductController from '../controllers/product/updateProductController.js'

const router = express.Router()

router.get('/', listProductController)

router.post('/', createProductController)

router.put('/:id', editEstoqueController)

router.delete('/:id', deleteProductController)


router.patch('/update/:id', updateProductController)





export default router 