import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Redirect} from "react-router-dom";
function Home(props){
  if(props.location.state===null)
  {
    return(
      <Redirect to="/" />
    )
  }
  else{
    if(props.location.state != null)
    {
  if(props.location.state.token){

    return (
      <Fragment>
        <h1 className="form-wrapper" >Welcome {props.location.state.id}</h1>     
      </Fragment>
          )

  }
}
else{
  return (<Redirect to="/" />)
}
}
    }

export default Home;

