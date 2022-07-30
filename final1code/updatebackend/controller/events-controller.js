const Event = require('../model/Event');


const getAllEvents=async(req,res,next)=>{
    
    let events;

    try{
        events = await Event.find();
    }catch(err){
        console.log(err);
    }
    if(!events){
        return res.status(200).json({message:"no events found"})
    }

return res.status(200).json({events})
}

const postEvent=async(req,res,next)=>{
    let event;
    const {deptname,name,due,location} = req.body;
    try{
        event = new Event({
            deptname,name,due,location
        })

        await event.save()
    }
    catch(err){
        console.log(err);
    }
    if(!event){
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(200).json({event})
}

const updateEvent = async(req,res,next)=>{
    const id = req.params.id;
    const {deptname,name,due,location}=req.body;
    let event; 
    try{
        event = await Event.findByIdAndUpdate(id,{deptname,name,due,location});
        await event.save();
    }catch(err){
        console.log(err);
    }
    if(!event){
        return res.status(500).json({message:"Unable to update by this ID"});
    }
    return res.status(200).json({event});
}

const deleteEvent = async(req,res,next)=>{
    const id = req.params.id;
    let event;
    try{
        event = await Event.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!event){
        return res.status(200).json({message:"message unable to Delete by this ID"});
    }
    return res.status(200).json({event})
}


exports.getAllEvents = getAllEvents;
exports.postEvent = postEvent;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;
