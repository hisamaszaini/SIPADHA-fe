import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  helpText?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  id,
  label,
  error,
  helpText,
  type = "text",
  className,
  ...rest
}) => {
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;

  const describedByIds = [];
  if (helpText) describedByIds.push(helpId);
  if (error) describedByIds.push(errorId);
  const ariaDescribedBy =
    describedByIds.length > 0 ? describedByIds.join(" ") : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-medium text-white/90"
      >
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          id={id}
          type={type}
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy}
          className={`w-full pl-3 pr-3 py-3 rounded-md transition-all
            bg-white/10 border border-white/30 text-white placeholder-white/60
            focus:outline-none focus:ring-2 focus:ring-white/50
            ${error ? "border-red-500 ring-red-500 focus:ring-red-500" : ""}
            ${className || ""}`}
          {...rest}
        />
      </div>

      {helpText && !error && (
        <p id={helpId} className="text-gray-400 text-sm mt-2">
          {helpText}
        </p>
      )}

      {error && (
        <div className="mt-2">
          <p
            id={errorId}
            className="text-red-500 text-sm"
            role="alert"
          >
            {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthInput;
