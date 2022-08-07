import React, { useContext } from 'react'
// import { actions } from '../calculator';

export default function ClearButton({ dispatchCalculations} ) {
  return (
    <button className='calculator-button clear' type='button' onClick={() => dispatchCalculations({ type: actions.CLEAR })}>C</button>
  )
}