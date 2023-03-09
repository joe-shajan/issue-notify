import type { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  varient?: "sm" | "md" | "lg";
};

const Button = ({ onClick, children, varient }: Props) => {
  let buttonVarient = "py-1 px-2 text-sm";

  if (varient && varient === "sm") {
    buttonVarient = "py-1 px-2 text-xs";
  }
  if (varient && varient === "lg") {
    buttonVarient = "py-2 px-4 text-md";
  }

  return (
    <button
      className={`rounded bg-[#238636] ${buttonVarient} font-semibold capitalize`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
