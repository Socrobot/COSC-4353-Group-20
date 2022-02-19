import React, { useContext } from "react";
import { DI, DP, BC, FC, I, ML, SB, BL, EM } from "./commonH";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextH";
import {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//import DatePicker from 'react-date-picker';
//import "react-datepicker/dist/react-datepicker.css";




export function Signup(props) {

    const { toSignin } = useContext(AccountContext)

    //const [date, setDate] = useState(new Date());

  //const handleCalendarClose = () => console.log("Calendar closed");
  //const handleCalendarOpen = () => console.log("Calendar opened");
  const [values, setValues] = useState({
   // gallons: "",
    shipAddress: "111 address",
    //deliveryDate:"",
    sugPrice: "",
    totAmount: "",
  });

  const [gallons, setGallon] = useState("");
  const [deliveryDate, setDelivery] = useState("");
  const [gallonCheck, setGalCheck] = useState("");
  const [deliveryCheck, setDateCheck] = useState("");


  const [submitted, setSubmitted] = useState(false)

  const handleGallonInputChange = (event) => {
    setValues({...values, gallons: event.target.value})
  }

  const handleAddressInputChange = (event) => {
    setValues({...values, shipAddress: event.target.value})
  }

  const handleDeliveryInputChange = (event) => {
    setValues({...values, deliveryDate: event.target.value})
  }

  const [startDate, setStartDate] = useState(null);

  const [n, setN] = useState(null); // n - the cost value per 1 mile/km
  const [total, setTotal] = useState(null);

  function calculateTotal() {
    if (values.gallons <= 5) {
      //setN(1);
      setTotal(values.gallons * 1);
    } else if (values.gallons <= 15) {
      //setN(2);
      setTotal(values.gallons * 2);
    } else if (values.gallons > 20) {
      //setN(3);
      setTotal((values.gallons) * 3);
    }
    return calculateTotal;
  }

  function calculateSug()
  {
    if(values.gallons == null || values.gallons == 0)
    {
      setN(0)
    }
    else{
      setN(35);
    }
    
    return calculateSug;
  }

const [buttonState, setButtonState] = useState(false)

 const handleSubmit = (event) =>
 {
   event.preventDefault();
   if(values.gallons && startDate && total)
   {
     setValid(true);
   }
   setSubmitted(true)
 }

 const handleClick = (event) =>
 {
   event.preventDefault();
   if(total)
   {
     setValid(true);
   }
   setSubmitted(false)
 }

 const [valid, setValid] = useState(false);


 // email validation (Will include database checks further down the road)
 const gallonInputValidation = (e) => {
     if (gallons >= 1) {
         setGalCheck("");
     }
     else{
         setGalCheck("Please select number of gallons");
     }
 };

 // password validation (Will include database checks further down the road)
 const dateInputValidation = (e) => {
     if (deliveryDate.includes("-", 2)){
         setDateCheck("");
         
     }
     else {
         setDateCheck("Please enter date")
     }
     console.log(deliveryDate)
 };



    return <BC>
        <FC>
        
            <I type="number"
            min="1"
            max="100,000"
            values ={values.gallons}
           
            onChange={e => setGallon(e.target.value)}
            placeholder="Enter number of gallons" />
            <EM>{gallonCheck}</EM>
            
            <DI>{"111 User Ln"}</DI> 
            <I type="date" onChange={e => setDelivery(e.target.value)}/>
            <EM>{deliveryCheck}</EM>
            <DI>Suggested Price: ${n}</DI> 
            <DI>Total Amount Due: ${total}</DI> 

           
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="button" onClick={() =>{
            calculateSug();
            calculateTotal();}}>Calculate Price</SB>
        <SB onclass="form-field" onClick={e => (gallonInputValidation(e), dateInputValidation(e))} type="submit">Submit</SB>
        <ML href="#">
            Past Orders <BL href="#" onClick={toSignin}>View Shipment History </BL>
        </ML>
    </BC>
}