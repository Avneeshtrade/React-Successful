import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
//import 'bootstrap/dist/css/bootstrap.min.css'
  
class Google extends Component{
  constructor(){
    super();
     this.responseGoogle=this.responseGoogle.bind(this);
   }

  responseGoogle = (response) => {
    console.log(response);
  }
 render(){
  return(
  <GoogleLogin
    clientId="158230404472-j8hel1qi1dkmh01baq5hia18vvnd9qs5.apps.googleusercontent.com"
    buttonText="Google Login"
    className="form-wrapper1"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    autoLoad={false}
  />

);
  }
}
export default Google;