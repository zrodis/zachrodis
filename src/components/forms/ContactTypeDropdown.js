import React from "react";
import contactSubmitComponent from './contactSubmitComponent'


const contactTypes = [

  { name:'HelloContact',
    getInputs: () => {
      return (
        <label>Hello:<br/>
        <textarea name="message"></textarea></label>
      )
  }},

  { name:'WebsiteContact',
    getInputs: () => {
      return (
        <>
        <label>Who or what is the website for?<br/>
        <textarea name="what"></textarea></label>

        <label>How soon do you need it to be done?<br/>
        <textarea name="speed"></textarea></label>
        </>
      )
  }},

]

const contactTypesComponents = contactTypes.map( (item, inx) => {
  return (props) => contactSubmitComponent(<>{props.children}</>, item)
})

const HelloContact = contactSubmitComponent( (props) => <> {props.children} </>,  contactTypes[0])
const WebsiteContact = contactSubmitComponent( (props) => <> {props.children} </>, contactTypes[1] )


export default contactTypesComponents
