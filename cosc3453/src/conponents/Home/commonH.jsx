//import styled from "styled-components";
import styled, { createGlobalStyle , css } from "styled-components";
//import DatePicker from "react-datepicker";

//import "react-datepicker/dist/react-datepicker.css";





export const GlobalStyle = createGlobalStyle`
  table {
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th {
    text-align: left;
  }
  }
`;

export const CenterV = css`
  display: flex;
  align-items: center;
`;

export const CenterH = css`
  display: flex;
  justify-content: center;
`;

export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.V ? CenterV : "")}
  ${props => (props.H ? CenterH : "")}
`;
export const BC = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const FC = styled.form`
width: 100%;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;


export const DI = styled.a`
width: 100%;
height: 42px;
background: rgb(169,169,169);
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
padding-top: 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
    color: rgba(255, 255, 255, 1);
}
&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgb(9,255,0);
}add
`;


export const Stable = styled.table`
width: 90%;
height:300px;
display: flex;
flex-direction: column;

box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
overflow: auto;
`; 

export const custTh = styled.th`
position: -webkit-sticky; // this is for all Safari (Desktop & iOS), not for Chrome
position: sticky;
top: 0;
z-index: 1; // any positive value, layer order is global
background: #fff; // any bg-color to overlap
`;

export const Sthead = styled.thead`
width: 100%;
display: inline-box;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const Sbody = styled.body`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;


export const ML = styled.a`
font-size: 11px;
color: rgba(255, 255, 255, 0.8);
font-weight: 500;
text-decoration: none;
`;

export const BL = styled.a`
font-size: 11px;
color: rgb(9,255,0);
font-weight: 500;
text-decoration: none;
margin: 0 4px;
`;

export const I = styled.input`
width: 100%;
height: 42px;
background: rgb(169,169,169);
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
    color: rgba(255, 255, 255, 1);
}
&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgb(9,255,0);
}
`;

export const EM = styled.a`
color: #ff0000;
font-weight: 500;
font-size: 8px;
z-index: 10;
margin: 0;
`;


export const Str = styled.tr`
width: 100%;
height: 42px;
background: rgb(169,169,169);
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
    color: rgba(255, 255, 255, 1);
}
&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgb(9,255,0);
}
`;


export const Std = styled.td`

height: 42px;
background: rgb(169,169,169);
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
    color: rgba(255, 255, 255, 1);
}
&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgb(9,255,0);
}
`;


export const Sth = styled.th`
width: 100%;
height: 42px;
background: rgb(169,169,169);
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
    color: rgba(255, 255, 255, 1);
}
&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgb(9,255,0);
}
`;


export const SB = styled.button`
width: 100%;
padding: 6px 40%;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(9,255,0);
background: linear-gradient(
    58deg,
    rgba(9,255,0,1) 20%,
    rgba(6,164,0,1) 100%
    ); 
&:hover {
    filter: brightness(1.03);
}
`;