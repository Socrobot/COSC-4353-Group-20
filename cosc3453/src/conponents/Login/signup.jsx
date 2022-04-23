import React, { useContext, useState } from "react";
import useDebounce from "../Hooks/useDebounce";
import { BC, FC, I, ML, SB, BL, EM } from "./common";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContext";
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';


// fucntion sent to index.jsx
export function Signup(props) {

    // controls routing
    const navigate = useNavigate();

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
        if (password.length <= 100 && password.length >= 8){
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
                //alert("Pass");
                accountValidation()
            }
            else {
                alert("Fail");
            }
        };

    const signinValidation = async() => {
        try {
            const post = { username: email, password: password }
            const response = await axios.post("auth/", post);
            const text = JSON.stringify(response?.status);
            const token = JSON.stringify(response?.data.token);

            if (text.includes('200')){
                sessionStorage.setItem("token", token);
            }

        } catch (error) {
            if (error.response.status === 400) {
                alert("email or password incorrect...")
            }
            else {
                alert("Error During Proccessing")
            }
        }
    }

    const accountValidation = async() => {
        try {
            const post = { username: email, password: password }
            const response = await axios.post("api/login_signup/", post);
            const text = JSON.stringify(response?.status);
            const token = JSON.stringify(response?.data.token);

            if (text.includes('201')){
                //alert("Accepted Info");
                sessionStorage.setItem("username", email);
                await signinValidation();
                navigate("/UserData");
            }

        } catch (error) {
            if (error.response.status === 400) {
                alert("Email is already used... Please try a diffrent email")
            }
            else {
                alert("Error During Proccessing")
            }
        }
    }

    // html for signup page
    return <BC>
        <FC>
            <I type="email" placeholder="Email" autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} required />
            <EM>{emailCheck}</EM>
            <I type="password" placeholder="Password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} required/>
            <EM>{passwordCheck}</EM>
            <I type="password" name="passwordValidation" autoComplete="off" placeholder="Confirm Password" value={passwordValidation} onChange={e => setPasswordValidation(e.target.value)} required/>
            <EM>{passwordValidationCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => (mainInputValidation(e))}>Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}