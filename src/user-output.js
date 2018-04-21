import React from 'react'

const UserOutput = (props) => {

    const style = {
      backgroundColor: 'beige',
      width: '60%',
      margin: '16px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center'
    }

    return (
      <div style={style}>
      <p>This is a story about {props.userName}</p>
      <p>{props.userName} is funny</p>
      </div>
    )
}

export default UserOutput
