import React, { useContext, useState } from "react";
import { BC, FC, I, ML, SB, BL,EM,J,K } from "./commonPM";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextPM";
import axios from "axios";

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
    const [namepf, setNamepf] = useState("");
    const [addresspf, setAddresspf] = useState("");
    const [address2pf, setAddress2pf] = useState("");
    const [citypf, setCitypf] = useState("");
    const [statepf, setStatepf] = useState("");
    const [zipcodepf, setZipCodepf] = useState("");


    const client = axios.create({
        baseURL: "http://127.0.0.1:8000/api/"
    });

    const NameInputValidation = (e) => {
        e.preventDefault();
        setName(e.target.value)
        if (Name.length === 0){
            setNameCheck("You can not leave this blank")
            setNamepf("Fail")
        }
        else if (Name.length < 50 && Name.length > 5){
            setNameCheck("");
            setNamepf("True")
        }
        else {
            setNameCheck("Full Name must be between a lenght of 5 and 50...")
            setNamepf("Fail")
        }
    };

    const AddressInputValidation = (e) => {
        e.preventDefault();
        setAddress(e.target.value)
        if (Address.length === 0){
            setAddressCheck("You can not leave this blank")
            setAddresspf("Fail")
        }
        else if (Address.length < 100 && Address.length > 15){
            setAddressCheck("");
            setAddresspf("True")
        }
        else {
            setAddressCheck("Address must be between a lenght of 15 and 100...")
            setAddresspf("Fail")
        }
    };

    const Address2InputValidation = (e) => {
        setAddress2(e.target.value)
        if (Address2.length < 100){
            setAddress2Check("");
            setAddress2pf("True")
        }
        else {
            setAddress2Check("Address must be less then 100 characters...")
            setAddress2pf("Fail")
        }
    };

    const CityInputValidation = (e) => {
        e.preventDefault();
        setCity(e.target.value)
        if (City.length === 0){
            setCityCheck("You can not leave this blank")
            setCitypf("Fail")
        }
        else if (City.length < 100 && City.length > 5){
            setCityCheck("");
            setCitypf("True")
        }
        else {
            setCityCheck("City name must be between a lenght of 5 and 50...")
            setCitypf("Fail")
        }
    };

    const StateInputValidation = (e) => {
        e.preventDefault();
        setS(e.target.value)
        if (State.length === 2){
            setStateCheck("");
            setStatepf("True")
        }
        else {
            setStateCheck("Select a State")
            setStatepf("Fail")
        }
    };

    const zipInputValidation = (e) => {
        e.preventDefault();
        setZipCode(e.target.value)
        if (ZipCode.length === 0){
            setZipCheck("You can not leave this blank")
            setZipCodepf("Fail")
        }
        else if (ZipCode.length < 10 && ZipCode.length > 4){
            setZipCheck("");
            setZipCodepf("True")
        }
        else {
            setZipCheck("Zipcode must be between a lenght of 5 and 9...")
            setZipCodepf("Fail")
        }
    };

    const mainInputValidation = (e) => {
        e.preventDefault();
        if (namepf === "True" && addresspf === "True" && address2pf === "True" && citypf === "True" && statepf === "True" && zipcodepf === "True" ){
            alert("Pass");
            accountValidation()
        }
        else {
            alert("Fail");
        }
    };

    async function accountValidation() {

        const post = { Namefield : Name, Addressfield: Address, Address2field: Address2, Cityfield: City, Statefield: State, ZipCodefield: ZipCode}
        const response = await client.post("userdata/", post);
        const text = JSON.stringify(response);
        
    };

    return <BC>
        <FC>
            <I type="Name" placeholder="Full Name" value={Name} onChange={e => (NameInputValidation(e), setName(e.target.value))}/>
            <EM>{NameCheck}</EM>
            <I type="Address" placeholder="Address 1" value={Address} onChange={e => (AddressInputValidation(e),setAddress(e.target.value))} />
            <EM>{AddressCheck}</EM>
            <I type="Address2" placeholder="Address 2" value={Address2} onChange={e => (Address2InputValidation(e),setAddress2(e.target.value))} />
            <EM>{AddressCheck2}</EM>
            <I type="City" placeholder="City" value={City} onChange={e => (CityInputValidation(e),setCity(e.target.value))} />
            <EM>{CityCheck}</EM>
            <J name="state" onChange={e => (StateInputValidation(e),setS(e.target.value))}>
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
            <I type="ZipCode" placeholder="ZipCode" value={ZipCode} onChange={e => (zipInputValidation(e),setZipCode(e.target.value))}/>
            <EM>{ZipCheck}</EM>
        </FC>
        <Marginer direction="vertical" margin="1.6em" />
        <SB type="submit" onClick={e => ( mainInputValidation(e))}>Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}

