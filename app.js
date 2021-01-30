const express = require('express');
//2
const driveRoutes = require('./routes/driver_routes')
const clientRoutes = require('./routes/client_routes')
const indexRoutes = require('./routes/index_routes')
const app = express();
// // 4 make mongo connected
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/app', { useNewUrlParser: true, useUnifiedTopology: true })
    // // //3 first middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// // //
driveRoutes(app)
clientRoutes(app)
indexRoutes(app)

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(422).send({ err: err.message })

})
module.exports = app;