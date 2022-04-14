import React, { useContext, useState, useEffect } from "react";
import useDebounce from "../Hooks/useDebounce";
import { BC, FC, I, ML, SB, BL,EM,J,K } from "./commonPM";
import { Marginer } from "../marginerTool";
import { AccountContext } from "./accountContextPM";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup(props) {

    const navigate = useNavigate();

    const { toSignin } = useContext(AccountContext)
    const [Name, setName] = useState("");
    const [NameCheck, setNameCheck] = useState("");
    const [namepf, setNamepf] = useState("");
    useDebounce(()=>NameInputValidation(),1000,[Name])

    const [Address, setAddress] = useState("");
    const [AddressCheck, setAddressCheck] = useState("");
    const [addresspf, setAddresspf] = useState("");
    useDebounce(()=>AddressInputValidation(),1000,[Address])

    const [Address2, setAddress2] = useState("");
    const [AddressCheck2, setAddress2Check] = useState("");
    const [address2pf, setAddress2pf] = useState("True");
    useDebounce(()=>Address2InputValidation(),1000,[Address2])

    const [City, setCity] = useState("");
    const [CityCheck, setCityCheck] = useState("");
    const [citypf, setCitypf] = useState("");
    useDebounce(()=>CityInputValidation(),1000,[City])

    const [State, setS] = useState("");
    const [StateCheck, setStateCheck] = useState("");
    const [statepf, setStatepf] = useState("");
    useDebounce(()=>StateInputValidation(),1000,[State])

    const [ZipCode, setZipCode] = useState("");
    const [ZipCheck, setZipCheck] = useState("");
    const [zipcodepf, setZipCodepf] = useState("");
    useDebounce(()=>zipInputValidation(),1000,[ZipCode])

    useEffect(() => {
        const fetchData = async () => {
           const data = await loadin();
  
        }
      
        fetchData();
      }, []);
  
  
      function loadin() {
        var username = sessionStorage.getItem("username");
    
        if (username === null){
          navigate("/Login_Signup");
        }
        else 
        {
        console.log("Season Storage Used");
        }
      }


    const client = axios.create({
        baseURL: "http://127.0.0.1:8000/api/"
    });

    const NameInputValidation = () => {
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

    const AddressInputValidation = () => {
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

    const Address2InputValidation = () => {
        if (Address2.length < 100){
            setAddress2Check("");
            setAddress2pf("True")
        }
        else {
            setAddress2Check("Address must be less then 100 characters...")
            setAddress2pf("Fail")
        }
    };

    const CityInputValidation = () => {
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

    const StateInputValidation = () => {
        if (State.length === 2){
            setStateCheck("");
            setStatepf("True")
        }
        else {
            setStateCheck("Select a State")
            setStatepf("Fail")
        }
    };

    const zipInputValidation = () => {
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
        console.log(namepf,addresspf,address2pf,citypf,statepf,zipcodepf);
        if (namepf === "True" && addresspf === "True" && address2pf === "True" && citypf === "True" && statepf === "True" && zipcodepf === "True" ){
            alert("Pass");
            accountValidation()
        }
        else {
            alert("Fail");
        }
    };

    async function accountValidation() {
        try{
            var username = sessionStorage.getItem("username")
            const post = { username: username, Namefield : Name, Addressfield: Address, Address2field: Address2, Cityfield: City, Statefield: State, ZipCodefield: ZipCode}
            const response = await client.post("userdata/", post);
            const text = JSON.stringify(response?.status);

            if (text.includes('201')){
                alert("Accepted Info");
                navigate("/Home");
            }
        }
        catch(error) {
            if (error.response.status === 400) {
                alert("Info is incorect")
            }
            else {
                alert("Error During Proccessing")
            }
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
        <SB type="submit" onClick={e => ( mainInputValidation(e))}>Signup</SB>
        <ML href="#">
            Already Have An Account? <BL href="#" onClick={toSignin}>Signin</BL>
        </ML>
    </BC>
}

