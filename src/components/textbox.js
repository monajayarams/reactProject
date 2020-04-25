import React from "react";
import PropTypes from "prop-types";

const TextBox = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  valid = true,
  errorMsg,
}) => (
  <div className="content">
    <label className="field-title">{name} : </label>
    {!valid && <div className="error-msg">{errorMsg}</div>}
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

TextBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default TextBox;
