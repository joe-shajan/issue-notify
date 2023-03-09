import type { ReactNode } from "react";
import { useState, useEffect } from "react";

type Modal = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: Modal) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser && isOpen) {
    return (
      <div className=" fixed top-0 left-0 h-[100%] w-[100%]">
        <div
          className="z-4 h-full w-full rounded-md bg-black bg-opacity-20 bg-clip-padding backdrop-blur-sm backdrop-filter"
          onClick={onClose}
        />
        <div className="z-5 fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform">
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export { Modal };
