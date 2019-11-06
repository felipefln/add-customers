const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mongoose =  require('mongoose')

const server = express()


mongoose.connect('mongodb+srv://add-customers:add-customers@add-customers-6d368.mongodb.net/add-customer-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});

server.use(express.json())
server.use(cors())
server.use(routes)

server.listen(Number(process.env.PORT) || 5000);