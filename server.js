var express = require("express");
var mysql = require("mysql");
var logger = require("morgan");
var bodyParser = require('body-parser');
var path = require('path');
var bcrypt = require('bcryptjs');

var PORT = process.env.PORT || 3001;
var app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Imperial_Assault_DB'
    });
};

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('imperial-assault/build'));
}
//allow the api to be accessed by other apps
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

app.post('/signup', function (req, res) {
    console.log(req.body);

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            var query = "INSERT INTO users (name, email, password_hash ) VALUES (?, ?, ? )";

            connection.query(query, [username, email, hash], function (err, response) {
                console.log(response)
            });
        });
    });
});




app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './imperial-assault/public/index.html'));
});

// Listen on port 3001
app.listen(PORT, function () {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
});