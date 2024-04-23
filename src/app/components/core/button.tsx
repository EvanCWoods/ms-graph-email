import Link from "next/link";
import React from "react";
import { cn } from "~/utils/cn";

interface IButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  redirectUrl: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  text,
  size,
  variant = "primary",
  redirectUrl,
  className,
}) => {
  // Define size classes
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Define variant classes using the provided brand colors
  const variantClasses = {
    primary: `text-[#fff] shadow-md hover:shadow-lg`,
    secondary: `bg-brand-orange text-[#fff] shadow-md hover:shadow-lg`,
    // Adjust the tertiary variant as needed
    tertiary: "bg-white text-[#EA580C] shadow-md hover:shadow-lg",
  };

  // Combine classes based on props
  const classes = `rounded ${size ? sizeClasses[size] : ""} ${variantClasses[variant]}`;

  return (
    <Link href={redirectUrl} className={cn(classes, className)}>
      {text}
    </Link>
  );
};

export default Button;
