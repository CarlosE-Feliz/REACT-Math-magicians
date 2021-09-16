/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import '../App.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculation, setCalculation] = useState({ total: 0, next: null, operation: null });
  const { next, total, operation } = calculation;

  const handleEvent = (e) => {
    e.preventDefault();
    setCalculation((prev) => calculate(prev, e.target.name));
  };

  const showTotal = () => {
    if (total === 0 && next === null) {
      return 0;
    }

    if (total !== 0 && total !== null) {
      return total;
    }
    return '';
  };
  return (
    <div id="main" className="main">
      <h3>Math Magicians</h3>
      <form name="form">
        <input type="text" id="result" value={(showTotal()) + (operation || '') + (next || '')} disabled />
      </form>
      <div id="operations" className="operations">
        <div id="gridDiv" className="grid">
          <button type="button" onClick={handleEvent} name="AC" className="calComp">AC</button>
          <button type="button" onClick={handleEvent} name="+/-" className="calComp">+/-</button>
          <button type="button" onClick={handleEvent} name="%" className="calComp">%</button>
          <button type="button" onClick={handleEvent} name="÷" className="opeComp">÷</button>
          <button type="button" onClick={handleEvent} name="7" className="calComp">7</button>
          <button type="button" onClick={handleEvent} name="8" className="calComp">8</button>
          <button type="button" onClick={handleEvent} name="9" className="calComp">9</button>
          <button type="button" onClick={handleEvent} name="*" className="opeComp">*</button>
          <button type="button" onClick={handleEvent} name="4" className="calComp">4</button>
          <button type="button" onClick={handleEvent} name="5" className="calComp">5</button>
          <button type="button" onClick={handleEvent} name="6" className="calComp">6</button>
          <button type="button" onClick={handleEvent} name="-" className="opeComp">-</button>
          <button type="button" onClick={handleEvent} name="1" className="calComp">1</button>
          <button type="button" onClick={handleEvent} name="2" className="calComp">2</button>
          <button type="button" onClick={handleEvent} name="3" className="calComp">3</button>
          <button type="button" onClick={handleEvent} name="+" className="opeComp">+</button>
          <button type="button" onClick={handleEvent} name="0" className="calComp num0">0</button>
          <button type="button" onClick={handleEvent} name="." className="calComp">.</button>
          <button type="button" onClick={handleEvent} name="=" className="opeComp">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
