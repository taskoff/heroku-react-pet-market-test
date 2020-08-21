const env = process.env.NODE_ENV || 'development';
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config')[env];
const cors = require('cors');
const secret = 'secret';
require('dotenv').config()
const path = require('path');

const app = require('express')();
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const playRouter = require('./routes/play');


mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

require('./config/express')(app);
app.use(cors({
  exposedHeaders: 'Authorization'
}));

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));




app.use(cookieParser(secret));
app.use('/', playRouter);
app.use('/', authRouter);
app.use('/', indexRouter);
app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));