import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({value}) => {
  const [counter, setCounter] = useState(value)

  const handleAdd       = () => setCounter(prev => prev + 1)
  const handleSubstract = () => setCounter(prev => prev - 1)
  const handleReset     = () => setCounter(value)

  return (
    <>
      <h1>Counter App</h1>

      <h2>{counter}</h2>

      <button aria-label="btn-add" onClick={handleAdd} >+1</button>
      <button aria-label="btn-reset" onClick={handleReset} >Reset</button>
      <button aria-label="btn-substract" onClick={handleSubstract} >-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}