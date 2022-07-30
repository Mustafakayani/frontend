const bcrypt = require('bcryptjs')

const User = require('../model/User');


 const login=async(req,res)=>{
    
    const {email,password}=req.body;
    const user = await User.findOne({email})


    

    if(user && (await bcrypt.compare(password,user.password))){
     console.log("user exits")
         res.json({
             _id:user.id,
            name:user.name,
             email:user.email,
         })
     }else{
         res.status(400).json({message:"unable to login"})
     }
    }



 const register=async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name||!email||!password){
        res.status(400).json({message:"please add all fields"})
    }

    const userExists = await User.findOne({email});

    if(userExists){
        return res.status(400).json({message:"user already exists"});
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({
        name,
        email,
        password:hashedPassword,
     

    })

    if(user){
      return  res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email, 
        })
    }else{
      return res.json({message:"invalid User data"})
    }

}

exports.login = login;
exports.register = register;
