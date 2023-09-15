var express = require('express');
var cors = require('cors');
require('dotenv').config()
const bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(express.json())
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on  http://localhost:' + port)
});
