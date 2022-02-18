import React, { useContext, useState } from "react";
import { BC, FC, I, ML, SB, BL, EM } from "./common";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContext";


// fucntion sent to index.jsx
export function Login(props) {

    // useStates for password and email checks 
    const { toSignup } = useContext(AccountContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    // email validation (Will include database checks further down the road)
    const emailInputValidation = (e) => {
        if (email.includes("@", 1) && email.includes(".", 1)) {
            setEmailCheck("");
        }
        else{
            setEmailCheck("Your email must contain a '@' and '.' in order to be valid...");
        }
    };

    // password validation (Will include database checks further down the road)
    const passwordInputValidation = (e) => {
        if (password.length < 100 && password.length > 8){
            setPasswordCheck("");
        }
        else {
            setPasswordCheck("Password must be between a lenght of 8 and 100...")
        }
    };

    // html for signin page
    return <BC>
        <FC>
            <I type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <EM>{emailCheck}</EM>
            <I type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <EM>{passwordCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin={10} />
        <ML href="#">Forget your password?</ML>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => (emailInputValidation(e), passwordInputValidation(e))}>Signin</SB>
        <ML href="#">
            Don't have an accoun?{" "} <BL href="#" onClick={toSignup}>Signup</BL>
        </ML>
    </BC>
}