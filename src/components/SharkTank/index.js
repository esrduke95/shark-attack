import React, { Component } from 'react';
import LivingStudents from '../LivingStudents';

class SharkTank extends Component {
  render() {
    const { students } = this.props;
    const tankStudents = () => {
      const tank = students.map((student) => <LivingStudents key={ student.id } student={student} />);
      return tank;
    };
    return (<div className="shark-tank card-container">
        { tankStudents() }
        </div>);
  }
}

export default SharkTank;
