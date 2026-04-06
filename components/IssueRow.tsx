"use client";

import { graphql, useFragment } from "react-relay";
import type { IssueRow_issue$key } from "../app/__generated__/IssueRow_issue.graphql";
import { IssueStatus, IssuePriority } from "../utils";

const statusStyles: Record<IssueStatus, string> = {
  OPEN: "bg-green-400 text-white",
  COMPLETED: "bg-blue-400 text-white",
  IN_PROGRESS: "bg-amber-50 text-white",
  BLOCKED: "bg-red-400 text-white"
};

const priorityStyles: Record<IssuePriority, string> = {
  LOW: "bg-gray-400 text-white",
  MEDIUM: "bg-slate-400 text-white",
  HIGH: "bg-orange-400 text-white",
  CRITICAL: "bg-rose-400 text-white"
};

interface Props {
  issue: IssueRow_issue$key;
}

export function IssueRow({ issue }: Props) {
  const data = useFragment(
    graphql`
      fragment IssueRow_issue on issues {
        id: nodeId
        title
        status
        priority
      }
    `,
    issue
  );

  const statusKey = (data.status as IssueStatus) || "";
  const priorityKey = (data.priority as IssuePriority) || "";

  return (
    <li className="flex items-center justify-between gap-x-6 py-5">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">{data.title}</p>
          <p className={`mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[statusKey]}`}>
            {data.status}
          </p>
          <p className={`mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${priorityStyles[priorityKey]}`}>
            {data.priority}
          </p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-400">
          <p className="whitespace-nowrap">{data.created_at}</p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle r="1" cx="1" cy="1"></circle>
          </svg>
          <p className="truncate">{data.description}</p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <a href="#" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">View issue</a>
        <div className="relative flex-none">
          <button type="button" className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-900" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
            <span className="sr-only">Open options</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
