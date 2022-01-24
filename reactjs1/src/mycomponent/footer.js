import React from "react";

class Click extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [
        { name: "tom", std: 10, age: 20 },
        { name: "kia", std: 2, age: 20 },
        { name: "jhon", std: 3, age: 20 },
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
    //console.log("userData", this.state.userData);

    return (
      <div>
        <div>{singleUserData?.name}</div>
        <div>{singleUserData?.std}</div>
        <div>{singleUserData?.age}</div>
        <p> {this.state.message} </p>
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
