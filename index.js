
const express = require('express');
const app = express();
const db = require('./db');


app.use(require('./route'));


app.listen(4000,function(){
	console.log('now listening');
});
