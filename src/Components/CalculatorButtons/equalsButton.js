import React from 'react';
// import { actions } from '../calculator';

export default function EqualsButton({ calculations, dispatchCalculations}) {

  const handleCalculations = () => {
    if(calculations.operator === "+") {
      dispatchCalculations({ type: actions.EQUALS, result: +(Number(calculations.savedValue) + Number(calculations.currentValue)).toFixed(3) })
    }
  
    if(calculations.operator === "-") {
      dispatchCalculations({ type: actions.EQUALS, result: +(Number(calculations.savedValue) - Number(calculations.currentValue)).toFixed(3) })
    }
  
    if(calculations.operator === "*") {
      dispatchCalculations({ type: actions.EQUALS, result: +(Number(calculations.savedValue) * Number(calculations.currentValue)).toFixed(3) })
    }
  
    if(calculations.operator === "/") {
      dispatchCalculations({ type: actions.EQUALS, result: +(Number(calculations.savedValue) / Number(calculations.currentValue)).toFixed(3) })
    }
  }
  
  return (
    <button className='calculator-button equals' type="button" onClick={handleCalculations}>=</button>
  )
}
