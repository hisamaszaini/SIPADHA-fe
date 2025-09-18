import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  helpText?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  error,
  helpText,
  type = 'text',
  className,
  ...rest
}) => {
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;

  const describedByIds = [];
  if (helpText) describedByIds.push(helpId);
  if (error) describedByIds.push(errorId);
  const ariaDescribedBy = describedByIds.length > 0 ? describedByIds.join(' ') : undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy}
        className={`w-full px-4 py-3 bg-white border rounded-md text-gray-900 focus:outline-none focus:ring-2 transition-colors duration-200 ${error
          ? 'border-red-500 ring-red-500 focus:border-red-500'
          : 'border-blue-300 focus:ring-emerald-500 focus:border-emerald-500'
          } ${className || ''}`}
        {...rest}
      />

      {helpText && !error && (
        <p id={helpId} className="text-gray-500 text-sm mt-1">
          {helpText}
        </p>
      )}

      {error && (
        <p id={errorId} className="text-red-600 text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;