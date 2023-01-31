import Link from "next/link";
import * as React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface ISingleIssueProps {
  html_url: string;
  title: string;
  created_at: string;
}

const SingleIssue: React.FC<ISingleIssueProps> = ({
  html_url,
  title,
  created_at,
}) => {
  return (
    <div className="flex justify-between border-t border-slate-600 p-2">
      <div>
        <Link href={html_url} target="_blank">
          <div className="text-white hover:text-blue-400">{title}</div>
        </Link>
        <div className="text-xs font-thin text-slate-400">
          {dayjs(created_at).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default SingleIssue;
