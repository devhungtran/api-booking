

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { config } = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./config/db/connectDB')
const routes = require('./routes');
require('dotenv').config();
const port = config().parsed.PORT

const app = express()
app.use(bodyParser.json());
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// connect to database mongodb
db.connectDb()
// manage router
app.use('/', routes);







app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  