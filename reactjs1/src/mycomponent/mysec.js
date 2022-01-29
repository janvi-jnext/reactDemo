import React, { Component } from "react";
import SingleuserData from "./tablecontainer";
import TableData from "./table";
import Form from "./Formcompont";

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userData: [
      //   { name: "tom", std: 10, age: 25, Grade: "A" },
      //   { name: "kia", std: 2, age: 21, Grade: "B" },
      //   { name: "jhon", std: 3, age: 24, Grade: "A+" },
      // ],
      formData: {},
      singleUserData: {},
      Name: "",
      Std: "",
      Age: "",
      Grade: "",
      items: [],
    };

    // this.showData = this.showData.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    let items = [...this.state.items];

    items.push(formData);
    this.setState({
      items,
      formData: {},
    });
  };

  handleInputChange = (e, name) => {
    let value = e.target.value;

    this.setState((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    }));
  };

  // handleInputChange = (e) => {
  //   let input = e.target;
  //   let name = e.target.name;
  //   let value = input.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // };
  // showData = (item) => {
  //   this.setState({ singleUserData: item });
  // };

  render() {
    const { userData, singleUserData, formData, items } = this.state;
    console.log("userData", items);
    console.log("janvi");

    // console.log(userData);
    console.log(singleUserData);
    return (
      <div>
        <SingleuserData singleUservalue={singleUserData} />
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          formData={formData}
          // newUsername={this.state.name}
          // newstd={this.state.std}
          // newage={this.state.age}
          // newGrade={this.state.Grade}
        />
        <TableData
          auserinfo={userData}
          handleClick={this.showData}
          items={this.state.items}
        />
        {/* <p>{this.state.message} </p> */}
        {/* <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Std</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((item, index) => {
              return (
                <tr onClick={() => this.showData(item)}>
                  <td>{item?.name}</td>
                  <td>{item?.std}</td>
                  <td>{item?.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
    );
  }
}
export default Click;
