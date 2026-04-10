import { z } from "zod";

export const IssueStatusEnum = z.enum([
  "OPEN",
  "COMPLETED",
  "IN_PROGRESS",
  "BLOCKED"
]);

export const IssuePriorityEnum = z.enum([
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL"
]);

export const issueRowSchema = z.object({
  id: z.string(), // nodeId (Relay)
  title: z.string(),
  status: IssueStatusEnum,
  priority: IssuePriorityEnum,
  created_at: z.string(),
  description: z.string().nullable().optional(),
});

export type IssueRow = z.infer<typeof issueRowSchema>;
