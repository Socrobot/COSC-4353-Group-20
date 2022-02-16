import './App.css';
import styled from "styled-components";
import { AB } from './conponents/Login';

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

function App() {
  return <AppContainer>
    <AB />
  </AppContainer>
}

export default App;
