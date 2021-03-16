var express = require('express')
    , http = require('http')
    , db = require('./server/db.js')


    , bodyParser     = require('body-parser')
//    , config = require('./server/appconfig/appconfig.json')

    , fs = require('fs')
    , path = require('path')
    , methodOverride = require('method-override'),

     router = express.Router();


var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5


/*


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});
*/
/*
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
if(q.pathname=='/')
 var filename = "./client/views/login.html";
    else {
    var filename = "./client/views" + q.pathname;
}
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

    console.log(q);
}).listen(8080);*/


var app = exports.app = express();

require('./server/routes.js');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser({limit:'1000mb'})); 		// pull information from html in POST
app.use(methodOverride());  // simulate DELETE and PUT
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



app.all('/*',function(req,res,next){
    res.sendFile(__dirname+'/client/index.html',{route: __dirname});
});



// add router in the Express app.
app.use("/", router);


var server = http.createServer(app).listen(8080, function() {
    console.log("Express server listening on port " + 8080);

});

