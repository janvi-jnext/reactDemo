import React, { Component } from "react";

class TableData extends React.Component {
  render() {
    //const { auserinfo } = this.props;
    const auserinfo = this.props.items;

    //const showclickdata = this.props;

    // console.log("Data", auserinfo);
    //const { userData, singleUserData } = this.state;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Std</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {auserinfo?.map((item, index, id) => {
              return (
                // <tr onClick={() => this.props.handleClick(item)}>

                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.std}</td>
                  <td>{item?.age}</td>
                  <td>{item?.Grade}</td>
                  <td>{item?.city}</td>
                  <td>{item?.Gender}</td>
                  <td>{item?.Color}</td>
                  <button
                    href="#"
                    name="btnname"
                    onClick={() => this.props.removeItem(index, item)}
                  >
                    [X]
                  </button>
                  <button onClick={(e) => this.props.editItem(item)}>
                    Edit
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button
          type="Submit"
          className="sub-btn"
          value="submit"
          onClick={() => this.props.showclickdata()}
        >
          Add
        </button> */}
      </div>
    );
  }
}
export default TableData;
