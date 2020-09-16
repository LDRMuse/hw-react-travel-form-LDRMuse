import PropTypes from "prop-types";
import React, {Fragment} from "react";

import './form.css'

export const Input = ({ id, placeholder, type, inputHandler }) => {



  const handleChange = (event) => {
    inputHandler(event)
  }


  return (
    <Fragment>
    <label className="label"></label>
      <div className='field has-text-centered'>
        <div className="control">
        <input className='input is-primary' type={type} id={id} placeholder={placeholder} onChange={handleChange} />
        </div>
      </div>
      </Fragment>
  );
}



Input.propTypes = {
  inputHandler: PropTypes.func,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = {
  placeholder: ""
}
