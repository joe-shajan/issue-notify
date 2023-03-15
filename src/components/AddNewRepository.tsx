import React, { useEffect, useState } from "react";
import Button from "./Button";

// type Props = {};
import { api } from "../utils/api";

const AddNewRepository = () => {
  const [owner, setOwner] = useState("");
  const [repository, setRepository] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(owner, repository);
  };

  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  console.log(hello.data);

  const addNewRepo = api.repository.addRepo.useMutation();

  const mut = () => {
    const response = addNewRepo.mutate({ owner: "joppan", repo: "joe" });

    console.log(response);
  };
  useEffect(() => {
    mut();
  }, []);
  // console.log(test.data);
  return (
    <div className="rounded-xl border border-slate-600 bg-slate-900 p-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col">
          <label
            htmlFor="owner"
            className="text-md mb-2 font-thin text-slate-200"
          >
            Owner
          </label>
          <input
            id="owner"
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="rounded-md border border-gray-600  bg-slate-900 px-3 py-2 font-thin focus:outline-none focus:ring focus:ring-slate-800"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label
            htmlFor="repository"
            className="text-md mb-2 font-thin text-slate-200"
          >
            Repository
          </label>
          <input
            id="repository"
            type="text"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
            className="rounded-md border border-gray-600  bg-slate-900 px-3 py-2 font-thin focus:outline-none focus:ring focus:ring-slate-800"
          />
        </div>

        <div className="flex justify-center">
          <Button varient="lg">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewRepository;
