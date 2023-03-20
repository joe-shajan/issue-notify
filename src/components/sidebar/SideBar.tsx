import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";
import useModal from "../../custom-hooks/useModal";
import AddNewRepository from "../AddNewRepository";
import Button from "../Button";

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
  const { Modal, openModal, closeModal } = useModal();

  return (
    <>
      <aside
        className={`scrollbar fixed h-[100%] w-[300px] overflow-scroll border-r-[1px] border-slate-700 px-4`}
      >
        <div className="mb-2 flex justify-end border-b-[1px] border-slate-700 py-4">
          <Button onClick={openModal}>add new repo</Button>
        </div>
        <ul className="overflow-hidden text-ellipsis whitespace-nowrap">
          {repos.map(({ owner, repo }) => (
            <li
              key={repo}
              className={`ease my-1 rounded-md p-2 transition hover:bg-slate-800 ${
                repo === query.repo ? "bg-slate-800" : ""
              }`}
            >
              <Link href={`/issues/${owner}/${repo}`}>
                <p>
                  {owner} / {repo}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <Modal>
        <AddNewRepository />
      </Modal>
    </>
  );
};

export default memo(SideBar);
