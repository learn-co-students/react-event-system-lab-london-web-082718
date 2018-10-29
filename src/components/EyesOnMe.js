import React from 'react'

const EyesOnMe = () => {

  const focusHandler = () => console.log('Good!')
  const blurHandler = () => console.log('Hey! Eyes on me!')

  return <button onFocus={focusHandler} onBlur={blurHandler}>Button</button>

}

export default EyesOnMe