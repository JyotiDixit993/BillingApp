import React from 'react'
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  return (
    <div>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br></br>
      <label>Enter your last name:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </label>
    </div>
  )
}

export default Form
