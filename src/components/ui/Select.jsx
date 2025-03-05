import React from "react";

const Select = ({
  label,
  error,
  iconLeft,
  iconRight,
  size = "large",
  className = "",
  options = [],
  selectFieldClass = "",
  selectWrapperClass = "",
  selectContainerClass = "position-relative",
  ...props
}) => {
  return (
    <div className={selectWrapperClass}>
      {label && <label className="select-label">{label}</label>}
      <div className={selectContainerClass}>
        {iconLeft && <span className="input-icon">{iconLeft}</span>}
        <select className={selectFieldClass} {...props}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {iconRight && <span className="select-icon right-icon">{iconRight}</span>}
      </div>
      {error && <p className="select-error-text">{error}</p>}
    </div>
  );
};

export default Select;
