const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

app.set('views', __dirname + '/views');
app.set('viewengine', 'ejs');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true }));



// display form
app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.post('/drawmap', function (req, res) {
  res.render('geocode.ejs', // to gather field data
    {
      location: req.body.location
    });
});


process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
app.listen(8000, function () {
  console.log("Geocode listening on port 8000")
});
