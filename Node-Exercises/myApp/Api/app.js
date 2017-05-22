
var express = require("express");
var app = express();

var request = require("request");

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function(req,res){

 res.render('search');

})

 

app.get('/results', function(req,res){

var query = req.query.search;

    request('http://www.omdbapi.com/?s=' + query, function(error,response,body){

        if(!error && response.statusCode == 200){

            var data = JSON.parse(body);

        res.render('results',{data:data});
            //res.render('results', {data:data});
        
        }
else{

console.log(error);

}
    });

});


app.listen(4000, function () {
	
	console.log("Movie app has started!!");
	
});