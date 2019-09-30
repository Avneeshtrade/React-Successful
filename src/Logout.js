import React from "react"
import {Link,Redirect} from "react-router-dom"

function Logout(props){
  if(localStorage.getItem('token') === undefined)
  {
    
      localStorage.clear()
            return(
                <div className="form-wrapper">
                <h1 >You have successfully logout </h1>
                <p>want to login again
                <Link to="/" >LogIn Again</Link>
                </p>
                </div>
            )
       
    
}
else{
    return(<Redirect to="/" />)
} 
    
}

export default Logout