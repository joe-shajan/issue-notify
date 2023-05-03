import type { ReactNode } from "react";
import SideBar from "../components/sidebar";

type Props = {
  children: ReactNode;
};

const IssueLayout = ({ children }: Props) => {
  return (
    <div className="flex text-white">
      <SideBar />
      {children}
    </div>
  );
};

export default IssueLayout;
