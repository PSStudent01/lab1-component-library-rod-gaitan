// components/AlertBox/AlertBox.tsx
import React from 'react';
//import { AlertBoxProps } from '../../types'; // creates error" "'AlertBoxProps' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled."
import type { AlertBoxProps } from '../../types';

/*
This component displays styled alert messages with 4 different types:
-success (green) 
-error (red)  
-warning (yellow)
-info (blue)

 Example usage:
 <AlertBox type="success" message="Saved" />
 <AlertBox type="error" message="Error"  />
 <AlertBox type="warning" message="Warning" />
 </AlertBox>

  Special handling:
 -type prop determines color of each success status.

 */
export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children,
}) => {

  // here we're mapping each alert type to its Tailwind CSS color class
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700'
  };

  return (
    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        {/* alert message */}
        <p>{message}</p>
        {/* if onClose prop is passed from parent to child, (onClose callback is provided), then 'Close' button will render */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}
      </div>
      {children}
    </div>
  );
};