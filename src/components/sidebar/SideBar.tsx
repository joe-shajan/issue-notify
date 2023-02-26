import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

const repos = [
  { owner: "calcom", repo: "cal.com" },
  { owner: "EddieHubCommunity", repo: "LinkFree" },
  { owner: "excalidraw", repo: "excalidraw" },
  { owner: "freeCodeCamp", repo: "freeCodeCamp" },
  { owner: "github", repo: "docs" },
  { owner: "web-scrobbler", repo: "web-scrobbler" },
  { owner: "react-icons", repo: "react-icons" },
  { owner: "open-telemetry", repo: "opentelemetry.io" },
  { owner: "TanStack", repo: "table" },
  { owner: "t3-oss", repo: "create-t3-app" },
];

const SideBar = () => {
  const { query } = useRouter();

  return (
    <aside className={`scrollbar fixed h-[100%] w-[300px] overflow-scroll`}>
      <ul className="overflow-hidden text-ellipsis whitespace-nowrap">
        {repos.map(({ owner, repo }) => (
          <li key={repo}>
            <Link href={`/issues/${owner}/${repo}`}>
              <p
                className={`p-2 hover:bg-slate-800 ${
                  repo === query.repo ? "bg-slate-800" : ""
                }`}
              >
                {owner} / {repo}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default memo(SideBar);
