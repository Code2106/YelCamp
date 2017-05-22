

var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var request = require("request");


 var campgrounds = [

            {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
            {name:"nsds", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
                    {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
                            {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
                                    {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
                                            {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
                                                    {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" },
                                                            {name:"Creek", image:"https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg" }

       ];


app.use(bodyParser.urlencoded({extended:true}));

// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function(req,res){

        res.render('landing');

});


app.get('/campgrounds/form', function(req,res){

 res.render('form');

});


app.get('/campgrounds', function(req,res){

 res.render('campgrounds',{campgrounds:campgrounds});

});


app.post('/campgrounds', function(req,res){

   var name = req.body.name;
   var image = req.body.image;

   var newCampGround = {name:name, image:image};

   campgrounds.push(newCampGround);
   //redirect nack to the campground page
   res.redirect("/campgrounds");

});


app.listen(3000, function () {
	
	console.log("Movie app has started!!");
	
});