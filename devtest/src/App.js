import logo from './logo.svg';
import './App.css';
import { Route} from "react-router-dom";
import {Landing} from './Components/Landing/Landing'
import {Nav} from './Components/Nav/Nav'
import {Footer} from './Components/Footer/Footer'
import { Details } from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nav}/>
      <Route exact path='/' component={Landing} />
      <Route exact path='/details/:id' render={({match}) => <Details id={match.params.id}/>}/>
      {/* <Route path='/' component={Footer}/> */}

    </div>
  );
}

export default App;
