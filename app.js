//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
var items=["Exercise","Breakfast"];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    var today=new Date();
    var options={
      weekday:"long",
      day:"numeric",
      month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);

  res.render("list",{kindOfDay:day,newListItems:items});
});
app.post("/",function(request,response){
  var item=request.body.newItem;
  items.push(item);
  response.redirect("/");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
