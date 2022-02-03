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
      id: "",
      Name: "",
      Std: "",
      Age: "",
      Grade: "",
      items: [],
      id: 0,
      update: true,
    };

    // this.showData = this.showData.bind(this);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { singleUserData } = this.state;
    let items = [...this.state.items];

    items.push(singleUserData);

    this.setState({
      items,
      singleUserData: {},
      update: false,
    });
    e.target.reset();
  };

  handleInputChange = (e, name) => {
    let value = e.target.value;

    this.setState((state) => ({
      singleUserData: {
        ...state.singleUserData,
        [name]: value,
      },
    }));
  };

  removedata = (index, item) => {
    var { items } = this.state;
    // console.log("sd", items, index, item);
    items.splice(index, 1);

    this.setState({ items: items });
  };

  // handleInputChange = (e) => {
  //   let input = e.target;
  //   let name = e.target.name;
  //   let value = input.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // };
  showclickdata = (item, input, items) => {
    this.setState({ singleUserData: item });

    this.setState({
      update: true,
      id: item.id,
    });
    let updateList = items.map((updatedUser) => {
      if (updatedUser.id === input.id) {
        updatedUser.productname = input.productname;
        updatedUser.category = input.category;
      }
      return updatedUser;
    });
  };

  render() {
    const { userData, singleUserData, formData, items, index } = this.state;
    //console.log("UserData", userData, index, items);
    //  console.log("userData", items);

    // console.log(userData);
    //console.log(singleUserData);
    return (
      <div>
        {/* <SingleuserData singleUservalue={singleUserData} /> */}
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          formData={this.state.singleUserData}
          updateData={this.state.update}
          // newUsername={this.state.name}
          // newstd={this.state.std}
          // newage={this.state.age}
          // newGrade={this.state.Grade}
        />
        <TableData
          auserinfo={userData}
          handleClick={this.showData}
          items={this.state.items}
          removeItem={this.removedata}
          editItem={this.showclickdata}
        />
        {/* <displaylist handleDelete={this.handleDelete} /> */}
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
