import '../App.css';
import React from 'react';
import ShowText from './showText';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main" className="main">
        <ShowText />
        <div id="operations" className="operations">
          <div id="gridDiv" className="grid">
            <tr className="calComp">AC</tr>
            <tr className="calComp">+/-</tr>
            <tr className="calComp">%</tr>
            <tr className="opeComp">%</tr>
            <tr className="calComp">7</tr>
            <tr className="calComp">8</tr>
            <tr className="calComp">9</tr>
            <tr className="opeComp">*</tr>
            <tr className="calComp">4</tr>
            <tr className="calComp">5</tr>
            <tr className="calComp">6</tr>
            <tr className="opeComp">-</tr>
            <tr className="calComp">1</tr>
            <tr className="calComp">2</tr>
            <tr className="calComp">3</tr>
            <tr className="opeComp">+</tr>
            <tr className="calComp num0">0</tr>
            <tr className="calComp">.</tr>
            <tr className="opeComp">=</tr>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
