import React from "react";
import PropTypes from "prop-types";

import "./Filter.scss";

const Filter = ({ value, onChange }) => (
  <label className="filter__label">
    Find contacts by name
    <input
      className="filter__input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
