import React, { Component } from "react";

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form className="Formname">
          <div className="form-sec">
            <label htmlFor="fname">Name *</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Name"
              id="fname"
              className="Name"
            />
          </div>
          <br></br>
          <div class="form-sec">
            <label htmlFor="std">Std *</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Std"
              id="std"
              className="Name"
            />
          </div>
          <br></br>
          <div class="form-sec">
            <label htmlFor="Age"> Age *</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Age"
              id="Age"
              className="Name"
            />
          </div>
          <br></br>
          <div class="form-sec">
            <label htmlFor="grade">Grade *</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter your Grade"
              id="grade"
              className="Name"
            />
          </div>
          <br></br>
          <button type="Submit" className="sub-btn" value="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
