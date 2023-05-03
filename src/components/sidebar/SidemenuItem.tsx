import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  ownerName: string;
  repoName: string;
};

const SidemenuItem = ({ ownerName, repoName }: Props) => {
  const { query } = useRouter();

  return (
    <li
      className={`ease my-1 rounded-md p-2 transition hover:bg-slate-800 ${
        repoName === query.repo && ownerName === query.owner
          ? "bg-slate-800"
          : ""
      }`}
    >
      <Link href={`/issues/${ownerName}/${repoName}`}>
        <p>
          {ownerName} / {repoName}
        </p>
      </Link>
    </li>
  );
};

export default SidemenuItem;
