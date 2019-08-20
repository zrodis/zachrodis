import React from "react";

/*
what functions do the forms have in common?

- submit data to server(less)
  • button and action
- forms are different based on type, but have a few things in common:
  • contact info - email address
*/

/*
1. apply props that exist from the param Component (ContactSumbit),
   - for example, the things that are specifc to a type of contactSubmit
2. apply the common elements from the HOC
   - for example, the things that all contactSubmits need, like sending some kind of POST to netlify

 - since the HOC exxantially creates a wrapper, it shouldn't be manipulating the original component
*/


const contactSubmitComponent = (ContactSumbit, settings) => {
  class ComposedContactSumbit extends React.Component {

    validateEmail(){

    }

    handleSubmit(){
      console.log('handleSubmit');
      //post to netlify api
      //or netlify just does this all autmatically and this is unecessary, neat
    }

    render(){
      console.log('ComposedContactSumbit PROPS', this.props);
      console.log('ComposedContactSumbit settings', settings);
      return(
        <ContactSumbit {...this.props}>


        <form name={settings.name} method="POST" data-netlify="true" action="/contact-thanks">
          <input type="hidden" name="form-name" value={settings.name} />

            {settings.getInputs()}

            <div className="flexCenterColumn">
              <label>Your Name:
              <input type="text" name="name" /></label>

              <label>Your Email:
              <input type="email" name="email" /></label>
            </div>

            <p>
              <button type="submit">Send Message</button>
            </p>
        </form>

        </ContactSumbit>
      )
    }
  }

  return ComposedContactSumbit
}

export default contactSubmitComponent
