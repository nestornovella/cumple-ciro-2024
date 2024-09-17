const {Invitado} = require('../db')



module.exports = {
    getAllInvitadosConfirmados: async(req, res)=>{
        try {
            const invitados = await Invitado.findAll({where:{
                confirmAsist: true
            }})
            res.json(invitados)
        } catch (error) {
            console.error(error.message)
        }
    },
    getAllInvitadosNoConfirmados: async(req, res)=>{
        try {
            const invitados = await Invitado.findAll({where:{
                confirmAsist: false
            }})
            res.json(invitados)
        } catch (error) {
            console.error(error.message)
        }
    },
    createInvitado: async(req, res)=>{
        const {name} = req.body

        try {
            if(!name)  throw new Error('se requiere el nombre')
            const invitado = await Invitado.create(req.body)
            res.json(invitado)
        } catch (error) {
            console.error(error.message)
        }
    }
}