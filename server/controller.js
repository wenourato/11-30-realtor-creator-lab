const houses = require('./db.json')
let globalId = 4


module.exports = {
    getHouses: (req, res) => {
    res.status(200).send(houses)
    },

    createHouses: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            address,
            price: + price,
            imageURL,
            id: globalId
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },

    deleteHouses: (req, res) => {
        let{id} = req.params
        let index = houses.findIndex(elem => elem.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },

     updateHouses: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex(elem => +elem.id === +id)

    
        if(type ==='plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if(type === 'minus') {
             houses[index].price -= 10000
            res.status(200).send(houses)
        }

     }
}