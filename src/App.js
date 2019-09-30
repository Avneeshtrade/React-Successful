import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch} from "react-router-dom";
import Route from "react-router-dom/Route";
import Registration from './Registration';
import Login from './Login';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import Master from "./Master";
import Logout from "./Logout";


class App extends Component{

  render() {
    return (
      <Fragment>
      
      <Router>
      <Master />   
        <Switch>
        <Route path="/home" component={Home}/>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Registration} />
               <Route path="/logout"  component={Logout} />
  
       </Switch>
      
      </Router>
      </Fragment>
    );
  }

}

export default App;
