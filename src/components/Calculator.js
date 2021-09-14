import '../App.css';
import React from 'react';

class ShowText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="showData">
        <p>
          {' '}
          {result}
          {' '}
        </p>
      </div>
    );
  }
}

const GridDiv = () => (
  <div id="gridDiv" className="grid">
    <tr className="calComp">AC</tr>
    <tr className="calComp">+/-</tr>
    <tr className="calComp">%</tr>
    <tr className="opeComp">+</tr>
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
);

const DivOperations = () => (
  <div id="operations" className="operations">
    <GridDiv />
  </div>
);

function Calculator() {
  return (
    <div id="main" className="main">
      <ShowText />
      <DivOperations />
    </div>
  );
}

export default Calculator;
