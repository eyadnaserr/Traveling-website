var express = require('express');
var path = require('path');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app

// '/' represent for home page
// Wheneever you get request to home page do the function res.render
app.get('/',function(req,res){
  res.render('index',{title: "express" })
});

app.listen(3000);

