import React from "react";
import { Component } from "react/cjs/react.production.min";

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        { name: "tom", std: 10, age: 25 },
        { name: "kia", std: 2, age: 21 },
        { name: "jhon", std: 3, age: 24 },
      ],
      singleUserData: {},
    };
    this.showData = this.showData.bind(this);
  }

  showData = (item) => {
    this.setState({ singleUserData: item });
  };

  render() {
    const { userData, singleUserData } = this.state;
    // console.log("userData", this.state.userData);

    console.log(userData);
    return (
      <div>
        <Component2 singleUservalue={singleUserData} />

        <p>{this.state.message} </p>
        <table className="table">
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
        </table>
      </div>
    );
  }
}
export default Click;
class Component2 extends Component {
  render() {
    var { singleUservalue } = this.props;
    return (
      <div>
        <div>{singleUservalue.name}</div>
        <div>{singleUservalue.std}</div>
        <div>{singleUservalue.age}</div>
      </div>
    );
  }
}
