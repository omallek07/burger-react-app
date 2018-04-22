import React from 'react'

const InputValidation = (props) => {
  let inputMessage = 'This works!'

  if (props.str.length < 5) {
    inputMessage = 'Text is too short!'
  } else if (props.str.length > 15) {
    inputMessage = 'Text is too long!'
  }

  return (
    <div>{inputMessage}</div>
  )
}

export default InputValidation
