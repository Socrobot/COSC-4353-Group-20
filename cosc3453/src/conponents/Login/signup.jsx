import React, { useContext, useState } from "react";
import useDebounce from "../Hooks/useDebounce";
import { BC, FC, I, ML, SB, BL, EM } from "./common";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContext";
import axios from "axios";


// fucntion sent to index.jsx
export function Signup(props) {

    // useStates for password and email checks
    const { toSignin } = useContext(AccountContext);
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [emailpf, setEmailpf] = useState("");
    useDebounce(() => emailInputValidation(), 1000, [email]);

    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordpf, setPasswordpf] = useState("");
    useDebounce(() => passwordInputValidation(), 1000, [password]);
    
    
    const [passwordValidation, setPasswordValidation] = useState("");
    const [passwordValidationCheck, setPasswordValidationCheck] = useState("");
    const [passwordpf2, setPasswordpf2] = useState("");
    useDebounce(() => passwordMatchingInputValidation(), 1000, [passwordValidation]);

    const client = axios.create({
        baseURL: "http://127.0.0.1:8000/api/"
    });

    // email validation
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

    // password validation
    const passwordInputValidation = () => {
        if (password.length < 100 && password.length > 8){
            setPasswordCheck("");
            setPasswordpf("Pass");
        }
        else {
            setPasswordCheck("Password must be between a lenght of 8 and 100...")
            setPasswordpf("Fail");
        }
    };

    // matching password check
    const passwordMatchingInputValidation = () => {
        if (passwordValidation === password){
            setPasswordValidationCheck("");
            setPasswordpf2("Pass");
        }
        else{
            setPasswordValidationCheck("The passwords do not match");
            setPasswordpf2("Fail");
        }
    };

    // validation function for pass to database check
    
    const mainInputValidation = (e) => {
            e.preventDefault();
            if (emailpf === "Pass" && passwordpf === "Pass" && passwordpf2 === "Pass"){
                alert("Pass");
                accountValidation()
            }
            else {
                alert("Fail");
            }
        };

     // async function for datebase validation. 
    async function accountValidation() {

        const post = { email_signup: email, password_signup: password }
        const response = await client.post("signup/", post);
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

    // html for signup page
    return <BC>
        <FC>
            <I type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <EM>{emailCheck}</EM>
            <I type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <EM>{passwordCheck}</EM>
            <I type="password" name="passwordValidation" placeholder="Confirm Password" value={passwordValidation} onChange={e => setPasswordValidation(e.target.value)} />
            <EM>{passwordValidationCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => (mainInputValidation(e))}>Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}