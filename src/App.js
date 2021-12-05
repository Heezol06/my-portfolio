import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MyProjects from './component/MyProjects/MyProjects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Header></Header>
       <Switch>
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route exact path="/myProjects">
       <MyProjects></MyProjects>
       </Route>
       </Switch>
       </Router>
    </div>
  );
}

export default App;
