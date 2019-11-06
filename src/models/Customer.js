const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    cpf: String,
    phone: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)