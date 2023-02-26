import Link from "next/link";
import { memo } from "react";

type SideBar = {
  sideBarWidth: string;
};

const SideBar = ({ sideBarWidth }: SideBar) => {
  return (
    <aside className={`fixed h-[100%] w-[${sideBarWidth}] border`}>
      <ul>
        <li>
          <Link href={"/issues/cal"}>cal.com</Link>
        </li>
        <li>
          <Link href={"/issues/linkfree"}>linkfree</Link>
        </li>
      </ul>
    </aside>
  );
};

export default memo(SideBar);
