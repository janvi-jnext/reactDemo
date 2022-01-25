import React, { Component } from "react";

class SingleuserData extends React.Component {
  render() {
    var { singleUservalue } = this.props;
    return (
      <div>
        <h2>{singleUservalue.name}</h2>
        <h3>{singleUservalue.std}</h3>
        <h3>{singleUservalue.age}</h3>
        <h3>{singleUservalue.Grade}</h3>
      </div>
    );
  }
}
export default SingleuserData;
