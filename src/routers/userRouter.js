import express from 'express'

const router = express.Router()
import getUserController from '../controllers/user/getUserController.js'
import editUserController from '../controllers/user/editNameUserController.js'
import createUserController from '../controllers/user/createUserController.js'
import listUserController from '../controllers/user/listUserController.js'
import deleteUserController from '../controllers/user/deleteUserController.js'
import editNameUserController from '../controllers/user/editNameUserController.js'

router.get('/', listUserController)

router.get('/', getUserController)

router.post('/', createUserController)

router.put('/:id', editUserController)

router.delete('/:id', deleteUserController)

router.patch('/nome/:id', editNameUserController)


export default router 