import React from "react";
import contactSubmitComponent from './contactSubmitComponent'

const settings ={
  name:'hello',
  getInputs: () => {
    return (
      <label>Message:<br/>
      <textarea name="message"></textarea></label>
    )
  }
}

const HelloContact = (props) =>{
  console.log('HelloContact props', props);
  return <>

    {props.children}

  </>
}

export default contactSubmitComponent(HelloContact, settings)
