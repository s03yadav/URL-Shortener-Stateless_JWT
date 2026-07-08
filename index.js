// imports 
const express = require('express');
const urlRoutes = require('./routes/urls');
const userRoutes = require('./routes/user');
const path = require('path');
const { connectDB } = require('./connection');
const { handleSession } = require('./middlewares');
const cookieParser = require('cookie-parser');

// express app 
const app = express();
const port = 8001;

// middlewares
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

// database connections
connectDB(`mongodb://127.0.0.1:27017/statelessAuth`);

// routes 
app.use('/' ,userRoutes);
app.use('/home', handleSession, urlRoutes);

// ejs setup
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// server initalisation
app.listen(port, ()=> {console.log(`Server started : http://localhost:${port}/`)});