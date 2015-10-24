var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var port = 9000;

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

//development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : Will resolve to project folder
})

app.listen(port);
console.log("Portside on " + port);