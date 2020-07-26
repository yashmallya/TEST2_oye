
const express = require('express');
const app = express();
const db = require('./db');


app.use(require('./router/route'));


app.listen(4000,function(){
	console.log('now listening');
});
