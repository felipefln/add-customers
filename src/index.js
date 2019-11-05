const express = require('express')
const cors = require('cors')
const server = express()


const customers = []

server.use(express.json())
server.use(cors())

//function validade customer exist middlleware
function checkCustomer(req, res, next) {
    const { id } = req.params;

    const customer = customers.find(c => c.id == id)

    if(!customer) {
        return res.status(400).json({error: 'Customer dot not exists'})
    }

    return next();
}

//route list customers
server.get('customers', (req, res) => {
    return res.json(customers)
})

//route create customer
server.post('customers', (req, res) => {
    const { id, name, cpf, email, phone } = req.body;
    const customer = {
        id,
        name,
        cpf,
        email,
        phone
    }

    customers.push(customer)
    return res.json(customers)
})

//route edit customer
server.put('customers/:id', checkCustomer, (req, res) => {
    const { id } = req.params

    const { name, cpf, email, phone } = req.body;
    
    const customer = customers.find(c => c.id == id);
    
    customer.name = name,
    customer.cpf = cpf,
    customer.email = email,
    customer.phone = phone;

    return res.json(customer)
})

//route delete customer from list
server.delete('customers/:id', checkCustomer, (req, res) => {
    const { id } = req.params

    const indexCustomer = customers.findIndex(c => c.id == id)

    customers.splice(indexCustomer, 1)

    return res.json({ message: "Customer delete on list" })
    
})

server.listen(3333);