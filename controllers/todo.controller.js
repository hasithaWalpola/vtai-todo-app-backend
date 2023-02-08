const db = require("../models");
const Todo = db.todos;

//Create todo item
exports.create = async (req, res) => {

    const todo = {
        title: req.body.title,
        description: req.body.description,
        user_id: req.body.user_id,
        status: req.body.status,
    };

    try {
        Todo.create(todo)
            .then(data => {
                res.send({
                    code: 200,
                    message: "Todo item created successfully!"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the todo item."
                });
            });
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}