import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({
  type = "radio",
  name,
  id,
  option1,
  option2,
  onChange,
  value1,
  value2,
  value,
  valid = true,
  errorMsg
}) => (
  <div className="content">
    <label className="field-title">{name} : </label>
    {!valid && <div className="error-msg">{errorMsg}</div>}
    <label htmlFor={id}>
      <input
        className="radioCls"
        type={type}
        value={value1}
        checked={value === value1}
        onChange={onChange}
      />
      {option1}
    </label>
    <label htmlFor={id}>
      <input
        className="radioCls"
        type={type}
        value={value2}
        checked={value === value2}
        onChange={onChange}
      />
      {option2}
    </label>
  </div>
);

RadioButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default RadioButton;
