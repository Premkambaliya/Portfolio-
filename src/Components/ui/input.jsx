import React from "react";

export const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => {
  const baseClassName = "w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";
  
  return (
    <input
      type={type}
      ref={ref}
      className={`${baseClassName} ${className}`.trim()}
      {...props}
    />
  );
});

Input.displayName = "Input";
