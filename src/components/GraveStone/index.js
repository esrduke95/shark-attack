import React, { Component } from 'react';

class GraveStone extends Component {
  render() {
    const { student } = this.props;
    return (<div className="card GraveStone">
        <div className="card-body">
          <h3 className="card-text RIP">Rest in Peace { student.firstName } { student.lastName }</h3>
        </div>
      </div>);
  }
}

export default GraveStone;
