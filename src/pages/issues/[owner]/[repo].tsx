import { useRouter } from "next/router";
import IssueLayout from "../../../layouts/IssueLayout";

const sideBarWidth = "300px";

const SingleRepoIssues = () => {
  const {
    query: { repo, org },
  } = useRouter();

  return (
    <IssueLayout sideBarWidth={sideBarWidth}>
      <div className={`ml-[${sideBarWidth}] w-full border`}>
        {repo}
        {org}
      </div>
    </IssueLayout>
  );
};

export default SingleRepoIssues;
