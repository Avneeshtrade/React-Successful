import React,{Fragment, Component} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


class Master extends Component{
// constructor(props){
//     super(props)

// }
render(){
       return (
          <Fragment>
          <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/">login</Link>
        </li>
    
        <li className="nav-item">
          <Link className="nav-link" to="/register">register</Link>
        </li>

            
        <li className="nav-item">
          <Link className="nav-link" to={{pathname: '/logout',state: { token:true } }}  >logout</Link>
        </li>
    
     
      </ul>
    
    </nav>
    </Fragment>
        );
    }
}
    export default Master;