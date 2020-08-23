import PropTypes from "prop-types";
import React from "react";

export const Input = ({ name, placeholder, inputHandler}) => {



  const handleChange = (event) => {
    inputHandler(event)
  }


    return <input type="text" name={name} placeholder={placeholder} onChange={handleChange}/>;
}


Input.propTypes = {
  inputHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
    placeholder: ""
}
