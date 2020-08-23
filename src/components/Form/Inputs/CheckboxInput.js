import PropTypes from "prop-types"
import React from "react"

export const CheckboxInput = ({handler, checked, name}) =>{



  const handleChange = (event) => {
    handler(event)
  }


    return (
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
    )
  }


CheckboxInput.propTypes = {
  handler: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

CheckboxInput.defaultProps = {
  checked: false,
}
