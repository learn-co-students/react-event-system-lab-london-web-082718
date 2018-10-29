import React from 'react'

const Keypad = () => {

  const cb = () => console.log('Entering password...')
  return <input type="password" onKeyUp={cb}></input>

}

export default Keypad