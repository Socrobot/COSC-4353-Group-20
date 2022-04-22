import React, {useState} from "react";
import styled from "styled-components";
import { Login } from "./loginPM";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContextPM";
import { Signup } from "./signupPM";

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



export function ABPM(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signup");

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
                        <HT>Welcome</HT>
                        <HT>Back</HT>
                        <ST>Please Signin To Continue</ST>
                    </HC>}
                    {active === "signup" && <HC>
                        <HT>Account</HT>
                        <HT>Information</HT>
                        <ST>Fill in User Information</ST>
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