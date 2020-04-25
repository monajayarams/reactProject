import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";

const CheckboxList = ({
  name,
  items,
  value,
  onChange,
  valid = true,
  errorMsg,
}) => (
  <div className="content">
    <label className="field-title">{name} : </label>
    {!valid && <div className="error-msg">{errorMsg}</div>}
    {items.map((item) => (
      <label key={item.key}>
        <Checkbox
          name={item.name}
          checked={value.get(item.name)}
          onChange={onChange}
        />
        {item.label}
      </label>
    ))}
  </div>
);

CheckboxList.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  value: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired,
  valid: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default CheckboxList;
