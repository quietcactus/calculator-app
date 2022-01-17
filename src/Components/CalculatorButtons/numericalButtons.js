import React from 'react'
import { actions } from '../../App';

const numberButtons = [
  ['nine', 9],
  ['eight', 8],
  ['seven', 7],
  ['six', 6],
  ['five', 5],
  ['four', 4],
  ['three', 3],
  ['two', 2],
  ['one', 1],
  ['zero', 0]
]; 

export default function NumericalButtons({ dispatchCalculations }) {
  return (
    <>
      {numberButtons.map((numberButton, i) => <button className={`calculator-button ${numberButton[0]}`} type='button' key={Math.random()} onClick={() => dispatchCalculations({ type: actions.UPDATE_VALUE, val: `${numberButton[1]}` })}>{numberButton[1]}</button>)}
    </>
  )
}