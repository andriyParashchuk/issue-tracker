"use client";

import { graphql, useLazyLoadQuery } from "react-relay";
import { useParams } from "next/navigation";
import type { pageQuery } from "../../__generated__/pageQuery.graphql";
import { IssueForm } from "../../components/IssueForm";
import type { IssueStatus, IssuePriority } from "../../../types";

const query = graphql`
  query pageQuery($id: UUID!) {
    issuesCollection(filter: { id: { eq: $id } }, first: 1) {
      edges {
        node {
          id: id
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

  const data = useLazyLoadQuery<pageQuery>(query, { id });
  const issue = data.issuesCollection?.edges[0]?.node;

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <IssueForm
      issueData={{
        ...issue,
        status: issue.status as IssueStatus,
        priority: issue.priority as IssuePriority,
      }}
    />
  );
}
