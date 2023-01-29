import * as React from "react";
import NavBar from "../navbar/Navbar";

interface IMultiLayoutProps {
  children: React.ReactNode;
}

const MultiLayout: React.FC<IMultiLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="bg-slate-900">{children}</main>
      {/* <div>footer</div> */}
    </div>
  );
};

export default MultiLayout;
