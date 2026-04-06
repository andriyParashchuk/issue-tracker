"use client";

import { graphql, useLazyLoadQuery } from "react-relay";
import type { pageIssuesQuery } from "./__generated__/pageIssuesQuery.graphql";
import { IssueRow } from "../components/IssueRow";
import { Filters } from "../components/Filters";

const query = graphql`
  query pageIssuesQuery {
    issuesCollection(first: 10) {
      edges {
        node {
          id: nodeId
          ...IssueRow_issue
        }
      }
    }
  }
`;

export default function IssuesPage() {
  const data = useLazyLoadQuery<pageIssuesQuery>(query, {});
  const edges = data.issuesCollection?.edges ?? [];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Issues:</h1>
      </header>

      <Filters />

      <ul role="list" className="divide-y divide-gray-100">
        {edges.length > 0 ? (
          edges.map((edge) => (
            <IssueRow key={edge.node.id} issue={edge.node} />
          ))
        ) : (
          <li className="flex items-center justify-between gap-x-6 py-5">
            No issues found.
          </li>
        )}
      </ul>
    </div>
  );
}
