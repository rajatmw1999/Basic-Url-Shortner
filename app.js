//jshint esversion: 6

var bodyParser  = require('body-parser'),
    express     = require('express'),
    mongoose    = require('mongoose'),
    Logic       = require('./logic/logic'),
    Urldata     = require('./models/urldata'),
    indexRoute  = require('./routes/index'),
    directRoute = require('./routes/redirection');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
//mongoose.connect('mongodb://localhost:27017/urlshort');
mongoose.connect("mongodb+srv://rajat-admin:rajat1999@cluster0-nbxxl.mongodb.net/articledb",{useNewUrlParser: true});

//including routes
app.use(indexRoute);
app.use(directRoute);


app.listen(process.env.PORT || 3000,function(){
  console.log('Server is running successfully on port 3000!');
});
