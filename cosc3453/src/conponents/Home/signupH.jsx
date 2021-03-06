import React, { useContext } from "react";
import { DI, DP, BC, FC, I, ML, SB, BL, EM } from "./commonH";
import { Marginer } from "../marginerTool";
import { useNavigate } from 'react-router-dom';
import { AccountContext } from "./accountContextH";
import useDebounce from "../Hooks/useDebounce";
import {useState, useEffect} from "react";
import axios from "axios";

import querystring from "querystring";


export function Signup(props) {


 


  const { toSignin } = useContext(AccountContext)
  const navigate = useNavigate();

  const [values, setValues] = useState({
   // gallons: "",
    //shipAddress: "",
    //deliveryDate:"",
    sugPrice: "",
    totAmount: "",
  });

  const [gallons, setGallon] = useState("");
  const [shipAddress, setAdd] = useState('');
  const [data, setAdd2] = useState('');
  const [city, setCity] = useState("");
  const [repeat, setRepeat] = useState("");

  const [deliveryDate, setDelivery] = useState("");
  const [gallonCheck, setGalCheck] = useState("");
  const [deliveryCheck, setDateCheck] = useState("");
  const [buttonCheck, setButtonCheck]= useState("");


  const [num1, setNum1]= useState("");
  const [num2, setNum2]= useState("");
  const [num3, setNum3]= useState("");
  const [num4, setNum4]= useState("");







  const [galval, setGalval] = useState("");
  const [dateval, setDateval] = useState("");
  const [buttonval, setButtonval] = useState("");
  useDebounce(() => gallonInputValidation(), 1000, [gallons]);
  useDebounce(() => dateInputValidation(), 1000, [deliveryDate]);
  useDebounce(() => ButtonValidation(), 1000, []);
  //useDebounce(() => calculateSug(), 1000, [n]);
  //useDebounce(() => calculateTotal(), 1000, [total]);

  useEffect(() => {
    const fetchData = async () => {
       const data = await citycomp();
       componentMount();
       setAdd2(data);
    }
  
    fetchData();
  }, []);


  //useDebounce(() => ButtonValidation(), 1000, [n]);

  async function citycomp()
  {
    var username = sessionStorage.getItem('username')
  let query = querystring.stringify({ username:  username });
  //const get = { gallons: gallons, delivery: deliveryDate, sugPrice: n, totalPrice: total}
  const response = await client.get("userdata/?" + query );

  const text = JSON.stringify(response?.data);
  const myArr = JSON.parse(text);

 // const len = myArr.length to get the amount of entries
  console.log(myArr[0].Addressfield);
 //setCity(myArr[0].Statefield)

  return ((myArr[0].Addressfield))

  }

  async function statecomp()
  {
    var username = sessionStorage.getItem('username')
  let query = querystring.stringify({ username:  username });
  //const get = { gallons: gallons, delivery: deliveryDate, sugPrice: n, totalPrice: total}
  const response = await client.get("userdata/?" + query );

  const text = JSON.stringify(response?.data);
  const myArr = JSON.parse(text);

 // const len = myArr.length to get the amount of entries
  console.log(myArr[0].Addressfield);
 //setCity(myArr[0].Statefield)

  return ((myArr[0].Addressfield))

  }


  async function componentMount() 
{

  



 // gettiong dstreet address and state location
  var username = sessionStorage.getItem('username')
  let query = querystring.stringify({ username:  username });
  //const get = { gallons: gallons, delivery: deliveryDate, sugPrice: n, totalPrice: total}
  const response = await client.get("userdata/?" + query );

  const text = JSON.stringify(response?.data);
  const myArr = JSON.parse(text);

 // const len = myArr.length to get the amount of entries
  //console.log(myArr[0].Addressfield);
  setCity(myArr[0].Statefield)

  setAdd(myArr[0].Addressfield)



// getting fuel history
  var username = sessionStorage.getItem('username')
  let query2= querystring.stringify({ username: username });
  //const get = { gallons: gallons, delivery: deliveryDate, sugPrice: n, totalPrice: total}
  const response2 = await client.get("fueldata/?" + query2 );

  const text2 = JSON.stringify(response2?.data);
  const myArr2 = JSON.parse(text2);

 // const len = myArr.length to get the amount of entries
  //console.log(myArr2[0].Statefield);
  console.log(myArr2.length)
  setRepeat(myArr2.length)

  
  
  
  

}

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
  
      setTotal(gallons * n);

  }

  function calculateSug()
  {
    var loc;
    var hist;
    var g;
    if(city == 'TX')
    {
      loc = 0.02;
    }
    else if (city != 'TX' )
    {
      loc= .04;
    }
    if(repeat == 0)
    {
      hist =0;
    }
    else if(repeat > 0)
    {
      hist = 0.01;
    }
    if(gallons > 1000)
    {
      g= 0.02;
    }
    else if( gallons <= 1000)
    {
      g =0.03;
    }

      console.log(hist)
      var price = ((loc- hist + g+ .1) * 1.50)+1.50;
      setN(price);
      var tot = gallons *price;
      console.log(tot)
      return setTotal(tot);
      
      


   // setTotal(gallons * n);

    
  }

  function calc()
  {
  
    calculateSug();
    
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


 // gallon validation (Will include database checks further down the road)
 const gallonInputValidation = (e) => {
     if (gallons >= 1) {
         setGalCheck("");
         setGalval("Pass");
     }
     else{
         setGalCheck("Please select number of gallons");
         setGalval("Fail");
     }
 };

 const ButtonValidation = (e) => {
   console.log(total)

  if (total >= 1) {
      setButtonCheck("");
      setButtonval("Pass");
  }
  else{
      setButtonCheck("Please calculate price(must add gallons first");
      setButtonval("Fail");
  }
};

 // delivery validation (Will include database checks further down the road)
 const dateInputValidation = (e) => {
     if (deliveryDate.includes("-", 2)){
         setDateCheck("");
         setDateval("Pass");
        
     }
     else {
         setDateCheck("Please enter date")
         setDateval("Fail");
     }
     console.log(deliveryDate)
 };

 function sprc()
 {
  if (gallons < 100) {
    setN(30);
}
else{
    setN(4444);
}
};


const createItem = () => {
  const item = { gallons: "", deliveryDate: "", sugPrice: "", totAmount: "" };

  this.setState({ activeItem: item, modal: !this.state.modal });
};


const handleSubmit2 = (item) => {
  this.toggle();

  if (item.id) {
    axios
      .put(`/api/fueldata/${item.id}/`, item)
      .then((res) => this.refreshList());
    return;
  }
  axios
    .post("/api/fueldata/", item)
    .then((res) => this.refreshList());
};


const mainInputValidation = (e) => {
  e.preventDefault();
  if (galval == "Pass" && dateval == "Pass" && total != 0){
      //alert("Succesfully Sent")

      //createItem();
      //handleSubmit2();
      accountValidation2();
      
      

      
  }
  else {
    console.log("gal" ,galval);
    console.log("date" ,dateval);
    console.log("button" ,buttonval);

    
      alert("Unsuccesful");
  }
};

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
     // async function for datebase validation. 
      async function accountValidation2() {

      try{
      //sessionStorage.setItem('username', 'testing@gmail.com')
      var username = sessionStorage.getItem('username')
      const post = { username: username, gallons: gallons, delivery: deliveryDate, sugPrice: n, totalPrice: total}
      const response = await client.post("fueldata/", post);
    
      const text = JSON.stringify(response);

      if (text.includes('201')){
          alert("Order Sent");
          
      }
    }
      catch(error){
        if(error.response.status == 400){
          alert("Unaccepted Info")
      }
      else {
          alert("Error During Proccessing")
          alert((error.response.status))
      }
  };





     }

    return <BC>
        <FC>
        
            <I type="number"
            min="1"
            max="100,000"
            values ={values.gallons}
            onChange={e => {
            //setN(25);
           // setTotal(120);  
            
            setGallon(e.target.value)}}
            

            
          
            
            placeholder="Enter number of gallons" />
            <EM>{gallonCheck}</EM>
            
            <DI>{data}</DI> 
            <I type="date" onChange={e => setDelivery(e.target.value)}/>
            <EM>{deliveryCheck}</EM>
            <DI>Suggested Price: ${n}
          
            </DI> 
            <DI>Total Amount Due: ${total}</DI> 

          
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="button" 
        onChange={e => {
          setButtonCheck(e.target.value);
          setButtonval(e.target.value);
        }}
        
        
        onClick={() =>{
          //componentMount();
            
            calc();
            //calculateTotal();
            }}>Get Quote</SB>
            <EM>{buttonCheck}</EM>
    <BC></BC>
      
        <SB onclass="form-field" 
        
        onClick={e => {
          gallonInputValidation(e);
          dateInputValidation(e);
         ButtonValidation(e);
          mainInputValidation(e)}}

          type="submit">Submit</SB>
        <ML href="#">
            Past Orders <BL href="#" onClick={toSignin}>View Shipment History </BL>
        </ML>
    </BC>
}