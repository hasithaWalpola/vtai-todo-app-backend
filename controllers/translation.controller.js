const db = require("../models");
const Translation = db.translations;

//Save translation history
exports.saveTranslationHistory = async (req, res) => {

    const translation = {
        language: req.body.language,
        user_id: req.body.user_id,
    };

    try {
        Translation.create(translation)
            .then(data => {
                res.send({
                    code: 200,
                    message: "Translation saved successfully!"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while saving the translation."
                });
            });
    } catch (err) {
        res.status(400).send({ status: 400, message: err })
    }

}