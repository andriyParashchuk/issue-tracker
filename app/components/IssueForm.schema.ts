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

export const issueFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  description: z.string().max(5000).optional(),
  status: IssueStatusEnum,
  priority: IssuePriorityEnum,
});

export const issueRowSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: IssueStatusEnum,
  priority: IssuePriorityEnum,
  created_at: z.string(),
  description: z.string().nullable().optional(),
});

export type IssueForm = z.infer<typeof issueFormSchema>;
export type IssueRow = z.infer<typeof issueRowSchema>;
