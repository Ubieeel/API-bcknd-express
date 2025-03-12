import { getbyId } from "../../models/userModel.js"

export default async function getUserController(req, res) {

    const { id } = req.params

    const result = await getbyId(+id)

    if(!result){
        return res.status(404).json({
            error: 'Usuário não encontrado'
        })
    }

    return res.json({
        message: "Usuário encontrado com sucesso",
        user: result
    })
}