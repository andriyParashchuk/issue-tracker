"use client";

import { graphql, useFragment } from "react-relay";
import type { IssueRow_issue$key } from "../app/__generated__/IssueRow_issue.graphql";

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
console.log('data:',data)
  return (
    <li className="flex items-center justify-between gap-x-6 py-5">
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">{data.title}</p>
          <p className="mt-0.5 whitespace-nowrap rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{data.status}</p>
          <p className="mt-0.5 whitespace-nowrap rounded-md bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{data.priority}</p>
        </div>
        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p className="whitespace-nowrap">March 17, 2023</p>
          <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
            <circle r="1" cx="1" cy="1"></circle>
          </svg>
          <p className="truncate">data.description</p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <a href="#" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block">View issue</a>
        <div className="relative flex-none">
          <button type="button" className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
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
