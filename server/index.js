const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// store config variables in dotenv
require('dotenv').config();
const cors = require('cors');
const route = require('./routes/route');

//adding midileware  cors
// ****** allow cross-origin requests code START ****** //
app.use(cors()); // uncomment this to enable all CORS and delete cors(corsOptions) in below code
const allowedOrigins = process.env.allowedOrigins.split(',');
/**
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
 */
// ****** allow cross-origin requests code END ****** //

// set all routes
app.use('/api',route);
app.use('/', (req, res) => res.send("Welcome Visitor Management App User !"));
app.listen(process.env.PORT, () => console.log('Elish Enterprise Server is ready on localhost:' + process.env.PORT));
