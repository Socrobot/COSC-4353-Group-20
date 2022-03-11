import './App.css';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AB } from './conponents/Login/index';
import { ABH } from './conponents/Home/indexH'
import { ABPM } from './conponents/ProfileManager/indexPM';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #1F262A;
`;

function App() {
  return <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AB /> } />
          <Route path="Home" element={ <ABH />} />
          <Route path="UserData" element={ <ABPM /> } />
        </Routes>
      </BrowserRouter>
  </AppContainer>
}

export default App;
