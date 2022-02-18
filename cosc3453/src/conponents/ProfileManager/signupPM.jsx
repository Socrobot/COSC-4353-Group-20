import React, { useContext, useState } from "react";
import { BC, FC, I, ML, SB, BL,EM,J,K } from "./commonPM";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextPM";

export function Signup(props) {

    const { toSignin } = useContext(AccountContext)
    const [Name, setName] = useState("");
    const [NameCheck, setNameCheck] = useState("");
    const [Address, setAddress] = useState("");
    const [AddressCheck, setAddressCheck] = useState("");
    const [Address2, setAddress2] = useState("");
    const [AddressCheck2, setAddress2Check] = useState("");
    const [City, setCity] = useState("");
    const [CityCheck, setCityCheck] = useState("");
    const [State, setS] = useState("");
    const [StateCheck, setStateCheck] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [ZipCheck, setZipCheck] = useState("");

    const NameInputValidation = (e) => {
        if (Name.length === 0){
            setNameCheck("You can not leave this blank")
        }
        else if (Name.length < 50 && Name.length > 5){
            setNameCheck("");
        }
        else {
            setNameCheck("Full Name must be between a lenght of 5 and 50...")
        }
    };

    const AddressInputValidation = (e) => {
        if (Address.length === 0){
            setAddressCheck("You can not leave this blank")
        }
        else if (Address.length < 100 && Address.length > 15){
            setAddressCheck("");
        }
        else {
            setAddressCheck("Address must be between a lenght of 15 and 100...")
        }
    };

    const Address2InputValidation = (e) => {
        if (Address2.length < 100){
            setAddress2Check("");
        }
        else {
            setAddress2Check("Address must be less then 100 characters...")
        }
    };

    const CityInputValidation = (e) => {
        if (City.length === 0){
            setCityCheck("You can not leave this blank")
        }
        else if (City.length < 100 && City.length > 5){
            setCityCheck("");
        }
        else {
            setCityCheck("City name must be between a lenght of 5 and 50...")
        }
    };

    const StateInputValidation = (e) => {
        if (State.length === 2){
            setStateCheck("");
        }
        else {
            setStateCheck("Select a State")
        }
    };

    const zipInputValidation = (e) => {
        if (ZipCode.length === 0){
            setZipCheck("You can not leave this blank")
        }
        else if (ZipCode.length < 10 && Name.length > 4){
            setZipCheck("");
        }
        else {
            setZipCheck("Zipcode must be between a lenght of 5 and 9...")
        }
    };

    return <BC>
        <FC>
            <I type="Name" placeholder="Full Name" value={Name} onChange={e => setName(e.target.value)}/>
            <EM>{NameCheck}</EM>
            <I type="Address" placeholder="Address 1" value={Address} onChange={e => setAddress(e.target.value)} />
            <EM>{AddressCheck}</EM>
            <I type="Address2" placeholder="Address 2" value={Address2} onChange={e => setAddress2(e.target.value)} />
            <EM>{AddressCheck2}</EM>
            <I type="City" placeholder="City" value={City} onChange={e => setCity(e.target.value)} />
            <EM>{CityCheck}</EM>
            <J name="state" onChange={e => setS(e.target.value)}>
                <K value="State">Select State</K>
                <K value="AL">AL</K>
                <K value="AK">AK</K>
                <K value="AZ">AZ</K>
                <K value="AR">AR</K>
                <K value="CA">CA</K>
                <K value="CO">CO</K>
                <K value="CT">CT</K>
                <K value="DE">DE</K>
                <K value="DC">DC</K>
                <K value="FL">FL</K>
                <K value="GA">GA</K>
                <K value="HI">HI</K>
                <K value="ID">ID</K>
                <K value="IL">IL</K>
                <K value="IN">IN</K>
                <K value="IA">IA</K>
                <K value="KS">KS</K>
                <K value="KY">KY</K>
                <K value="LA">LA</K>
                <K value="ME">ME</K>
                <K value="MD">MD</K>
                <K value="MA">MA</K>
                <K value="MI">MI</K>
                <K value="MN">MN</K>
                <K value="MS">MS</K>
                <K value="MO">MO</K>
                <K value="MT">MT</K>
                <K value="NE">NE</K>
                <K value="NV">NV</K>
                <K value="NH">NH</K>
                <K value="NJ">NJ</K>
                <K value="NM">NM</K>
                <K value="NY">NY</K>
                <K value="NC">NC</K>
                <K value="ND">ND</K>
                <K value="OH">OH</K>
                <K value="OK">OK</K>
                <K value="OR">OR</K>
                <K value="PA">PA</K>
                <K value="RI">RI</K>
                <K value="SC">SC</K>
                <K value="SD">SD</K>
                <K value="TN">TN</K>
                <K value="TX">TX</K>
                <K value="UT">UT</K>
                <K value="VT">VT</K>
                <K value="VA">VA</K>
                <K value="WA">WA</K>
                <K value="WV">WV</K>
                <K value="WI">WI</K>
                <K value="WY">WY</K>
            </J>
            <EM>{StateCheck}</EM>
            <I type="ZipCode" placeholder="ZipCode" value={ZipCode} onChange={e => setZipCode(e.target.value)}/>
            <EM>{ZipCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => (NameInputValidation(e),AddressInputValidation(e),Address2InputValidation(e),CityInputValidation(e),
            StateInputValidation(e),zipInputValidation(e))}>Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}

