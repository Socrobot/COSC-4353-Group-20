import React, { useContext } from "react";
import { BC, FC, I, ML, SB, BL } from "./commonPM";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextPM";

export function Signup(props) {

    const { toSignin } = useContext(AccountContext)

    return <BC>
        <FC>
            <I type="text" placeholder="Full Name" />
            <I type="text" placeholder="Company Name" />
            <I type="email" placeholder="Email" />
            <I type="password" placeholder="Password" />
            <I type="password" placeholder="Confirm Password" />
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit">Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}