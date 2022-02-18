import styled from "styled-components";

// common shared styled containers 
export const BC = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const FC = styled.form`
width: 100%;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const ML = styled.a`
font-size: 11px;
color: rgba(255, 255, 255, 0.8);
font-weight: 500;
text-decoration: none;
`;

export const BL = styled.a`
font-size: 11px;
color: rgb(9,255,0);
font-weight: 500;
text-decoration: none;
margin: 0 4px;
`;

export const I = styled.input`
width: 100%;
height: 42px;
background: rgb(169,169,169);
outline: none;
border: 1px solid rgba(200, 200, 200, 0.3);
padding: 0px 10px;
border-bottom: 1.4px solid transparent;
transition: all 200ms ease-in-out;
font-size: 12px;
&::placeholder {
    color: rgba(255, 255, 255, 1);
}
&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}
&:focus {
    outline: none;
    border-bottom: 2px solid rgb(9,255,0);
}
`;

export const SB = styled.button`
width: 100%;
padding: 11px 40%;
color: #fff;
font-size: 15px;
font-weight: 600;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(9,255,0);
background: linear-gradient(
    58deg,
    rgba(9,255,0,1) 20%,
    rgba(6,164,0,1) 100%
    ); 
&:hover {
    filter: brightness(1.03);
}
`;

export const EM = styled.a`
color: #ff0000;
font-weight: 500;
font-size: 8px;
z-index: 10;
margin: 0;
`;