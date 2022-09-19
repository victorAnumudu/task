import React from 'react'

import {InputStyle} from './styles/Form.style'

const InputForm = ({type, min, value, onchange}) => {
  return (
    <InputStyle type={type} min={min} value={value} onChange={(e)=>onchange(e)}/>
  )
}

export default InputForm