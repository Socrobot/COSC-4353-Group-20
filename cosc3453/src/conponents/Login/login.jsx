import React, { useContext, useState } from "react";
import { BC, FC, I, ML, SB, BL, EM } from "./common";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import useDebounce from "../Hooks/useDebounce";
import AuthContext from "../../context/AuthProvider";


// fucntion sent to index.jsx
export function Login(props) {

    // controls routing
    const navigate = useNavigate();

    // useStates for password and email checks 
    const { toSignup } = useContext(AccountContext)
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [emailpf, setEmailpf] = useState("");
    useDebounce(() => emailInputValidation(), 1000, [email]);

    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordpf, setPasswordpf] = useState("");
    useDebounce(() => passwordInputValidation(), 1000, [password]);

    const { setAuth } = useContext(AuthContext);

    // email validation (Will include database checks further down the road)
    const emailInputValidation = () => {

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
    const passwordInputValidation = () => {
        if (password.length <= 100 && password.length >= 8){
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
            accountValidation()
        }
        else {
            alert("Please Check your email and password...");
        }

    };

    // async function for datebase validation. 
    async function accountValidation() {

        const post = { username: email, password: password }
        const response = await axios.post("auth/", post);
        const text = JSON.stringify(response?.data.token);
        console.log(text);
        if (text.length !== 0){
            alert("Accepted Info");
            setAuth({email, password, text});
            navigate("/Home");
        }
        else {
            alert("Unaccepted Info")
        }
    };

    // html for signin page
    return <BC>
        <FC>
            <I type="email" placeholder="Email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} required/>
            <EM>{emailCheck}</EM>
            <I type="password" placeholder="Password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} required/>
            <EM>{passwordCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => mainInputValidation(e)}>Signin</SB>
        <ML href="#">
            Don't have an accoun?{" "} <BL href="#" onClick={toSignup}>Signup</BL>
        </ML>
    </BC>
}