const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const db = require('./config/db/connectDB');
const routes = require('./routes');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

db.connectDb();

// Manage routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
