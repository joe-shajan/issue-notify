import * as React from "react";
import NavBar from "../components/navbar/Navbar";

interface IMultiLayoutProps {
  children: React.ReactNode;
}

const MultiLayout: React.FC<IMultiLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />
      <main>{children}</main>
      {/* <div>footer</div> */}
    </div>
  );
};

export default MultiLayout;
