require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();
const routes = require('./routes/routes')
const db = require("./models");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//connect and sync db
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    })

//PORT 
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(PORT, () => {
    console.log(`Server Running: http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server Close: Process Terminated!');
    });
});