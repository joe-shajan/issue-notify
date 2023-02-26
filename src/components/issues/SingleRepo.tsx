import SingleIssue from "./SingleIssue";
import { useRouter } from "next/router";

interface Issue {
  title: string;
  created_at: string;
  html_url: string;
}

interface ISingleRepoProps {
  issuesData: Array<Issue>;
}

const SingleRepo = ({ issuesData }: ISingleRepoProps) => {
  const {
    query: { repo },
  } = useRouter();

  return (
    <div className="m-14 rounded border border-slate-600">
      <div className="rounded bg-slate-800 p-4 capitalize text-white">
        {repo}
      </div>

      {issuesData.map(({ html_url, title, created_at }, idx: number) => (
        <SingleIssue
          html_url={html_url}
          title={title}
          created_at={created_at}
          key={idx}
        />
      ))}
    </div>
  );
};

export default SingleRepo;
