import React from "react";

function Input(props){
    return(
        <input type={props.type} className={props.class} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
    )
}

export default Input;