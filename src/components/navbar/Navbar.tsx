import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-slate-100">
      <div className="flex h-16 items-center justify-around">
        <div className="flex items-center">
          <Image
            src="/logo.jfif"
            alt="logo"
            width="42"
            height="42"
            className="rounded"
          />
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink path={router.pathname} url={"/"} name={"Home"} />
            <NavLink path={router.pathname} url={"/issues"} name={"Issues"} />
          </div>
        </div>
        <div className="">
          <button
            className="rounded-lg bg-gray-800 p-2 "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Image
              src={
                session?.user?.image
                  ? session?.user?.image
                  : "https://ionicframework.com/docs/img/demos/avatar.svg"
              }
              alt="logo"
              width="24"
              height="24"
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
