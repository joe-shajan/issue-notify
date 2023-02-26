import Link from "next/link";
import { memo } from "react";

const SideBar = () => {
  return (
    <aside className="w-44 border">
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
