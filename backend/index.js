import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";


const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', ejs);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use( bodyParser.json() ); 

mongoose.connect("mongodb://localhost:27017/vetDB", {useNewUrlParser: true});
const userSchema = {
    First_name: String,
    Last_name: String,
    Email: String,
    Number_of_pets: Number,
    Pet_IDs: String
};

const petSchema = {
    Name: String,
    Type: String,
    Ownwer_ID: String
};

 const User = mongoose.model("User", userSchema);
 const Pet = mongoose.model("Pet", petSchema);

 app.get("/pets", function(req, res){
    Pet.find(function(err, foundPets){
        if (!err) {
            res.send(foundPets);
        } else {
            res.send(err);
        }
    });
 });

 app.get("/getusers", function(req, res){
    User.find(function(err, foundUsers){
        if (!err){
            res.json(foundUsers);
        } else {
            res.send(err);
        }
    });
 });

 app.post("/postuser", async (req,res) => {
    const usr = new User ({
            "First_name": req.body.First_name,
            "Last_name": req.body.Last_name,
            "Email": req.body.Email  
 });

   usr.save(function(err){
        if (err)
            throw err;
        else
            console.log('save user successfully ...',{usr})
    });

 });

 app.post("/deleteuser", async (req,res) => {
    const usr = {"_id": req.body._id}

   User.deleteOne({...usr},function(err){
        if (err)
            throw err;
        else
            console.log('delete user successfully ...',{usr})
    });
 });


 app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
 }); 