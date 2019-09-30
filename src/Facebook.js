import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';



class Facebook extends Component {
  constructor() {
    super();
    this.responseFacebook = this.responseFacebook.bind(this);
  }


  responseFacebook = (response) => {
    if (response) {
      axios.post('http://localhost:51937/api/register', {
        name: response.name,
        password: response.accessToken,
        email: response.id
      })
        .then(function (register) {
          console.log('user Registered success-- ', register);
          if(register===true){

          axios.post('http://localhost:51937/api/token', {
            email: response.id,
            password: response.accessToken
          })
            .then(function (tokenres) {
              if(tokenres!=="null"){
              
              localStorage.setItem("token",tokenres.Token)
            console("successfully token stored")  
            }
            })
            .catch(function (error) {
              console.log('token request failed'+error);
            });
          }
          else{
            console("unable to register")
          }
        })
        .catch(function (error) {
          console.log('user request failed'+error);
        });


    }
    else {
      console.log("unable to fetch data")
    }

  }


  render() {


    return (<FacebookLogin
      appId="422443185136180"
      onFailure={this.responseFacebook}
      autoLoad={false}
      cookie={true}
      callback={this.responseFacebook}
      cssClass="form-wrapper1"
      icon="fa-facebook"
    />

    );

  }
}
export default Facebook;

