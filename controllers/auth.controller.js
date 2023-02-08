const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require("../models");
const User = db.users;

exports.login = async (req, res) => {

    await User.findOne({ where: { email: req.body.email } })
        .then(async data => {

            if (!data) {
                return res.status(400).send({ error: 'Seems like you dont have account' })
            }

            //PasswordComaprison
            const validPassword = await bycrpt.compare(req.body.password, data.password)
            if (!validPassword) {
                return res.status(400).send({ error: 'Incorrect Password' })
            }

            //creating a token and save for the particluar user
            const token = jwt.sign({ id: data.id }, process.env.TOKEN_SECRET)
            User.update({ token: token }, {
                where: { email: req.body.email }
            }).then(data => {
                console.log(data, 'userCheck')
                res.header('auth-Token', token)
                    .send({ code: 200, token: token, message: 'Login Sucessfull' })
            })
        })
}




