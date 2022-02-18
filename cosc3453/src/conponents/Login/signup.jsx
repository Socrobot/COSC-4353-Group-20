import React, { useContext, useState } from "react";
import { BC, FC, I, ML, SB, BL, EM } from "./common";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContext";

// fucntion sent to index.jsx
export function Signup(props) {

    // useStates for password and email checks
    const { toSignin } = useContext(AccountContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordValidationCheck, setPasswordValidationCheck] = useState("")

    // email validation
    const emailInputValidation = (e) => {
        if (email.includes("@", 1) && email.includes(".", 1)) {
            setEmailCheck("");
        }
        else{
            setEmailCheck("Your email must contain a '@' and '.' in order to be valid...");
        }
    };

    // password validation
    const passwordInputValidation = (e) => {
        if (password.length < 100 && password.length > 8){
            setPasswordCheck("");
        }
        else {
            setPasswordCheck("Password must be between a lenght of 8 and 100...")
        }
    };

    // matching password check
    const passwordMatchingInputValidation = (e) => {
        if (password == passwordValidation){
            setPasswordValidationCheck("");
        }
        else{
            setPasswordValidationCheck("The passwords do not match");
        }
    };

    // html for signup page
    return <BC>
        <FC>
            <I type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <EM>{emailCheck}</EM>
            <I type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <EM>{passwordCheck}</EM>
            <I type="password" placeholder="Confirm Password" value={passwordValidation} onChange={e => setPasswordValidation(e.target.value)} />
            <EM>{passwordValidationCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => (emailInputValidation(e), passwordInputValidation(e), passwordMatchingInputValidation(e))}>Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}