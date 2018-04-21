import React from 'react'

const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid red'
  }
  return (
    <div>
      New Person: <input
       style={inputStyle}
       type='text'
       onChange={props.changeHandler}
       value={props.userName} />
    </div>
  )
}

export default UserInput
