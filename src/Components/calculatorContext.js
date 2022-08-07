import React, { useContext, useReducer } from 'react';

const CalcluatorContext = React.createContext();
// const InputChangesContext = React.createContext();

export const useCalculations = () => {
  return useContext(CalcluatorContext.calculations);
}

export const useDispactchCalculations = () => {
  return useContext(CalcluatorContext.dispatchCalculations);
}

export const useActions = () => {
  return useContext(CalcluatorContext.actions);
}

export const useHandleInputChanges = () => {
  return useContext(CalcluatorContext.handleInputChanges);
}

export const CalculatorContextProvider = ({ children }) => {
  const actions = {
    UPDATE_VALUE: 'update-value',
    CLEAR: 'clear',
    OPERATOR: 'operator',
    ADD: 'add',
    SUBTRACT: 'subtract',
    MULTIPLY: 'multiply',
    DIVIDE: 'divide',
    EQUALS: 'equals'
  }
  
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

  const [calculations, dispatchCalculations] = useReducer(calculationReducer, {
    currentValue: '',
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
    <CalcluatorContext.Provider value={{
      actions: actions,
      calculations: calculations,
      dispatchCalculations: dispatchCalculations,
      handleInputChanges: handleInputChanges }}>
      { children }
    </CalcluatorContext.Provider>
  )
}