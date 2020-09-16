import PropTypes from "prop-types"
import React from "react"

export const CheckboxInput = ({handler, checked, id, label}) =>{



  const handleChange = (event) => {
    handler(event)
  }


    return (
      <div className='field   has-text-centered is-success'>
      <div className="control">
      <input
      className='checkbox'
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      {label}
      </div>
    </div>

    )
  }





CheckboxInput.propTypes = {
  handler: PropTypes.func,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
}

CheckboxInput.defaultProps = {
  checked: false,
}
