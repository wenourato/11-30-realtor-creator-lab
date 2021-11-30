const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const ctrl = require('./controller.js')

app.get('/api/houses', ctrl.getHouses)
app.post('/api/Houses', ctrl.createHouses)
app.put('/api/Houses/:id', ctrl.updateHouses)
app.delete('/api/Houses/:id', ctrl.deleteHouses)

app.listen(4005, () => console.log('Take us to warp 4005!'))

