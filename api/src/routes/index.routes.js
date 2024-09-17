const {Router} = require('express')
const invitadosRouter = require('./invitados.routes')

const router = Router()

router.use('/invitados', invitadosRouter)

module.exports = router