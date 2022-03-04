import React, {useState} from "react";
import styled from "styled-components";
import { Login } from "./loginH";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContextH";
import { Signup } from "./signupH";



import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
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


const BC = styled.div`
width: 280px;
min-height: 550px;
display: flex;
flex-direction: column;
border-radius: 19px;
background-color: #999999;
box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
position: relative;
overflow: hidden;
`;

const TC = styled.div`
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const BD = styled(motion.div)`
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: rgb(9,255,0);
background: linear-gradient(
    58deg,
    rgba(9,255,0,1) 20%,
    rgba(6,164,0,1) 100%
    ); 
`;

const HC = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const HT = styled.h2`
font-size: 30px;
font-weight: 600;
line-height: 1.24;
color: #fff;
z-index: 10;
margin: 0;
`;

const ST = styled.h5`
color: #fff;
font-weight: 500;
font-size: 11px;
z-index: 10;
margin: 0;
margin-top: 7px;
`;

const IC = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1.8em;
`;

const BDV = {
expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
},
collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
},
};

const ET = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function ABH(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");

    const playExpandedAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, ET.duration * 1000 - 1500);
    };

    const toSignup = () => {
        playExpandedAnimation();
        setTimeout(() => {
            setActive('signup');
        }, 400);
    };

    const toSignin = () => {
        playExpandedAnimation();
        setTimeout(() => {
            setActive('signin');
        }, 400);
    };
    
    const StyledTable = styled.table`
    caption-side: top;
    border: none;
    border-collapse: collapse;
    /* border-collapse: separate; */
    /* border-spacing: 5px 10px; */
  
    caption-side: bottom;
    /* empty-cell: show | hide;  */
    /* empty-cell is a property of table or the cells themselves */
  
    /* vertical-align: baseline | sub | super | text-top | 
                  text-bottom | middle | top | bottom | 
                  <percentage> | <length> */
  
    /* tbody {
      vertical-align: top;
    }              */
    td,
    th {
      border: none;
    }
    /* td,
    th {
      border: 1px solid;
    } */
  
    td {
      padding: 5px 10px;
    }
  
    tbody tr {
      :nth-of-type(odd) {
        background-color: #efefef;
      }
      :hover {
        background-color: lightpink;
      }
    }
    thead > tr {
      background-color: #c2c2c2;
    }
    caption {
      font-size: 0.9em;
      padding: 5px;
      font-weight: bold;
    }
  `;


    
    const contextValue = {toSignup, toSignin};

    return (
        <AccountContext.Provider value = {contextValue}>
            <BC>
                <TC>
                    <BD initial={false} 
                    animate={isExpanded ? "expanded" : "collapsed"} 
                    variants={BDV}
                    transition = {ET} />
                    {active === "signin" && <HC>
                        <HT>Shipping</HT>
                        <HT>History</HT>
                        <ST>Records of your shipping history.</ST>
                    </HC>}
                    {active === "signup" && <HC>
                        <HT>Fuel</HT>
                        <HT>Quote Form</HT>
                        <ST>Please fill out form to continue</ST>
                    </HC>}
                </TC>
                <IC>
                    {active === "signin"  && <Login />}
                    {active === "signup" && <Signup />}
                </IC>
            </BC>

        </AccountContext.Provider>
        
    )
}