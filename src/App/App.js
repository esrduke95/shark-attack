import React from 'react';
import './App.scss';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';

class App extends React.Component {
  state = {
    theyGonnaDie: studentData.dearlyBeloved(),
    fortunateOnes: studentData.liveStudents(),
  };

  tank = () => {
    this.setState({
      theyGonnaDie: studentData.dearlyBeloved(),
      fortunateOnes: studentData.liveStudents(),
    });
  };

  sharkAttack = () => {
    if (this.state.theyGonnaDie.length) {
      const victim = this.state.theyGonnaDie[
        Math.floor(Math.random() * Math.floor(this.state.theyGonnaDie.length))
      ].id;
      studentData.followTheLight(victim);
    }
    this.tank();
  };

  render() {
    return (
      <div className='App'>
        <button className='btn btn-danger my-2' onClick={this.sharkAttack}>
          SHARK!
        </button>
        <Graveyard
          key={this.state.theyGonnaDie.id}
          dearlyBeloved={this.state.theyGonnaDie}
        />
        <SharkTank
          key={this.state.fortunateOnes.id}
          liveStudents={this.state.fortunateOnes}
        />
      </div>
    );
  }
}

export default App;
