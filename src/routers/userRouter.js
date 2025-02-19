import express from 'express'

const router = express.Router()
import getUserController from '../controllers/user/getUserController.js'
import editUserController from '../controllers/user/editNameUserController.js'

router.get('/', getUserController)

router.post('/', (req,res) => {
    return res.json({
        message: "Resposta do em POST Router /user/"
    })
})

router.put('/', editUserController)


router.delete('/', (req,res) => {
    return res.json({
        message: "Resposta do em delete Router /user/"
    })
})


router.patch('/', (req,res) => {
    return res.json({
        message: "Resposta do em patch Router /user/"
    })
})





export default router 