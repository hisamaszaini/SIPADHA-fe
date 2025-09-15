import React, { type ReactNode } from "react";

interface ButtonCardProps {
  label: string;
  icon: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  onClick?: () => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ label, icon, gradientFrom = "emerald-500", gradientTo = "emerald-600", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} rounded-xl text-white hover-scale shadow-lg`}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
};

export default ButtonCard;