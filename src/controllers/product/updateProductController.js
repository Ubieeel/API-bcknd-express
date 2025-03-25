import { update } from "../../models/productModel.js"

export default async function(req, res) {
    const { id } = req.params
    const product = req.body

    const result = await update(+id, product)

    if(!result){
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    }

    return res.json({
        message: "Produto atualizado com sucesso",
        product: result
    })
}