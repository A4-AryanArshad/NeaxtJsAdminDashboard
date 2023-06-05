const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({
    Name:{
        type:String,  
    },
    Address:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Email:{
        type:String,
    },
    LandDetails:{
            type:String,
    },
    PlotNumber:{
        type:String,
    },
    PaymentOption:{
        type:String,
    },
    LandDevelopment:{
        type:String, 
    },
    TimeAndPlannedDevelopment:{
        type:String, 
    },KinName:{
        type:String,  
    },
    KinAddress:{
        type:String,
    },
   KinPhone:{
        type:Number,
    },
   KinEmail:{
        type:String,
    },Date:{
        type:String,
    },ClientServicePerposal:{
        type:String,
    },Remarks:{
        type:String,
    }
    

 

}
)





const Mode= mongoose.models.RProject ||mongoose.model('RProject',studentSchema);
module.exports=Mode;
