const bycrpt = require('bcryptjs')
const db = require("../models");
const User = db.users;

//Create/register a user
exports.create = async (req, res) => {

    //Hash the password before store in the database
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(req.body.password, salt)

    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role != '' ? 1 : 2,
    };

    try {
        User.create(user)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Error occurred while registering the User."
                });
            });
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}



