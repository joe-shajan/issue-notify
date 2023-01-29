import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";
import { useState } from "react";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-slate-100">
      <div className="flex h-16 items-center justify-around">
        <div className="flex items-center">
          <img
            src="./logo.jfif"
            alt="logo"
            className="square-full mr-4 h-8 w-8"
          />
          <div className="relative">
            <Link href="/" as="/">
              <button className="rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900">
                Home
              </button>
            </Link>
            <Link href="/issues" as="/issues">
              <button className="rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900">
                Issues Page
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <button
            className="rounded-lg bg-gray-800 p-2 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={session?.user?.image ? session?.user?.image : "./logo.jfif"}
              alt="logo"
              className="mr-4 h-8 w-8 rounded-full"
            />
          </button>
          <div className={`absolute ${isOpen ? "block" : "hidden"}`}>
            <ul className="rounded-lg bg-gray-800 py-2 text-white">
              {session?.user?.name ? (
                <button
                  className="w-20 rounded p-2 hover:bg-gray-700 "
                  onClick={() => void signOut()}
                >
                  Sign out
                </button>
              ) : (
                <button
                  className="w-20 rounded p-2 hover:bg-gray-700"
                  onClick={() => void signIn()}
                >
                  Sign in
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
