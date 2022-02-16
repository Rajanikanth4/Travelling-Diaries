import React,{Component} from "react";
import ReactFormInputValidation from "react-form-input-validation";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        phone_number: ""
      },
      errors: {}
    };
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        name: "required",
        email: "required|email",
        phone_number: "required|numeric|digits_between:10,12",
    });

  }
 
  render() {
    const cc={
      backgroundColor:"darkcyan",
      color:"cornsilk",
      height:"278px",
      padding:"23px"
      }
    return (<React.Fragment>
        <form onSubmit={this.form.handleSubmit} style={cc} class="text-center">
        <h1 ><b>Please contact to know me!</b></h1>
    <div class="mb-3">
      <p>
      <label class="form-label">Name:</label>
      <input 
                 type="text"
                  name="name"
                  style={{color:"blue"}}
                  placeholder={this.props.name}
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.name}
       />
                <label className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </label>
      </p>
    </div>
    <div class="mb-3">
      <p>
      <label class="form-label">Email:</label>
      <input 
                  type="email"
                  name="email"
                  style={{color:"blue"}}
                  placeholder={this.props.email}
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email}
       />
                <label className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </label>
      </p>
    </div>
    <div class="mb-3">
      <p>
      <label class="form-label">Phone:</label>
      <input 
                  type="tel"
                  name="phone_number"
                  style={{color:"blue"}}
                  placeholder={this.props.phone}
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              <label className="error">
                {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
              </label>
      </p>
    </div>
    <p>
              <button class="btn btn-primary" type="submit">Submit</button>
            </p>  </form>
    </React.Fragment>)

  }
}

Contact.defaultProps={
  name:"Please enter name",
  email:"please enter email",
  phone:"please enter number"
}