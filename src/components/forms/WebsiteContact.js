import React from "react";
import contactSubmitComponent from './contactSubmitComponent'



const HelloContact = (props) =>{
  console.log('HelloContact props', props);
  return <div className="flexCenterColumn">

    <form name={'hello-test'} method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="hello-test" />
      <p>
        <label>Message:<br/>
        <textarea name="message"></textarea></label>
      </p>

      {props.children}
    </form>

  </div>
}

export default contactSubmitComponent(HelloContact, 'hello-test')
