import { create } from "../../models/productModel.js"

export default async function (req, res) {
    const product = req.body

    // TODO: validar dados do usuário

    const result = await create(product)


    if(!result) {
        return res.status(500).json({
            message:" Erro ao criar produto"
        })
    }


    return res.json({
        message:" Produto criado com sucesso!",
        product: result
    })

}