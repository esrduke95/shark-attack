import React, { Component } from 'react';

class LivingStudents extends Component {
  render() {
    const { student } = this.props;
    return (<div className="card LivingStudent text-white fas fa-fish">
        <div className="card-body">
          <h4 className="itsAlive">{ student.firstName } { student.lastName }</h4>
          </div>
      </div>);
  }
}

export default LivingStudents;
