import React, { useContext } from "react";
import { BC, FC, I, ML, SB, BL } from "./commonH";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextH";

export function Login(props) {

    const { toSignup } = useContext(AccountContext)

    return <BC>
        <FC>
            <I type="email" placeholder="Email" />
            <I type="password" placeholder="Password" />
        </FC>
        <Marginer direction="vertical" margin={10} />
        <ML href="#">Forget your password?</ML>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit">Signin</SB>
        <ML href="#">
            Don't have an accoun?{" "} <BL href="#" onClick={toSignup}>Signup</BL>
        </ML>
    </BC>
}