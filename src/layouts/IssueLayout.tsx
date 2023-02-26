import type { ReactNode } from "react";
import SideBar from "../components/sidebar/SideBar";

type Props = {
  children: ReactNode;
  sideBarWidth: string;
};

const IssueLayout = ({ sideBarWidth, children }: Props) => {
  return (
    <div className="flex text-white">
      <SideBar sideBarWidth={sideBarWidth} />
      {children}
    </div>
  );
};

export default IssueLayout;
