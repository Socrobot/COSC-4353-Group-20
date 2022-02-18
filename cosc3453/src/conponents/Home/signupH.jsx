import React, { useContext } from "react";
import { DI, DP, BC, FC, I, ML, SB, BL } from "./commonH";
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
    gallons: "",
    shipAddress: "111 address",
    deliveryDate:"",
    sugPrice: "",
    totAmount: "",
  });

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





    return <BC>
        <FC>
        
            <I type="number"
            min="1"
            max="100,000"
            values ={values.gallons}
            onChange = {handleGallonInputChange} 
            placeholder="Enter number of gallons" />
            
            <DI>{"111 User Ln"}</DI> 
            <I type="date" />
            <DI>Suggested Price: ${n}</DI> 
            <DI>Total Amount Due: ${total}</DI> 

           
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="button" onClick={() =>{
            calculateSug();
            calculateTotal();}}>Calculate Price</SB>
        <SB onclass="form-field"  type="submit">Submit</SB>
        <ML href="#">
            Past Orders <BL href="#" onClick={toSignin}>View Shipment History </BL>
        </ML>
    </BC>
}