const bills = require('./db.json')
let globalId = 1


module.exports = {
    getBills: (req, res) => {
        res.status(200).send(bills)
    },
    createBill: (req, res) => {
        const { name, expense } = req.body
        let newBill = {id: globalId, name, expense}
        bills.push(newBill)
        res.status(200).send(bills)
        globalId++
    },
    
    deleteBill: (req, res) => {
        const {id} = req.params
        const index = bills.findIndex(bill => {
            return bill.id === +id
        })
        bills.splice(index, 1)
        res.status(200).send(bills)
    }
}