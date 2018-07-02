var express = require('express')
var app = new express()
var port = 8000;

app.listen(port, function(){
    console.log('listening on port', port)
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/home.html')
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
});

