import React from 'react'
import PropTypes from 'prop-types'

const InputBox = ({type, handleKeyDown, handleChange, handleFocus, name, inputRef, inputProps}) => {
  return (
    <input
      {...inputProps}
      type={type}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleFocus}
      maxLength='1'
      name={name}
      ref={inputRef}
    />
  )
  
}

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleKeyDown: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  inputRef: PropTypes.func,
  inputProps: PropTypes.object
}

export default InputBox
