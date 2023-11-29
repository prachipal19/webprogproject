var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var database = require('./config/database');
const exphbs = require('express-handlebars');
var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



mongoose.connect(database.url);

var Car = require('./models/restaurant');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure the Handlebars template engine
app.engine('.hbs', exphbs.engine({ extname: '.hbs',
defaultLayout: 'main',
helpers: {
 
  
}
 }));
 
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
  res.render('index', { title: 'Hello World' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});