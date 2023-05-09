import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Top from './components/Top';
import styled from 'styled-components' 

const All = styled.div`
    display: flex;
    font-size:50 px;
    justify-content：space-between
    // border-radius: 10px;
    padding: 0px;
    margin: 0px;
    // box-shadow: 0 0 100px rgba(0,0,0,0.2);
`; 

const  Center= styled.div`
  display: flex;
  font-size:50 px;
  flex-direction:column;
  // border-radius: 10px;
  padding: 0px;
  margin: 0px;
  // box-shadow: 0 0 100px rgba(0,0,0,0.2);
`; 

function App() {
  return (
    <div>
      <Router>
        <All>
          <Sidebar />
          <Center>
            <Top />
            <Dashboard/>
            {/* <Switch>
              <Route exact path="/"><Dashboard/></Route>
            </Switch> */}
          </Center>
          <Rightbar />
        </All>
      </Router>
      
    </div>
  );
}

export default App;
