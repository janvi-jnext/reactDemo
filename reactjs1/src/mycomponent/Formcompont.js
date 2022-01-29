import React, { Component } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please Enter your Name";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "*Only Letters";
      }
    }
    //std
    if (!fields["std"]) {
      formIsValid = false;
      errors["std"] = "*Please Enter your std";
    }

    if (typeof fields["std"] !== "undefined") {
      if (!fields["std"].match(/^[0-9\b]+$/)) {
        formIsValid = false;
        errors["std"] = "*Only numbers";
      }
    }

    //age
    if (!fields["age"]) {
      formIsValid = false;
      errors["age"] = "*Please Enter your Age";
    }

    if (typeof fields["age"] !== "undefined") {
      if (!fields["age"].match(/^[0-9\b]+$/)) {
        formIsValid = false;
        errors["age"] = "*Only numbers";
      }
    }

    //grade
    if (!fields["Grade"]) {
      formIsValid = false;
      errors["Grade"] = "*Please Enter your Grade";
    }

    if (typeof fields["Grade"] !== "undefined") {
      if (!fields["Grade"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["Grade"] = "*only A to E letter";
      }
    }
    //gender
    if (!fields["gender"]) {
      formIsValid = false;
      errors["gender"] = "*Please Choose Any One gender";
    }
    //city
    if (!fields["city"]) {
      formIsValid = false;
      errors["city"] = "*Please Select Any One city";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    this.setState({ value: e.target.value });
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    console.log("hello", fields);
  }

  render() {
    const { formData } = this.props;
    return (
      <div>
        <form
          className="Formname"
          onSubmit={
            (this.props.handleFormSubmit, this.contactSubmit.bind(this))
          }
        >
          <div className="form-sec">
            <label htmlFor="name">Name*</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Name"
              id="name"
              value={formData.name}
              onChange={
                ((e) => this.props.handleInputChange(e, "name"),
                this.handleChange.bind(this, "name"))
              }
              name="name"
              className="Name"
            />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
          </div>
          <br></br>
          <div class="form-sec">
            <label htmlFor="Std">Std *</label>
            <br></br>
            <input
              type="text"
              name="std"
              value={formData.std}
              onChange={
                ((e) => this.props.handleInputChange(e, "std"),
                this.handleChange.bind(this, "std"))
              }
              placeholder="Enter your Std"
              id="std"
              className="Name"
            />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["std"]}</span>
          </div>
          <br></br>
          <div class="form-sec">
            <label htmlFor="Age"> Age *</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Age"
              value={formData.age}
              onChange={
                ((e) => this.props.handleInputChange(e, "age"),
                this.handleChange.bind(this, "age"))
              }
              id="Age"
              name="Age"
              className="Name"
            />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["age"]}</span>
          </div>
          <br></br>
          <div class="form-sec">
            <label htmlFor="grade">Grade *</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Grade"
              value={formData.Grade}
              onChange={
                ((e) => this.props.handleInputChange(e, "Grade"),
                this.handleChange.bind(this, "Grade"))
              }
              name="Grade"
              id="grade"
              className="Name"
            />
            <br></br>
            <span style={{ color: "red" }}>{this.state.errors["Grade"]}</span>
          </div>
          <br></br>
          <div>
            <label htmlFor="city">Select your City *</label>
            <br></br>
            <select
              name="city"
              value={this.state.city}
              onChange={this.handleChange.bind(this, "city")}
            >
              <option value="select">--Select--</option>
              <option value="Pune" name="city">
                Pune
              </option>
              <option value="Mumbai" name="city">
                Mumbai
              </option>
              <option value="Hyderabad" name="city">
                Hyderabad
              </option>
            </select>
          </div>
          <span style={{ color: "red" }}>{this.state.errors["city"]}</span>
          <br></br>
          <br></br>
          <div>
            <label>Choose Gender *</label>
            <br></br>
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={this.handleChange.bind(this, "gender")}
            />
            {""}
            Male
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={this.handleChange.bind(this, "gender")}
            />
            {""}
            Female
            <input
              type="radio"
              value="Other"
              name="gender"
              onChange={this.handleChange.bind(this, "gender")}
            />
            {""}
            Other<br></br>
            <span style={{ color: "red" }}>{this.state.errors["gender"]}</span>
          </div>
          <br></br>
          <label
            name="Color"
            value="color"
            onChange={this.handleChange.bind(this, "Color")}
          >
            Choose Color *
          </label>
          <br></br>
          <input type="checkbox" name="Red" /> Red
          <input type="checkbox" name="White" /> White
          <input type="checkbox" name="Black" /> Black
          <br></br>
          <span style={{ color: "red" }}>{this.state.errors["Color"]}</span>
          <button type="Submit" className="sub-btn" value="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
