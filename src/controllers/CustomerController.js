const Customer = require('../models/Customer')

module.exports = {
    async create(req, res) {
        const { id, name, email, cpf, phone } = req.body;
        

        const client = await Customer.findOne({ id })

        if (!client) {
            client = await Customer.create({ id, name, email, cpf, phone })
        }   

        return res.json(client);
    },

    async checkCustomer(req, res, next) {
        const { id } = req.params;
    
        const client = await Customer.findOne({ id })
        
        if(!client) {
            return res.status(400).json({error: 'Customer dot not exists'})
        }
        return next();
    },

    async show(req, res) {
        const { user_id } = req.headers;
        const customer = await Customer.find({ user: user_id})
        
        return res.json(customer)
    },

    async edit(req, res) {
        const { id } = req.params;
    
        const { name, cpf, email, phone } = req.body;
        
        const customer = await Customer.findOne({ id });
        
        customer.name = name,
        customer.cpf = cpf,
        customer.email = email,
        customer.phone = phone;
        
        return res.json(customer)
    },
    async remove(req, res) {
        const { id } = req.params

        await Customer.findOneAndDelete({ id })

        return res.json({ message: "Customer delete on list" })
    }

};

