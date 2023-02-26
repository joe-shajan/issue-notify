import { useRouter } from "next/router";
import IssueLayout from "../../../layouts/IssueLayout";
import { Octokit } from "octokit";
import SingleRepo from "../../../components/issues/SingleRepo";
import { useEffect, useState } from "react";

interface Issue {
  title: string;
  created_at: string;
  html_url: string;
}

interface ISingleRepoProps {
  owner: string | null;
  repo: string | null;
  octokit: Octokit;
}

const SingleRepoIssues = () => {
  const {
    query: { repo, owner },
    isReady,
  } = useRouter();

  const [issuesData, setIssuesData] = useState<Array<Issue>>([]);

  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });

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
    } catch (error) {
      console.log(error);
      // setError(true);
    }
  };

  useEffect(() => {
    if (isReady) {
      fetchData(owner, repo)
        .then(() => console.log("in then"))
        .catch(() => console.log("in catch"));
    }
  }, [owner, repo]);

  return (
    <IssueLayout>
      <div className={`ml-[300px] w-full`}>
        <SingleRepo issuesData={issuesData} />
      </div>
    </IssueLayout>
  );
};

export default SingleRepoIssues;
