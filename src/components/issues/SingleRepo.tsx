import React, { useEffect, useState } from "react";
import { type Octokit } from "octokit";
import SingleIssue from "./SingleIssue";

interface Issue {
  title: string;
  created_at: string;
  html_url: string;
}

interface ISingleRepoProps {
  owner: string;
  repo: string;
  octokit: Octokit;
}

const SingleRepo: React.FC<ISingleRepoProps> = ({ owner, repo, octokit }) => {
  const [error, setError] = useState(false);
  const [issuesData, setIssuesData] = useState<Array<Issue>>([]);
  // console.log("single repo rendering");

  const fetchData = async (owner: string, repo: string) => {
    try {
      const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner,
        repo,
        since: new Date(
          new Date().valueOf() - 1000 * 60 * 60 * 24 * 3
        ).toISOString(),
        per_page: 10,
      });

      const issuesWithOutPullRequests = result.data.filter(
        (issue) => !issue.pull_request && !issue.assignee
      );
      setIssuesData(issuesWithOutPullRequests);
      console.log(issuesWithOutPullRequests);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData(owner, repo)
      .then(() => console.log("in then"))
      .catch(() => console.log("in catch"));
  }, []);

  return (
    <div className="mt-5 rounded border border-slate-600">
      <div className="rounded bg-slate-800 p-4 capitalize text-white">
        {error ? `could not fetch issues` : repo}
      </div>

      {issuesData.map(({ html_url, title, created_at }, idx: number) => (
        <SingleIssue
          html_url={html_url}
          title={title}
          created_at={created_at}
          key={idx}
        />
      ))}
      {issuesData.map(({ html_url, title, created_at }, idx: number) => (
        <SingleIssue
          html_url={html_url}
          title={title}
          created_at={created_at}
          key={idx}
        />
      ))}
      {issuesData.map(({ html_url, title, created_at }, idx: number) => (
        <SingleIssue
          html_url={html_url}
          title={title}
          created_at={created_at}
          key={idx}
        />
      ))}
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
