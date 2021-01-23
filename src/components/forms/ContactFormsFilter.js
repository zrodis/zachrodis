import React from "react";
import ContactForm from './ContactForm'

//use display=none instead of only rendering what is needed, that way netlify can parse the forms
const formExplanation = 'If you can answer any of these questions it will help to get started, but it\'s not required:'

export default ({type}) => {
  console.log('contact type', type);

    return(
        <>

          <ContactForm name="website" type={type}>
            <p>{formExplanation}</p>
            <label>Who or what is the website for? <br/>What does it need to contain or what product does it support?<br/>
            <textarea name="whatis"></textarea></label>
            <br/><br/>
            <label>Is there already an existing website? If yes, what is it?<br/>
            <textarea name="preexisting"></textarea></label>
            <br/><br/>
          </ContactForm>


          <ContactForm name="app" type={type}>
            <p>{formExplanation}</p>
            <label>Who or what is the app for? <br/>What does it need to contain or what product does it support?<br/>
            <textarea name="whatis"></textarea></label>
            <br/><br/>
            <label>What devices or operating system do you want to support? <br/>
            <textarea name="OS"></textarea></label>
            <br/><br/>
          </ContactForm>


          <ContactForm name="illustration" type={type}>
              <p>{formExplanation}</p>
            <label>
              What is the illustration work for?<br/>
              How many images will you need?<br/>
              <textarea name="whatis"></textarea>
            </label>
            <br/><br/>
            <label>Do you have already have an idea about how you want it to look or what should be in it? <br/>
            <textarea name="OS"></textarea></label>
            <br/><br/>
          </ContactForm>

          <ContactForm name="bug" type={type}>
            <p>{formExplanation}</p>
            <label>
              Where did you find the bug and what browser and operating system are you using?<br/>
              <textarea name="whatis"></textarea>
            </label>
            <br/><br/>
            <label>Can you reproduce the bug? What steps do you take to reproduce it?<br/>
            <textarea name="reproduce"></textarea></label>
            <br/><br/>
          </ContactForm>

          <ContactForm name="hello" type={type}>
            <label>Hello! Send me a message:<br/>
            <textarea name="message"></textarea></label>
          </ContactForm>

          {type === "meany" &&
            <p style={{textAlign: 'center'}}>There's no form for that, sorry</p>
          }
        </>
    )



}
