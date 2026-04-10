"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { commitLocalUpdate, useRelayEnvironment, graphql, useLazyLoadQuery } from "react-relay";
import type { pageIssuesQuery } from "./__generated__/pageIssuesQuery.graphql";
import { IssueRow } from "./components/IssueRow";

const query = graphql`
  query pageIssuesQuery {
    issuesCollection(first: 10) {
      edges {
        node {
          id: id
          ...IssueRow_issue
        }
      }
    }
  }
`;

export default function IssuesPage() {
  const data = useLazyLoadQuery<pageIssuesQuery>(query, {});
  const edges = data.issuesCollection?.edges ?? [];

  const environment = useRelayEnvironment();

  useEffect(() => {
    const channel = supabase
      .channel("issues-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "issues",
        },
        (payload) => {
          console.log("Realtime event:", payload);

          commitLocalUpdate(environment, (store) => {
            const root = store.getRoot();

            const connection = root.getLinkedRecord("issuesCollection", {
              first: 10,
            });

            if (!connection) return;

            const edges = connection.getLinkedRecords("edges") || [];

            if (payload.eventType === "UPDATE") {
              edges.forEach((edge) => {
                const node = edge.getLinkedRecord("node");
                if (!node) return;

                if (node.getValue("id") === payload.new.id) {
                  node.setValue(payload.new.title, "title");
                  node.setValue(payload.new.description, "description");
                  node.setValue(payload.new.status, "status");
                  node.setValue(payload.new.priority, "priority");
                }
              });
            }

            if (payload.eventType === "INSERT") {
              const newNode = store.create(
                payload.new.id,
                "issues"
              );

              newNode.setValue(payload.new.id, "id");
              newNode.setValue(payload.new.title, "title");
              newNode.setValue(payload.new.description, "description");
              newNode.setValue(payload.new.status, "status");
              newNode.setValue(payload.new.priority, "priority");

              const newEdge = store.create(
                `edge-${payload.new.id}`,
                "issuesEdge"
              );

              newEdge.setLinkedRecord(newNode, "node");

              connection.setLinkedRecords([newEdge, ...edges], "edges");
            }
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [environment]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Issues</h1>
      </header>
      <ul role="list" className="divide-y divide-gray-100">
        {edges.length > 0 ? (
          edges.map((edge) => {
            if (!edge?.node) return null;

            return (
              <IssueRow key={edge.node.id} issue={edge.node} />
            );
          })
        ) : (
          <li className="flex items-center justify-between gap-x-6 py-5">
            No issues found.
          </li>
        )}
      </ul>
    </div>
  );
}
