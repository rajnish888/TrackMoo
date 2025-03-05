import React from "react";

const Button = ({ variant = "dark", children, className = "", disabled = false, ...props }) => {
  return (
    <button 
      className={`${variant === "dark" ? "dark-btn" : "light-btn"} ${className} ${disabled ? "disabled-btn disabled" : ""}`} 
      disabled={disabled} 
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
