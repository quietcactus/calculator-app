import React from 'react';
// import { actions } from '../calculator';

const OperatorButtons = ({ dispatchCalculations }) => {
  return (
    <>
      <button className='calculator-button add' type="button" onClick={() => dispatchCalculations({ type: actions.OPERATOR, operator: "+" })}>+</button>
      <button className='calculator-button sub' type="button" onClick={() => dispatchCalculations({ type: actions.OPERATOR, operator: "-" })}>-</button>
      <button className='calculator-button divide' type="button" onClick={() => dispatchCalculations({ type: actions.OPERATOR, operator: "/" })}>/</button>
      <button className='calculator-button multiply' type="button" onClick={() => dispatchCalculations({ type: actions.OPERATOR, operator: "*" })}>x</button>
    </>
  );
}

export default OperatorButtons;