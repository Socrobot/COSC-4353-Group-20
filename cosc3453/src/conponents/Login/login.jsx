import React, { useContext, useState } from "react";
import { BC, FC, I, ML, SB, BL, EM } from "./common";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContext";
import axios from "axios";


// fucntion sent to index.jsx
export function Login(props) {

    // useStates for password and email checks 
    const { toSignup } = useContext(AccountContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [emailpf, setEmailpf] = useState("");
    const [passwordpf, setPasswordpf] = useState("");

    const client = axios.create({
        baseURL: "http://127.0.0.1:8000/api/"
    });

    // email validation (Will include database checks further down the road)
    const emailInputValidation = (e) => {
        e.preventDefault();
        setEmail(e.target.value); 

        if (email.includes("@", 1) && email.includes(".", 1)) {
            setEmailCheck("");
            setEmailpf("Pass");
        }
        else{
            setEmailCheck("Your email must contain a '@' and '.' in order to be valid...");
            setEmailpf("Fail");
        }

    };

    // password validation (Will include database checks further down the road)
    const passwordInputValidation = (e) => {
        e.preventDefault();
        setPassword(e.target.value);

        if (password.length < 100 && password.length > 8){
            setPasswordCheck("");
            setPasswordpf("Pass");
        }
        else {
            setPasswordCheck("Password must be between a lenght of 8 and 100...")
            setPasswordpf("Fail");
        }

    };

    // validation function for pass to database check
    
    const mainInputValidation = (e) => {
        e.preventDefault();
        if (emailpf === "Pass" && passwordpf === "Pass"){
            alert("Pass");
            accountValidation()
        }
        else {
            alert("Fail");
        }

    };

    // async function for datebase validation. 
    async function accountValidation() {

        const post = { email_login: email, password_login: password }
        const response = await client.post("login/", post);
        const text = JSON.stringify(response);

        if (text.includes('Success')){
            alert("Accepted Info");
        }
        else if (text.includes('Fail')){
            alert("Unaccepted Info")
        }
        else {
            alert("Error During Proccessing")
        }
    };

    // html for signin page
    return <BC>
        <FC>
            <I type="email" placeholder="Email" value={email} onChange={e => emailInputValidation(e)} />
            <EM>{emailCheck}</EM>
            <I type="password" placeholder="Password" value={password} onChange={e => passwordInputValidation(e)} />
            <EM>{passwordCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin={10} />
        <ML href="#">Forget your password?</ML>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => mainInputValidation(e)}>Signin</SB>
        <ML href="#">
            Don't have an accoun?{" "} <BL href="#" onClick={toSignup}>Signup</BL>
        </ML>
    </BC>
}