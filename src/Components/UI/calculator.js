import styled from 'styled-components';

const Calculator = styled.form `
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px 100px;
  gap: 0px 0px;
  grid-auto-flow: row;
  margin: 0 auto;
  grid-template-areas:
    "input input input input"
    "clear zero equals add"
    "seven eight nine sub"
    "four five six multiply"
    "one two three divide"; 
  width: 400px;
  margin-top: 50px;

  .calculator-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 30px;
    margin: 0;
    color: #000;
    /* outline: 1px solid; */
    border: 1px solid #3D5A80; 
    margin-top: -1px;
    margin-left: -1px;
    cursor: pointer;
    background-color: #E0FBFC;
    color: #293241;
    transition: box-shadow 0.2s ease;
  }

  .calculator-button:hover,
  .calculator-button:focus {
    box-shadow: rgba(152, 193, 217, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input {
    grid-area: input;
    text-align: right;
    font-size: 40px;
    font-weight: 700;
    color: #E0FBFC;
    background-color: #3D5A80;
    border: 1px solid #3D5A80;
    border-radius: 0;
  }

  .clear {
    grid-area: clear;
    border-right: 0;
  }

  .equals {
    grid-area: equals;
  }

  .add {
    grid-area: add;
  }

  .sub {
    grid-area: sub;
  }

  .divide {
    grid-area: divide;
  }

  .multiply {
    grid-area: multiply;
  }

  .nine {
    grid-area: nine;
  }

  .eight {
    grid-area: eight;
  }

  .seven {
    grid-area: seven;
  }

  .six {
    grid-area: six;
  }

  .five {
    grid-area: five;
  }

  .four {
    grid-area: four;
  }

  .one {
    grid-area: one;
  }

  .two {
    grid-area: two;
  }

  .three {
    grid-area: three;
  }
`
export default Calculator;