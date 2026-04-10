"use client";

import React, { useState, useEffect } from "react";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { useParams, useRouter } from "next/navigation";
import type { pageQuery } from "../../__generated__/pageQuery.graphql";
import type { pageUpdateIssueMutation } from "../../__generated__/pageUpdateIssueMutation.graphql";
import { 
  STATUS_OPTIONS, 
  PRIORITY_OPTIONS, 
  LABEL_OPTIONS,
  type IssueStatus, 
  type IssuePriority, 
  type IssueLabels 
} from "../../../types";

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

const updateMutation = graphql`
  mutation pageUpdateIssueMutation($id: UUID!, $set: issuesUpdateInput!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: $set) {
      affectedCount
      records {
        id: nodeId
        title
        description
        status
        priority
      }
    }
  }
`;

export default function IssuePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const data = useLazyLoadQuery<pageQuery>(query, { id });
  const issueData = data.issuesCollection?.edges[0]?.node;
  const [commit, isSaving] = useMutation<pageUpdateIssueMutation>(updateMutation);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "OPEN" as IssueStatus,
    priority: "LOW" as IssuePriority,
    labels: [] as IssueLabels[],
  });

  useEffect(() => {
    if (issueData) {
      setFormData({
        title: issueData.title || "",
        description: issueData.description || "",
        status: (issueData.status as IssueStatus) ?? "OPEN",
        priority: (issueData.priority as IssuePriority) ?? "LOW",
        labels: [],
      });
    }
  }, [issueData]);

  if (!issueData) return <div className="p-10 text-center text-slate-400 font-medium">Loading...</div>;

  const handleSave = () => {
    commit({
      variables: {
        id,
        set: {
          title: formData.title,
          description: formData.description,
          status: formData.status,
          priority: formData.priority,
        }
      },
      onCompleted: () => router.refresh()
    });
  };

  const toggleLabel = (label: IssueLabels) => {
    setFormData(prev => ({
      ...prev,
      labels: prev.labels.includes(label)
        ? prev.labels.filter(l => l !== label)
        : [...prev.labels, label]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="mb-10">
        <input
          className="w-full text-4xl font-bold bg-transparent border-none focus:ring-0 p-0 text-slate-900 placeholder-slate-300 disabled:opacity-50"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Issue Title"
          disabled={isSaving}
        />
        <p className="text-sm text-slate-400 mt-2 font-medium">
          Created: {new Date(issueData.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col gap-3">
            <textarea
              rows={15}
              className="w-full p-6 rounded-2xl border border-slate-200 bg-white text-slate-700 leading-relaxed focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm disabled:opacity-50"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the issue..."
              disabled={isSaving}
            />
          </div>
        </div>

        <div className="space-y-8 bg-slate-50/50 p-8 rounded-2xl border border-slate-100 shadow-inner">
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Status</label>
            <select
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500/10 outline-none cursor-pointer shadow-sm disabled:opacity-50"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as IssueStatus })}
              disabled={isSaving}
            >
              {STATUS_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Priority</label>
            <select
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500/10 outline-none cursor-pointer shadow-sm disabled:opacity-50"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value as IssuePriority })}
              disabled={isSaving}
            >
              {PRIORITY_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-4">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] ml-1">Labels</label>
            <div className="grid grid-cols-2 gap-2">
              {LABEL_OPTIONS.map(label => {
                const isSelected = formData.labels.includes(label);
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => toggleLabel(label)}
                    disabled={isSaving}
                    className={`px-3 py-2.5 rounded-xl text-[11px] font-black transition-all border ${
                      isSelected ? "bg-slate-900 border-slate-900 text-white shadow-md" : "bg-white border-slate-200 text-slate-500 hover:border-slate-400"
                    } disabled:opacity-50`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between gap-4">
        <button 
          type="button"
          onClick={() => router.back()}
          disabled={isSaving}
          className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all active:scale-95 disabled:opacity-50"
        >
          Back
        </button>
        <button 
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className={`px-10 py-3 text-white rounded-xl text-sm font-bold transition-all shadow-lg ${isSaving ? 'bg-blue-400 shadow-none' : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-blue-200/50'}`}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
