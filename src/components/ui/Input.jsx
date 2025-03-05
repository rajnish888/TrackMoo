import React, { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { HiOutlineEyeOff } from "react-icons/hi";


const Input = ({
  label,
  error,
  iconLeft,
  iconRight,
  size = "large",
  className = "",
  type = "text",
  inputFieldClass = "",
  inputWrapperClass = "",
  inputContainerClass = "position-relative",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type dynamically
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={`${inputWrapperClass} ${className}`}>
      {label && <label className="input-label">{label}</label>}
      <div className={inputContainerClass}>
        {iconLeft && <span className="input-icon">{iconLeft}</span>}
        <input className={inputFieldClass} type={inputType} {...props} />
        {type === "password" && iconRight && (
          <span
            className="input-icon right-icon"
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          >
            {showPassword ? <HiOutlineEye  size={24} /> : <HiOutlineEyeOff size={24} />}
          </span>
        )}
      </div>
      {error && <p className="input-error-text">{error}</p>}
    </div>
  );
};

export default Input;
