import React from 'react'
import { actions } from '../../App'

export default function ClearButton({ dispatchCalculations} ) {
  return (
    <button className='calculator-button clear' type='button' onClick={() => dispatchCalculations({ type: actions.CLEAR })}>C</button>
  )
}