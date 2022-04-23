import React, { useContext } from "react";
import { custTh, GlobalStyle, Std, Sthead, Sbody, Str, Sth, BC, FC, I, ML, SB, BL, EM, Stable } from "./commonH";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextH";

import axios from "axios";
import { Component } from "react";
import querystring from "querystring";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";




export default class FetchRandomUser extends React.Component{
  state = {
    loading : true
  }
};





export function Login(props) {
  const navigate = useNavigate();
    const { toSignup } = useContext(AccountContext)
    const [dataCheck, setDataCheck]= useState([]);

    const client = axios.create({
      baseURL: "http://127.0.0.1:8000/api/"
    });

    useEffect(() => {
      const fetchData = async () => {
         const data = await loadin();
         const table = await componentMount();

      }
    
      fetchData();
    }, []);

   async function clc()
    {
      
        sessionStorage.clear();
        var username = sessionStorage.getItem("username");
        console.log(username);
        loadin();
        
        
        //Navigate("/Login_Signup");
    }

    function editInfo() { 
      navigate("/UserData");
    }

    function loadin() {
      var username = sessionStorage.getItem("username");
  
      if (username === null){
        navigate("/Login_Signup");
      }
      else 
      {
      console.log("Season Storage Used");
      }
    }


    async function componentMount() 
    {

      



      //sessionStorage.setItem('username', 'masen2')
      var username = sessionStorage.getItem('username')
      let query = querystring.stringify({ username: username });
      //const get = { gallons: gallons, delivery: deliveryDate, sugPrice: n, totalPrice: total}
      const response = await client.get("fueldata/?" + query );
    
      const text = JSON.stringify(response?.data);
      const myArr = JSON.parse(text);
     // const len = myArr.length to get the amount of entries
      console.log(username);
      setDataCheck(myArr)
      
      
    
    }
  
  

const MyTableCompoent = () => (

  <table >
      <thead id="header-fixed">

 
    <tr>

      <th>Shipping Date</th>
      <th>Gallons Requested</th>
      <th>Price</th>
      <th>Total Amount</th>
    </tr>
    </thead>

    {Object.values(dataCheck).map((value, index) => {
      return (
    <tbody>
        <tr key={index}>
          <td>{value.gallons}</td>
           <td>{value.delivery}</td>
           <td>{value.sugPrice}</td>
           <td>{value.totalPrice}</td>



        </tr>

        </tbody>
      );
    })}
  </table>
);




  



    return <BC>
      <div> 
    
      </div>
        

            <Stable>
      <GlobalStyle />
    
      <MyTableCompoent />
    </Stable>
    <BC></BC>    
    <SB onclass="form-field"  onClick={() =>{
      editInfo()

          }}

          type="submit">Edit UserInfo</SB>
    <BC></BC>
    <SB onclass="form-field"  onClick={() =>{
      clc();

          }}

          type="submit">Logout</SB>

    



        <Marginer direction="vertical" margin={10} />
        
        
        <ML href="#">
            Want to place an order?{" "} <BL href="#" onClick={toSignup}>Request Fuel</BL>
        </ML>

    </BC>
}