require("./Connect");
const Mode=require("./Schema");



export default  async function sender(req,res){
    try {
        if(req.method==="POST"){
            
            const {Name,  
                Address,
            Phone,
            Email,
            LandDetails,
            PlotNumber,
            PaymentOption,
            LandDevelopment,
            TimeAndPlannedDevelopment,
            KinName,
            KinAddress,
           KinPhone,
           KinEmail,
            Date,
            ClientServicePerposal,
        Remarks
            }=req.body;
            
           
            if(!Name||!Address||!Phone||!Email||!LandDetails||!PlotNumber||!PaymentOption||!LandDevelopment||!TimeAndPlannedDevelopment||!KinName||!KinAddress||!KinEmail||!KinPhone||!Date||!ClientServicePerposal||!Remarks){
               // res.status(422).json({error:"please enter the fields"});
                console.log("hello aryan");
            }
            const finder= await Mode.findOne({Email:Email})
          
            if(!finder){
                const user=new Mode({ Name,  
                    Phone,
                    Email,
                    LandDetails,
                    PlotNumber,
                    PaymentOption,
                    LandDevelopment,
                    TimeAndPlannedDevelopment,
                    KinName,
                    KinAddress,
                   KinPhone,
                   KinEmail,
                    Date,
                    ClientServicePerposal,
                Remarks});
                user.save();
            }
        }
             
            
            
    } catch (error) {
        console.log(error);
    }

}