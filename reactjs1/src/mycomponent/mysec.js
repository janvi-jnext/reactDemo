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
      singleUserData: {},
    };
    this.showData = this.showData.bind(this);
  }

  showData = (item) => {
    this.setState({ singleUserData: item });
  };

  render() {
    const { userData, singleUserData } = this.state;
    //console.log("userData", this.state.userData);

    console.log(userData);
    return (
      <div>
        <SingleuserData singleUservalue={singleUserData} />

        <Form />
        <TableData auserinfo={userData} handleClick={this.showData} />
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
