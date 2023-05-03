import { memo } from "react";
import useModal from "../../custom-hooks/useModal";
import AddNewRepository from "../AddNewRepository";
import Button from "../Button";

import toast, { Toaster } from "react-hot-toast";

// type Props = {};
import { api } from "../../utils/api";
import SidemenuItem from "./SidemenuItem";

// const repos = [
//   { owner: "coral-xyz", repo: "backpack" },
//   { owner: "calcom", repo: "cal.com" },
//   { owner: "remotion-dev", repo: "remotion" },
//   { owner: "erxes", repo: "erxes" },
//   { owner: "trpc", repo: "trpc" },

//   { owner: "TanStack", repo: "table" },
//   { owner: "TanStack", repo: "query" },
//   { owner: "react-hook-form", repo: "react-hook-form" },
//   { owner: "storybookjs", repo: "storybook" },
//   { owner: "timolins", repo: "react-hot-toast" },
//   { owner: "t3-oss", repo: "create-t3-app" },

//   { owner: "vector-im", repo: "element-web" },
//   { owner: "jitsi", repo: "jitsi-meet" },
//   { owner: "appwrite", repo: "appwrite" },
//   { owner: "RocketChat", repo: "Rocket.Chat" },

//   { owner: "radix-ui", repo: "primitives" },
//   { owner: "shadcn", repo: "ui" },
// ];

const SideBar = () => {
  const { Modal, openModal, closeModal } = useModal();

  const { data, isLoading: postsLoading } = api.repository.getAll.useQuery();

  const { mutate: addNewRepo, isLoading } = api.repository.addRepo.useMutation({
    onSuccess: () => {
      toast.success("Repository added");
      closeModal();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const addRepo = (owner: string, repository: string) => {
    addNewRepo({ owner, repository });
  };

  return (
    <>
      <Toaster />
      <aside
        className={`scrollbar fixed h-[100%] w-[300px] overflow-scroll border-r-[1px] border-slate-700 px-4`}
      >
        <div className="mb-2 flex justify-end border-b-[1px] border-slate-700 py-4">
          <Button onClick={openModal}>add new repo</Button>
        </div>
        <ul className="overflow-hidden text-ellipsis whitespace-nowrap">
          {!data?.length && (
            <SidemenuItem ownerName={"joe-shajan"} repoName={"issue-notify"} />
          )}

          {data?.map(({ owner }) => {
            if (owner.repositories.length === 1) {
              if (!owner.repositories[0]?.name) return null;
              const repo = owner.repositories[0]?.name;

              return (
                <SidemenuItem
                  key={owner.id}
                  ownerName={owner.name}
                  repoName={repo}
                />
              );
            }

            if (owner.repositories.length > 1) {
              return (
                <ul key={owner.id}>
                  {owner.repositories.map((repo) => {
                    return (
                      <SidemenuItem
                        key={repo.id}
                        ownerName={owner.name}
                        repoName={repo.name}
                      />
                    );
                  })}
                </ul>
              );
            }
          })}
        </ul>
      </aside>

      <Modal>
        <AddNewRepository addRepo={addRepo} isLoading={isLoading} />
      </Modal>
    </>
  );
};

export default memo(SideBar);
