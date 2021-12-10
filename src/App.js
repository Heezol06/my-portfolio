import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MyProjects from './component/MyProjects/MyProjects';
import Resume from './component/Resume/Resume';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactMe from './component/ContactMe/ContactMe';
import Footer from './component/Footer/Footer';
import TravelDestination from './component/TravelDestination/TravelDestination';
import RoyalEnfield from './component/RoyalEnfield/RoyalEnfield';
import DailyHealthCare from './component/DailyHealthCare/DailyHealthCare';

function App() {
  return (
    <div className="App ">
    <Router>
    <Header></Header>
       <Switch>
       <Route exact path="/">
       <Home></Home>
       </Route>
       <Route exact path="/home">
       <Home></Home>
       </Route>
       <Route exact path="/myProjects">
       <MyProjects></MyProjects>
       </Route>
       <Route exact path="/resume">
       <Resume></Resume>
       </Route>
       <Route exact path="/travelDestination">
       <TravelDestination></TravelDestination>
       </Route>
       <Route exact path="/royalEnfield">
       <RoyalEnfield></RoyalEnfield>
       </Route>
       <Route exact path="/dailyHealthCare">
       <DailyHealthCare></DailyHealthCare>
       </Route>
       <Route exact path="/contactMe">
       <ContactMe></ContactMe>
       </Route>
       </Switch>
       <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
