import { remove } from "../../models/productModel.js"

export default async function(req, res) {
    const { id } = req.params

    const result = await remove(+id)

    if(!result){
        return res.status(404).json({
            error: 'Produto não encontrado'
        })
    }

    return res.json({
        message: "Produto deletado com sucesso",
        user: result
    })
}