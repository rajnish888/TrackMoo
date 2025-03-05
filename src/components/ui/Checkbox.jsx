import React, { useState } from "react";


const Checkbox = ({ label, className = "" }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={`checkbox-wrapper ${className}`}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange} 
        className="hidden-checkbox" 
      />
      <span className="custom-checkbox">
        <span className="checkmark">{checked && "✔"}</span>
      </span>
      <span className="checkbox-label">{label}</span>
    </label>
  );
};

export default Checkbox;
