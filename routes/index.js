//'use strict'

var sales = require('../sales.json');
var models = require('../models'); 

exports.view = function(req, res){
	models.Sale
		.find()
		.exec(displaySales); 

	function displaySales(err, sales){
		console.log(sales);
		res.render('index', {'sales': sales});
	}
};

exports.watch = function(req, res){
	var saleID = req.params.id;

	models.Sale
		.find({"id": saleID})
		.update({"watched":0},{$set:{"watched":1}})
		.exec(afterWatch);

	function afterWatch(err){
		res.send();
	}
}

// Call this function when the page loads (the "ready" event)
/*
$(document).ready(function() {
	initializePage();
})

/*
function initializePage(){
	//$(".sale").find('button').css('height','50px'); 
	// Expand sales when clicked to reveal more information 
	/*
	$("#saleposting").click(function(e){
		var term = $(this).find(".terms"); 
		if (term.length ==  0){
			//Animate
			$(this).append("<p class="terms"> Terms and Conditions</p>")
		}		
	}); 
	*/

	/* This is supposed to fade a hidden object in and out
	$("#saleposting").mouseenter(function(e){
		$(this).stop(); 
		$(this).fadeOut(0); 
		$(this).fadeIn(); 
	}); 

	$("#saleposting").mouseenter(function(e){
		$(this).stop(); 
		$(this).fadeIn(0); 
		$(this).fadeOut(); 
	}); 
}*/


