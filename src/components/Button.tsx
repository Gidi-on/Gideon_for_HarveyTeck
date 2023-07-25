import classnames from "classnames";
import React from "react";

type ButtonProps = {
  secondary?: boolean;
  primary?: boolean;
  children: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  onClick,
  children,
}) => {
  const buttonClasses = classnames(
    "border-2 border-primary px-10 py-1.5 md:py-2 mt-2 md:mt-4 lg:px-7 rounded-2xl lg:rounded-[2rem] text-xs lg:text-lg lg:font-medium",
    {
      "bg-primary text-white hover:text-primary hover:bg-white": primary,
      "bg-white text-primary hover:text-white hover:bg-primary": secondary,
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
