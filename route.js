
const express = require('express');
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');


router.use(bodyParser.json());



//show all the list of the drivers from drivers table
router.get('/view/driver',function(req,res,next){
	// res.send({type:'GET'});
	var sql = "select * from driver ";
	db.query(sql,(err,result,fields)=>{
	if(err){
		//  console.log(err);
		res.status(500).send({error:"Something failed"});
	}
	// console.log("confirm");
	res.send(result);

	})
});
	

//show row corresponding to driver with driver_id = id
router.get('/view/driver/:id',function(req,res,next){
	// res.send({type:'GET'});
	var Id = req.params.id;

	var sql = "select * from driver where driver_id= ?";
	db.query(sql,[Id] ,(err,result,fields)=>{
	if(err){
		//  console.log(err);
		res.status(500).send({error:"Something failed"});
	}
	// console.log("confirm");
	res.send(result);

	})
});



//show all the list of the customer from drivers table
router.get('/view/customer',function(req,res,next){
	// res.send({type:'GET'});
	var sql = "select * from customer ";
	db.query(sql,(err,result,fields)=>{
	if(err){
		//  console.log(err);
		res.status(500).send({error:"Something failed"});
	}
	// console.log("confirm");
	res.send(result);

	})
});
	

//show row corresponding to customer with customer	_id = id
router.get('/view/customer/:id',function(req,res,next){
	// res.send({type:'GET'});
	var Id = req.params.id;

	var sql = "select * from customer where customer_id= ?";
	db.query(sql,[Id] ,(err,result,fields)=>{
	if(err){
		//  console.log(err);
		res.status(500).send({error:"Something failed"});
	}
	// console.log("confirm");
	res.send(result);

	})
});



//update a rating given by customer in driver table
router.put('/rate/customer',function(req,res){
	// res.send({type:'PUT'});
	var Id = req.body.id;
	var rating = req.body.rating;

	var sql = "UPDATE driver SET rating = (total_rides*rating+ ?)/(total_rides+1), total_rides=total_rides+1 where driver_id =?";
	db.query(sql,[rating, Id],(err,result,fields)=>{
	if(err){
		return console.log(err);
	}
	console.log("confirm");
	res.json({'status': 'success'});
	});
});

//update a rating given by driver in customer table
router.put('/rate/driver',function(req,res){
	// res.send({type:'PUT'});
	var Id = req.body.id;
	var rating = req.body.rating;

	var sql = "UPDATE customer SET rating = (total_rides*rating+ ?)/(total_rides+1), total_rides=total_rides+1 where customer_id =?";
	db.query(sql,[rating, Id],(err,result,fields)=>{
	if(err){
		return console.log(err);
	}
	console.log("confirm");
	res.json({'status': 'success'});
	});
});




// add a new driver in the database
// router.post('/add',function(req,res,next){
// 	// res.send({type:'POST'});

// 	var Id = req.body.id;
// 	var Name = req.body.name;
// 	var total_rides = req.body.total_rides;
// 	var rating = req.body.rating;

// 	var sql = "INSERT INTO driver (driver_id,driver_name,total_rides,rating) VALUES('"+Id+"','"+Name+"','"+total_rides+"','"+rating+"')";

// 	db.query(sql,(err,result,fields)=>{
// 	if(err){
// 		return console.log(err);
// 	}
// 	console.log("confirm");
// 	res.json({'status': 'success'});
// 	});
// });

module.exports=router;
