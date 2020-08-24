import PropTypes from "prop-types";
import React from "react";

import { CheckboxInput } from "./CheckboxInput"

export const RadioInput = ({ value, name, checked, handleChange }) => {


  return (
    <div className='control has-text-centered'>
    <input
      className="radio"
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={handleChange}
    />
    </div>
  );

}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
