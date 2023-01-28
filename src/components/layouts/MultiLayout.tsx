import * as React from "react";
import NavBar from "../navbar/Navbar";

interface IMultiLayoutProps {
  children: React.ReactNode;
}

const MultiLayout: React.FC<IMultiLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      {/* <div>footer</div> */}
    </div>
  );
};

export default MultiLayout;
