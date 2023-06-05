"use client"
import React, { useState } from 'react'
import styles from '../styles/Realpage.module.css';
import axios from 'axios';
import Link from 'next/link';
const Registration = () => {

const[Name,setName]=useState('');
const[Phone,setPhone]=useState('');
const[Email,setEmail]=useState('');
const[Address,setAddress]=useState('');
const[LandDetails,setLandDetails]=useState('');
const[PlotNumber,setPlotNumber]=useState('');
const[ PaymentOption,setPaymentOption]=useState('');
const[ LandDevelopment,setLandDevelopment]=useState('');
const[  TimeAndPlannedDevelopment,setTimeAndPlannedDevelopment]=useState('');
const[   KinName,setKinName]=useState('');
const[      KinAddress,setKinAddress]=useState('');
const[     KinPhone,setKinPhone]=useState('');
const[   KinEmail,setKinEmail]=useState('');
const[  Date,setDate]=useState('');
const[  ClientServicePerposal,setClientServicePerposal]=useState('');
const[   Remarks,setRemarks]=useState('');
const handleinputs=(e)=>{

 
    const { name, value } = e.target;
    setuser({...user,[name]:value})
}

    const sender=async(e)=>{
        try {
           
      
         const response = await axios.post('/api/Routes', {Name,  
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
    Remarks });
         console.log(response.data);
     
       
        } catch (error) {
         console.log(error);
        }
     
       
       }
  return (
   <>
    <div id={styles.outerpage}>
   <div id={styles.page}>
   <div id={styles.head}>
    <img src="../../houselogo.jpeg"></img>
   <h2>REGISTRATION FORM - Land Purchase</h2>
   </div>
   <div id={styles.pdetails}>
<h3>PERSONAL DETAILS</h3>
<div id={styles.fields}>
    <h4>Name :</h4>
    <input type="text" id={styles.dotted} name="Name" onChange={(e)=> setName(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>Address :</h4>
    <input type="text" id={styles.dotted} name="Address" onChange={(e)=> setAddress(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>Phone :</h4>
    <input type="text" id={styles.dotted} name="Phone" onChange={(e)=> setPhone(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>Email :</h4>
    <input type="text" id={styles.dotted} name="Email" onChange={(e)=> setEmail(e.target.value)}></input>
    
</div>
   </div>
  
   <div id={styles.pdetails}>
<h3>LAND DETAILS</h3>

<div id={styles.fields}>     
    <h4> GTAED ENCLAVES/OPEN COMMUNITY :</h4>
    <input type="text" id={styles.dotted} name="LandDetails" onChange={(e)=> setLandDetails(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>PLOT NUMBER :</h4>
    <input type="text" id={styles.dotted} name="PlotNumber" onChange={(e)=> setPlotNumber(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>PAYMENT OPTION :</h4>
    <input type="text" id={styles.dotted} name="PaymentOption" onChange={(e)=> setPaymentOption(e.target.value)}></input>
    
</div>

   </div>

   <div id={styles.pdetails}>
<h3>LAND USE AND DEVELOPMENT</h3>


<div id={styles.fields}>
    <h4>   COMMERCIAL /  RESIDENTIAL:</h4>
    <input type="text" id={styles.dotted} name="LandDevelopment" onChange={(e)=> setLandDevelopment(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>TIME AND PLANNED DEVELOPMENT :</h4>
    <input type="text" id={styles.dotted} name="TimeAndPlannedDevelopment" onChange={(e)=> setTimeAndPlannedDevelopment(e.target.value)}></input>
    
</div>

   </div>
   <div id={styles.pdetails}>
<h3>NEXT OF KIN</h3>
<div id={styles.fields}>
    <h4>Name :</h4>
    <input type="text" id={styles.dotted} name="KinName" onChange={(e)=> setKinName(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>Address :</h4>
    <input type="text" id={styles.dotted}  name="KinAddress" onChange={(e)=> setKinAddress(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>Phone :</h4>
    <input type="text" id={styles.dotted}  name="KinPhone" onChange={(e)=> setKinPhone(e.target.value)}></input>
    
</div>
<div id={styles.fields}>
    <h4>Email :</h4>
    <input type="text" id={styles.dotted} name="KinEmail" onChange={(e)=>setKinEmail(e.target.value)}></input>
    
</div>

   </div>
 
   <div id={styles.pdetails}>
<h3>FOR OFFCE USE ONLY</h3>
<div id={styles.fields1}>
<div id={styles.fields2}>
    <h4>Date :</h4>
    <input type="text" id={styles.dotted} name="Date" onChange={(e)=> setDate(e.target.value)}></input>
    
</div>

<div id={styles.fields}>
    <h4>Client Servise Personal :</h4>
    <input type="text" id={styles.dotted}  name="ClientServicePerposal" onChange={(e)=> setClientServicePerposal(e.target.value)}></input>
    
</div>
</div>
<div id={styles.fields}>
    <h4>Remarks :</h4>
    <input type="text" id={styles.dotted} name="Remarks" onChange={(e)=> setRemarks(e.target.value)}></input>
    
</div>
<div id={styles.btn}>
<button onClick={sender}>send</button>
</div>
   </div>
   </div>
   </div>
  
   
   </>
  )
}

export default Registration