import React, { Component } from "react";

class TableData extends React.Component {
  render() {
    //const { auserinfo } = this.props;
    const auserinfo = this.props.items;
    // console.log("Data", auserinfo);
    //const { userData, singleUserData } = this.state;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Std</th>
              <th>Age</th>
              <th>Grade</th>
              <th>city</th>
              <th>Gender</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {auserinfo?.map((item, index) => {
              return (
                <tr onClick={() => this.props.handleClick(item)}>
                  <td>{item?.name}</td>
                  <td>{item?.std}</td>
                  <td>{item?.age}</td>
                  <td>{item?.city}</td>
                  <td>{item?.Gender}</td>
                  <td>{item?.Color}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableData;
