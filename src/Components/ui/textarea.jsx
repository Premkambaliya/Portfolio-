import React from "react";

export const Textarea = React.forwardRef(({ className = "", ...props }, ref) => {
  const baseClassName = "w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";
  
  return (
    <textarea
      ref={ref}
      className={`${baseClassName} ${className}`.trim()}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
