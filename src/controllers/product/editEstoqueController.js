import { updateEstoque } from "../../models/productModel.js"

export default async function(req, res) {
    const { id } = req.params
    const {estoque} = req.body

    const result = await updateEstoque(+id, estoque)

    if(!result){
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    }

    return res.json({
        message: "Estoque do Produto atualizado com sucesso",
        product: result
    })
}