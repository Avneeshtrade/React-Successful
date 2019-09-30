import React,{Component,Fragment} from "react";
import Facebook from './Facebook';
import Google from './Google';
import './App.css';
import axios from "axios";

import {Redirect} from "react-router-dom";

class Login extends Component{
constructor(props){
  super(props);
  this.state={
    username:'',
    password:'',
    LoggedIn:false,
    message:'',
    token:null
  } 
this.submithandler=this.submithandler.bind(this);
this.onchange=this.onchange.bind(this);

}
onchange=(event)=>{
this.setState({
	[event.target.placeholder]:event.target.value
})
 
}

submithandler(opt){
opt.preventDefault()
if(localStorage.getItem("token") === undefined)
{
axios.post('http://localhost:51937/api/authenticate',{email:this.username,password:this.password,token:localStorage.getItem('token')}).then((validate)=>{
if(validate === "authorized")
{
      this.setState({
        LoggedIn:true,
        username:validate.username
      })
}
else{
  
  console.log("Not authorize")
}
})
}
else{
  axios.post('http://localhost:51937/api/values/token', {
    email: this.username,
    password: this.password,
   
  })
    .then(function (res) {
      
  if(res !== null)
  {   
      localStorage.setItem("token",res.Token)
  }
  else{
    console("user is not registered")
  }
    })
    .catch(function (error) {
     
    });
}
this.setState({
  username:'',
  password:''
})
}


  render(){
    if(this.state.LoggedIn)
    {
return (<Redirect  to={{pathname: '/home',state: { id: this.username,token:true } }} />)
    }
    else{
return(

<Fragment>


      <div class="container text-center">
<Facebook /><hr />
<Google />
</div>


  <div class="form-wrapper">
  <form onSubmit={this.submithandler}>
      <h1 className="fw1 text-center">Login here</h1>

      <div class="form-item">
                <input type="text" value={this.state.username} onChange={this.onchange}  placeholder="username" required /> 
    </div>
    
    <div class="form-item">
                <input type="password" onChange={this.onchange} value={this.state.password} placeholder="password" required/> 
    </div>
    
    <div class="button-panel">
                <input type="submit" class="button" value="Log In" /> 
    </div>

</form>
 
  <div class="reminder">
      <p>Not a member? <a href="/register">Sign up now</a></p>
      <p><a href="/">Forgot password?</a></p>
  </div>
</div>
 
</Fragment>
  
)
}
}
}
export default Login;
