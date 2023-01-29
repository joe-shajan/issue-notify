import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="bg-gray-800 text-slate-100">
      <div className="flex h-16 items-center justify-around">
        <div>
          {session?.user?.name ? (
            <p>
              Welcome <b>{session?.user?.name}</b> to Issue Notify
            </p>
          ) : (
            <p> Welcome please Sign In</p>
          )}
        </div>
        {session?.user?.name ? (
          <button
            className="rounded p-2 hover:bg-gray-700"
            onClick={() => void signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="rounded p-2 hover:bg-gray-700"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
