import { useRouter } from "next/router";
import React from "react";
import IssueLayout from "../../layouts/IssueLayout";

const SingleRepoIssues = () => {
  const {
    query: { repo },
  } = useRouter();

  return (
    <IssueLayout>
      <div className="w-full border">{repo}</div>
    </IssueLayout>
  );
};

export default SingleRepoIssues;
