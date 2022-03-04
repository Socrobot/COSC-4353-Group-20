import './App.css';
import styled from "styled-components";
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
    <ABPM />
  </AppContainer>
}

export default App;
