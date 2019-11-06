const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { name, email } = req.body;

        // const user = await User.create({ email })
        let user = await User.findOne({ name, email })

        if (!user) {
            user = await User.create({ name, email })
        }   

        return res.json(user);
    }
};