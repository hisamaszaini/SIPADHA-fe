import React, { type ReactNode } from "react";
import { PlusIcon, CheckIcon, UserPlusIcon, FileText } from "lucide-react";

interface ButtonCardProps {
  label: string;
  icon: ReactNode;
  variant?: "emerald" | "blue" | "purple" | "orange";
  onClick?: () => void;
}

const gradientVariants: Record<
  NonNullable<ButtonCardProps["variant"]>,
  string
> = {
  emerald: "from-emerald-500 to-emerald-600",
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  orange: "gradient-orange",
};

const ButtonCard: React.FC<ButtonCardProps> = ({
  label,
  icon,
  variant = "emerald",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-xl text-white shadow-lg bg-gradient-to-br ${gradientVariants[variant]} 
        transform transition-transform duration-200 hover:scale-105 hover:opacity-90`}
    >
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
};

export default ButtonCard;
