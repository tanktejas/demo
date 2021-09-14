const validat=require('validator');
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/contactusdata",{
 
});

const schema= new mongoose.Schema({
    fname:{
         type:String,
         required:true
    },
    lname:{
        type:String,
        required:true
   },
     mobile:{
         type:Number,
         min:[10,"enter valid monbile number"],
     },
     email:{
         type:String,
         validate:{
             validator:function(){
                 if(!validat.isEmail(this.email)){
                     throw new Error("enter valid e-mail.");
                 }
             }
         }
     },
     address:{ 
         type:String,
         required:true,
     }      
})
const collection=new mongoose.model("dataofvisitor",schema);

console.log(collection);
const a=new collection({
    fname:"tejas",
    lname:"jsds",
    mobile:2323232323,
    email:"tejas@gmail.com",
    address:"jndjshdksdksdjskdjskldjs"
})
// a.save();  
module.exports=collection;
  