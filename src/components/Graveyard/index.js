import React, { Component } from 'react';
import GraveStone from '../GraveStone';

class Graveyard extends Component {
  render() {
    // const { students } = this.props;
    const deadStudents = (students) => students.map((student) => <GraveStone key={ student.id } student={student} />);
    return (<div className="Graveyard card-container">
            { deadStudents() }
        </div>);
  }
}

export default Graveyard;
