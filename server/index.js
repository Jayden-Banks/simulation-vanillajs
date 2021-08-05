const express = require('express')
const cors = require('cors')
const app = express()
const ctrl = require('./controller')

//middlewares
app.use(express.json())
app.use(cors())

app.get('/api/bills', ctrl.getBills)
app.post('/api/bills/', ctrl.createBill)
app.delete('/api/bills/:id', ctrl.deleteBill)




app.listen(4000, () => console.log('We are live on 4000'))