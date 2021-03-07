import './App.css';
import Nave from './Components/Nav'
import { Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path='/' component={Nave}/>
    </div>
  );
}

export default App;
