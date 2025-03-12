import express from 'express'

const router = express.Router()

router.get('/', (req,res) => {
    return res.json({
        message: "Resposta do Router /product/"
    })
})

router.post('/', (req,res) => {
    return res.json({
        message: "Resposta do em POST Router /product/"
    })
})

router.put('/', (req,res) => {
    return res.json({
        message: "Resposta do em put Router /product/"
    })
})

router.delete('/', (req,res) => {
    return res.json({
        message: "Resposta do em delete Router /product/"
    })
})


router.patch('/', (req,res) => {
    return res.json({
        message: "Resposta do em patch Router /product/"
    })
})





export default router 