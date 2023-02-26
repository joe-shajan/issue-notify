import { useRouter } from "next/router";
import IssueLayout from "../../layouts/IssueLayout";

const sideBarWidth = "300px";

const SingleRepoIssues = () => {
  const {
    query: { repo },
  } = useRouter();

  return (
    <IssueLayout sideBarWidth={sideBarWidth}>
      <div className={`ml-[${sideBarWidth}] w-full border`}>{repo}</div>
    </IssueLayout>
  );
};

export default SingleRepoIssues;
