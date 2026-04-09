"use client";

import { graphql, useLazyLoadQuery } from "react-relay";
import { useParams } from "next/navigation";
import type { pageQuery } from "../../__generated__/PageQuery.graphql";

const query = graphql`
  query pageQuery($id: UUID!) {
    issuesCollection(filter: { id: { eq: $id } }, first: 1) {
      edges {
        node {
          id: nodeId
          title
          description
          status
          priority
          created_at
        }
      }
    }
  }
`;

export default function IssuePage() {
  const params = useParams();
  const id = params.id as string;

  const data = useLazyLoadQuery<IssuePageQuery>(query, { id });

  const issue = data.issuesCollection.edges[0]?.node;

  if (!issue) return <div>Issue not found</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">{issue.title}</h1>

      <div className="mb-4">
        <span>{issue.status}</span> | <span>{issue.priority}</span>
      </div>

      <p className="text-gray-700">{issue.description}</p>

      <p className="text-sm text-gray-400 mt-4">
        Created: {issue.created_at}
      </p>
    </div>
  );
}
