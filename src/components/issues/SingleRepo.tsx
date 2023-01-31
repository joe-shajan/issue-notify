import * as React from "react";
import SingleIssue from "./SingleIssue";

interface Issue {
  title: string;
  created_at: string;
  html_url: string;
}

interface ISingleRepoProps {
  repoName: string;
  issueData: Array<Issue>;
}

const SingleRepo: React.FC<ISingleRepoProps> = ({ repoName, issueData }) => {
  return (
    <div className="mt-5 rounded border border-slate-600" key={repoName}>
      <div className="sticky top-0 rounded bg-slate-800 bg-opacity-70 p-4 capitalize text-white backdrop-blur-sm backdrop-filter">
        {repoName}
      </div>

      {issueData.map(({ html_url, title, created_at }, idx: number) => (
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
