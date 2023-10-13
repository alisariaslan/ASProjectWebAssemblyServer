var myArgs = process.argv.slice(2);
console.log('myArgs:', myArgs);
var listen_ip = myArgs[0];
var listen_port = myArgs[1];

const express = require('express');
var compression = require('compression');
const app = express();
const path = require('path');

app.use(compression());
app.use('/parkor', express.static(path.join(__dirname, 'projects/parkor')));

app.listen(listen_port,listen_ip, () => {
    console.log('Server started at -> http://%s:%s', listen_ip, listen_port);
});
