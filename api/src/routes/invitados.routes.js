const {Router} = require('express')
const {createInvitado, getAllInvitadosConfirmados, getAllInvitadosNoConfirmados} = require('../controllers/invitados.controllers')

const router = Router()

router.get('/confirmados', getAllInvitadosConfirmados)
router.get('/noConfirmados', getAllInvitadosNoConfirmados)
router.post('/invitados', createInvitado)


module.exports = router