import React, { useReducer } from 'react';
import './App.css';
import Calculator from './Components/UI/calculator';
import ClearButton from './Components/CalculatorButtons/clearButton';
import EqualsButton from './Components/CalculatorButtons/equalsButton';
import OperatorButtons from './Components/CalculatorButtons/operatorButtons';
import NumericalButtons from './Components/CalculatorButtons/numericalButtons';

export const actions = {
  UPDATE_VALUE: 'update-value',
  CLEAR: 'clear',
  OPERATOR: 'operator',
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
  EQUALS: 'equals'
}

// Reducer funciton does not need to interact with anything defined inside the component function
// So it can be defined outside of the component
const calculationReducer = (calculations, action) => {
  switch (action.type) {
    case actions.UPDATE_VALUE:
      return {
        ...calculations,
        currentValue: calculations.currentValue + action.val
      };
    case actions.CLEAR:
      return { 
        currentValue: '',
        savedValue: '',
        result: '',
        operator: ''
      };
    case actions.OPERATOR:
      return {
        ...calculations,
        currentValue: '',
        operator: action.operator,
        savedValue: calculations.currentValue
      };
    case actions.EQUALS:
      return { 
        ...calculations, 
        currentValue: action.result,
        result: action.result,
        operator : ''
      };
    default:
      return calculations;
  }
};

function App() {

  const [calculations, dispatchCalculations] = useReducer(calculationReducer, {
    currentValue: '0',
    savedValue: '0',
    result: '0',
    operator: '+',
  });

  const handleInputChanges = (e) => {
    if(calculations.result !== null) {
      console.log("clear?");
      dispatchCalculations({ type: actions.CLEAR });
      dispatchCalculations({ type: actions.UPDATE_VALUE, val: e.target.value});
    }
    else {
      dispatchCalculations({ type: actions.UPDATE_VALUE, val: e.target.value});
    }
  }

  return (
    <div className="App">
      {console.log("currentvalue " + calculations.currentValue)}
      {console.log("savedvalue " + calculations.savedValue)}
      {console.log("result " + calculations.result)}
      {console.log("operator " + calculations.operator)}
      {console.log("___________________________________")}
      <Calculator>
        <input className='input' readOnly type='number' value={calculations.currentValue} onChange={handleInputChanges} maxLength='10'/>
        <ClearButton calculations={calculations} dispatchCalculations={dispatchCalculations}/>
        <EqualsButton calculations={calculations} dispatchCalculations={dispatchCalculations}/>
        <OperatorButtons dispatchCalculations={dispatchCalculations}/>
        <NumericalButtons dispatchCalculations={dispatchCalculations}/>
      </Calculator>
    </div>
  );
}

export default App;