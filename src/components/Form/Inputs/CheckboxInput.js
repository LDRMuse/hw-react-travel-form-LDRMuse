import PropTypes from "prop-types"
import React from "react"

export const CheckboxInput = ({handler, checked, name}) =>{



  const handleChange = (event) => {
    handler(event)
  }


    return (
      <div className='field   has-text-centered is-success'>
      <div className="control">
      <input
      className='checkbox'
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      </div>
    </div>

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
