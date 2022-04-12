import React, { useContext } from "react";
import { custTh, GlobalStyle, Std, Sthead, Sbody, Str, Sth, BC, FC, I, ML, SB, BL, EM, Stable } from "./commonH";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextH";
import {useState} from "react";
import axios from "axios";
import { Component } from "react";
import querystring from "querystring";


export default class FetchRandomUser extends React.Component{
  state = {
    loading : true
  }
};





export function Login(props) {

    const { toSignup } = useContext(AccountContext)
    const [dataCheck, setDataCheck]= useState([]);

    const client = axios.create({
      baseURL: "http://127.0.0.1:8000/api/"
    });
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
      console.log(myArr);
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
    <SB onclass="form-field"  onClick={() =>{
      componentMount();

          }}

          type="submit">Get table</SB>
    



        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        
        <ML href="#">
            Want to place an order?{" "} <BL href="#" onClick={toSignup}>Request Fuel</BL>
        </ML>
    </BC>
}