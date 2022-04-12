import React, { Component } from "react";
import "./AddTiffinCenter.css";

// const addressRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class AddTiffinCenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      centerName: null,
      city: null,
      address: null,
      fssai: null,
      contact: null,
      formErrors: {
        centerName: "",
        city: "",
        address: "",
        fssai: "",
        contact: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Center Name: ${this.state.centerName}
        City: ${this.state.city}
        Address: ${this.state.address}
        FSSAI Reg.no: ${this.state.fssai}
        Contact no.: ${this.state.contact}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "centerName":
        formErrors.centerName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "city":
        formErrors.city =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "address":
        formErrors.address =
        value.length < 3 ? "minimum 3 characaters required" : "";
        // formErrors.address = addressRegex.test(value)
        //   ? ""
        //   : "invalid address address";
        break;
      case "fssai":
        formErrors.fssai =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
        case "contact":
          formErrors.fssai =
            value.length < 6 ? "minimum 6 characaters required" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Register your tiffin center by filling out the information below</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="centerName">
              <label htmlFor="centerName">Center Name</label>
              <input
                className={formErrors.centerName.length > 0 ? "error" : null}
                placeholder="Tiffin center name"
                type="text"
                name="centerName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.centerName.length > 0 && (
                <span className="errorMessage">{formErrors.centerName}</span>
              )}
            </div>
            <div className="city">
              <label htmlFor="city">City</label>
              <input
                className={formErrors.city.length > 0 ? "error" : null}
                placeholder="Enter city name"
                type="text"
                name="city"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </div>
            <div className="address">
              <label htmlFor="address">Center address</label>
              <input
                className={formErrors.address.length > 0 ? "error" : null}
                placeholder="Enter center address"
                type="address"
                name="address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.address.length > 0 && (
                <span className="errorMessage">{formErrors.address}</span>
              )}
            </div>
            <div className="fssai">
              <label htmlFor="fssai">FSSAI Lic.no</label>
              <input
                className={formErrors.fssai.length > 0 ? "error" : null}
                placeholder="Enter FSSAI license no."
                type="fssai"
                name="fssai"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.fssai.length > 0 && (
                <span className="errorMessage">{formErrors.fssai}</span>
              )}
            </div>
            <div className="contact">
              <label htmlFor="fssai">Contact no.</label>
              <input
                className={formErrors.fssai.length > 0 ? "error" : null}
                placeholder="Enter Contact no."
                type="contact"
                name="contact"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.contact.length > 0 && (
                <span className="errorMessage">{formErrors.contact}</span>
              )}
            </div>
            <div className="register">
              <button type="submit">Register</button>
              {/* <small>Already registrered?</small> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTiffinCenter;
