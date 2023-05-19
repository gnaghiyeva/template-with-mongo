const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const EmployeesSchema = new mongoose.Schema({
  fullname:String,
  occupation:String,
  linkF:String,
  linkI:String,
  linkT:String,
  imageURL:String
})
const EmployeeModel = mongoose.model('Employees', EmployeesSchema)

//post employee
app.post("/api/employees", async(req,res)=>{
  const{fullname,occupation,linkF,linkI,linkT,imageURL}=req.body;
  const newEmployee = new EmployeeModel({
    fullname:fullname,
    occupation:occupation,
    linkF:linkF,
    linkI:linkI,
    linkT:linkT,
    imageURL:imageURL
  })
  await newEmployee.save()
  res.status(201).send('employee created succesfully')
})

//get allemployee
app.get("/api/employees", async(req,res)=>{
  const {fullname} = req.query
  const employees = await EmployeeModel.find();
  if(fullname===undefined){
    res.status(200).send({
      data:employees,
      message:"data get success"
    })
  }
  else{
    res.status(200).send({
      data:employees,
      message:'data get success'
    })
  }
})

//get employee by id
app.get("/api/employees/:id", async(req,res)=>{
  const id = req.params.id;
  const employee = await EmployeeModel.findById(id);
  if(!employee){
    res.status(204).send('employee not found')
  }
  else{
    res.status(200).send({
      data:employee,
      message:'data get success'
    })
  }
});

//delete employee
app.delete("/api/employees/:id", async(req,res)=>{
  const id = req.params.id;
  const employee = await EmployeeModel.findByIdAndDelete(id);
  if(employee===undefined){
    res.status(404).send('employee not found');
  }else{
    res.status(203).send({
      data:employee,
      message:"employee deeted succesfuly"
    })
  }
})

//Connecting Mongo DB
DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=>console.log("Mongo DB Connected!"))

app.get('/api', (req, res) => {
  res.send('Hello World!')
})


PORT  = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})