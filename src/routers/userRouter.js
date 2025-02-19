import express from 'express'

const router = express.Router()

router.get('/', (req,res) => {
    return res.json({
        message: "Resposta do Router /user/"
    })
})

router.post('/', (req,res) => {
    return res.json({
        message: "Resposta do em POST Router /user/"
    })
})

router.put('/', (req,res) => {
    return res.json({
        message: "Resposta do em put Router /user/"
    })
})

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