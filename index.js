// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const bodyParser = require("body-parser");

// // const app = express();
// // app.use(cors());
// // app.use(express.json());


// // app.get('/', function(req, res) {
// //    res.send('Hello World');
// // });


// // app.get('/data', function(req, res) {
// //    Data.find()
// //        .then((items) => res.send(items));
// // });

// // app.post('/data', (req, res) => {
// //    const { name, email, password,amount } = req.body;

// //    // Assuming you have a Data model defined
// //    const newData = new Data({
// //        name,
// //        email,
// //        password,
// //        amount
// //    });

// //    newData.save()
// //        .then((item) => {
// //            res.status(201).json({
// //                message: 'Data created successfully.',
// //                data: item // Sending the newly created item back in the response
// //            });
// //        })
// //        .catch((err) => {
// //            res.status(500).json({
// //                error: 'Error creating data.',
// //                details: err
// //            });
// //        });
// // });


// // mongoose.connect('mongodb+srv://sivam1:sivam1@cluster0.ay9q8jt.mongodb.net/siva')
// //    .then(() => console.log('Connected to MongoDB'));



// // const newSchema = new mongoose.Schema({
// //    name: String,
// //    email: String,
// //    password: String
// // });
// // const Data = mongoose.model('Data', newSchema);


// // app.listen(8080, () => {
// //    console.log("Server connected");
// // });

// // // Sample data for testing
// // // const data1 = new Data({
// // //     name: "Siva",
// // //     email: '2541542455@gmail.com',
// // //     password: 'pass123',
// // //     amount: 6000
// // // });

// // // Save the sample data
// // // data1.save()
// // //     .then(() => console.log('Data saved successfully'));




// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // Sample schema for the data
// // const dataSchema = new mongoose.Schema({
// //    name: String,
// //    email: String,
// //    password: String,
// //    // Add any other fields you need in your schema
// // });

// // // Model based on the schema
// // const Data = mongoose.model('Data', dataSchema);

// // // GET route to fetch all data
// // app.get('/data', async (req, res) => {
// //    try {
// //        const items = await Data.find();
// //        res.send(items);
// //    } catch (error) {
// //        console.error('Error fetching data:', error);
// //        res.status(500).json({ error: 'Internal Server Error' });
// //    }
// // });

// // // POST route to save new data
// // app.post('/data', async (req, res) => {
// //    const { name, email, password, amount } = req.body;

// //    const newData = new Data({
// //        name,
// //        email,
// //        password,
// //        // Add any other fields you need here
// //    });

// //    try {
// //        const item = await newData.save();
// //        res.status(201).json({
// //            message: 'Data created successfully.',
// //            data: item
// //        });
// //    } catch (error) {
// //        console.error('Error creating data:', error);
// //        res.status(500).json({ error: 'Internal Server Error' });
// //    }
// // });

// // // Connect to MongoDB Atlas
// // mongoose.connect('mongodb+srv://sivam1:sivam1@cluster0.ay9q8jt.mongodb.net/siva')
// //    .then(() => console.log('Connected to MongoDB'))
// //    .catch((error) => console.error('Error connecting to MongoDB:', error));

// // // Start the server
// // const PORT = process.env.PORT || 8080;
// // app.listen(PORT, () => {
// //    console.log(`Server connected. Listening on port ${PORT}`);
// // });



// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.get('/', (req, res) => {
// res.send("<h1>Welcome</h1>");
// });
// app.get('/data',function(req,res){
// Data.find().then((item)=>res.send(item))
// })
// app.post('/create',function(req,res){
// Data.create(req.body).then((item)=>res.send(item))
// })
// app.put('/update/:id',function(req,res){
// Data.findByIdAndUpdate({_id:req.params.id},req.body,{new:"true"}).then((item)=>res.send(item))
// })
// app.delete('/delete/:id',function(req,res){
// Data.findByIdAndDelete({_id:req.params.id}).then((item)=>res.send(item))
// })
// app.listen(8080,()=>console.log("Server Started on port number 8080"));
// mongoose.connect("mongodb+srv://sivam1:sivam@cluster0.ay9q8jt.mongodb.net/database").then(()=>console.log("MongoDB Connected"))
// //create a schema
// var newSchema = new mongoose.Schema({
// name:String,
// email:String,
// password:String,
// amount:Number
// })
// //model
// let Data = mongoose.model('database',newSchema)





const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const URL = process.env.URL;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("<h1>Welcome</h1>");
});

app.get('/data',function(req,res){
    Data.find().then((item)=>res.send(item))
})

app.post('/create',function(req,res){
    Data.create(req.body).then((item)=>res.send(item))
})

app.put('/update/:id',function(req,res){
    Data.findByIdAndUpdate({_id:req.params.id},req.body,{new:"true"}).then((item)=>res.send(item))
})

app.delete('/delete/:id',function(req,res){
    Data.findByIdAndDelete({_id:req.params.id}).then((item)=>res.send(item))
})

app.listen(PORT,()=>console.log("Server Started on port number 8080"));

mongoose.connect(URL).then(()=>console.log("MongoDB Connected"))

//create a schema

var newSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    amount:Number
})

//model
let Data = mongoose.model('database',newSchema)

//create a data for testing

// let data1 = new Data({
//     name:"Dheerka Dharshini",
//     email:"sdheerkadharshini@gmail.com",
//     password:"sdheerka",
//     amount:2000
// })

// //save the data
// data1.save()







