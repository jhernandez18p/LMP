// Main CONF.
const express = require('express');
const app = express();

const _Promise = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const routes = require('./conf/routes/');
const router = express.Router();

// CONF.
const port = parseInt(process.env.PORT || 9000);
const url = (process.env.MONGODB_URI || "mongodb://localhost:27017/luxury");
const user = (process.env.MONGODB_USER || "test");
const password = (process.env.MONGODB_PASS || "test");
const secretKey = (process.env.JWT_SECRET_KEY || "secretKey");
const nodeRestApi = (process.env.JWT_NODE_REST_API || "nodeRestApi");


const mail_user = process.env.MAIL_USER;
const mail_user_pass = process.env.MAIL_PASS;
console.log(mail_user,mail_user_pass);


// // MongoDB CONF.
// mongoose.connect(url, {promiseLibrary: _Promise})
//   .then(() => console.log('Nos conectamos al MongoDB'))
//   .catch((err) => console.error(err));

// // jwt secret token
// app.set(secretKey, nodeRestApi);
// app.set('port', port);

// APP CONF.
routes(router);
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(helmet());
app.use('/api/v2/',router);
app.disable('x-powered-by');


// APP For PROD.
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

  app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'service-worker.js'));
  });
// }

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// handle errors
app.use(function (err, req, res, next) {
  console.log(err);
  if (err.status === 404)
    res.status(404).json({ message: "Not found" });
  else
    res.status(500).json({ message: "Something looks wrong :( !!!" });
});

// RUN.
app.listen(port, () => {
  console.log(`Servidor inició en el puerto: ${port}`);
});