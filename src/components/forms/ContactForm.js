import React from "react";

export default class ContactForm extends React.Component {

  constructor(props){
    super(props)
    this.validateEmail = this.validateEmail.bind(this)
    this.state = {
      email: '',
      enableSubmit: false,
    }
  }

  validateEmail(evt) {
    console.log('validateEmail', evt.target.value, this.state.email);

    this.setState({
      email: evt.target.value,
      enableSubmit: evt.target.value.match(/\w+@\w+\.\w+/),
    })


  }

  handleSubmit(){
    console.log('handleSubmit');
    //post to netlify api
    //or netlify just does this all autmatically and this is unecessary, neat
  }

  render(){
    return(
      <form name={this.props.name}
            method="POST" data-netlify="true"
            action="/contact-thanks"

            style={{display:(this.props.type==this.props.name ? 'block' : 'none')}}
      >
        <input type="hidden" name="form-name" value={this.props.name} />

          {this.props.children}

          <div className="flexCenterColumn">
            <label>Your Name:
            <input type="text" name="name" /></label>

            <label>Your Email:
            <input type="email" name="email" value={this.state.email} onChange={this.validateEmail}/></label>
          </div>
          <div style={{fontSize: '12px'}}>email is required</div>

            {!this.state.enableSubmit ?

                <button className="disabled" disabled title="Enter a valid email address!">Send Message</button>

              :
                <button type="submit" >Send Message</button>


            }

      </form>
    )
  }
}
