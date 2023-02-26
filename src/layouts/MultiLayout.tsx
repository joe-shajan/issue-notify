import * as React from "react";
import NavBar from "../components/navbar/Navbar";

interface IMultiLayoutProps {
  children: React.ReactNode;
}

const MultiLayout: React.FC<IMultiLayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen bg-slate-900">{children}</main>
      {/* <div>footer</div> */}
    </div>
  );
};

export default MultiLayout;
