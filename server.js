var express = require('express'),
    app = express();
var path = require('path');

var staticSiteOptions = {
    portnum: 8000, 
    maxAge: 1000 * 60 * 60 * 24
};

app.use(express.static(
    path.join(__dirname, 'static'),
    staticSiteOptions
 )).listen(staticSiteOptions.portnum);

app.listen( () => {
    console.log('I\'m alive!');
  });


module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
      // Здесь будем создавать заметку.
      res.send('Hello')
    });
};