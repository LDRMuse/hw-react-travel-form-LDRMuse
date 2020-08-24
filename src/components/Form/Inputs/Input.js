import PropTypes from "prop-types";
import React, {Fragment} from "react";

import './form.css'

export const Input = ({ name, placeholder, inputHandler }) => {



  const handleChange = (event) => {
    inputHandler(event)
  }


  return (
    <Fragment>
    <label className="label"></label>
      <div className='field has-text-centered'>
        <div className="control">
        <input className='input is-primary' id='search' type="text" name={name} placeholder={placeholder} onChange={handleChange} />
        </div>
      </div>
      </Fragment>
  );
}



Input.propTypes = {
  inputHandler: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  placeholder: ""
}
