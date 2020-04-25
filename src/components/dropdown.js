import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, selectedValue, onChange, valid = true, errorMsg }) => (
  <div className="content">
    <label className="field-title">{name} : </label>
    {!valid && <div className="error-msg">{errorMsg}</div>}
    <select value={selectedValue} onChange={onChange}>
      <option value="">Select...</option>
      <option value="Less than 1 year">{"< 1 year"}</option>
      <option value="1-3 years">{"1-3 years"}</option>
      <option value="3-5 years">{"3-5 years"}</option>
      <option value="5-7 years">{"5-7 years"}</option>
      <option value="7+ years">{"7+ years"}</option>
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default Select;
