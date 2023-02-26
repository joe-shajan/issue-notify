import Link from "next/link";
import * as React from "react";

interface INavLinkProps {
  path: string;
  url: string;
  name: string;
}

const NavLink: React.FC<INavLinkProps> = ({ path, url, name }) => {
  const navPath = path.split("/")[1];
  const navUrl = url.split("/")[1];
  return (
    <Link
      href={url}
      aria-current="page"
      className={`rounded-lg p-2 text-white hover:bg-gray-700 ${
        navPath === navUrl ? "bg-gray-900" : "bg-gray-800"
      }`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
