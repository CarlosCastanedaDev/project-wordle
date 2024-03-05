import React, { useState } from 'react';

function FormInput() {
  const [guess, setGuess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }} />
    </form>
  )
}

export default FormInput;
