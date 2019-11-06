const express = require('express')
const routes = express.Router()
const CustomerController = require('./controllers/CustomerController')

routes.get('/customers', CustomerController.show)

//route create customer
routes.post('/customers', CustomerController.create),

//route edit customer
routes.put('/customers/:id', CustomerController.checkCustomer, CustomerController.edit)

//route delete customer from list
routes.delete('/customers/:id', CustomerController.checkCustomer, CustomerController.remove)

module.exports = routes;