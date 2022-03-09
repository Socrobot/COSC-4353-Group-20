import React, { useContext } from "react";
import { custTh, GlobalStyle, Std, Sthead, Sbody, Str, Sth, BC, FC, I, ML, SB, BL, EM, Stable } from "./commonH";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextH";
import {useState} from "react";



export function Login(props) {

    const { toSignup } = useContext(AccountContext)
    const [users, setUsers] = useState([
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
        { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
        { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
        { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
        { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
    ]);

    const someArray = [1,2,3,4,5,6,7,8,9];
const MyTableCompoent = () => (
  <table >
      <thead id="header-fixed">
    <tr>
      <th>ID</th>
      <th>Shipping Date</th>
      <th>Gallons Requested</th>
      <th>Price</th>
      <th>Total Amount</th>
    </tr>
    </thead>

    {Object.values(someArray).map((value, index) => {
      return (
    <tbody>
        <tr key={index}>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
          <td>{value}</td>
        </tr>
        </tbody>
      );
    })}
  </table>
);




    const data = React.useMemo(() =>
 [
 {
 name: 'Kim Parrish',
 address: '4420 Valley Street, Garnerville, NY 10923',
 date: '07/11/2020',
 order: '87349585892118',
 },
 {
 name: 'Michele Castillo',
 address: '637 Kyle Street, Fullerton, NE 68638',
 date: '07/11/2020',
 order: '58418278790810',
 },
 {
 name: 'Eric Ferris',
 address: '906 Hart Country Lane, Toccoa, GA 30577',
 date: '07/10/2020',
 order: '81534454080477',
 },
 {
 name: 'Gloria Noble',
 address: '2403 Edgewood Avenue, Fresno, CA 93721',
 date: '07/09/2020',
 order: '20452221703743',
 },
 {
 name: 'Darren Daniels',
 address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
 date: '07/07/2020',
 order: '22906126785176',
 },
 {
 name: 'Ted McDonald',
 address: '796 Bryan Avenue, Minneapolis, MN 55406',
 date: '07/07/2020',
 order: '87574505851064',
 },
 ],
 []
)



    return <BC>
            <Stable>
      <GlobalStyle />
    
      <MyTableCompoent />
    </Stable>



        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        
        <ML href="#">
            Want to place an order?{" "} <BL href="#" onClick={toSignup}>Request Fuel</BL>
        </ML>
    </BC>
}