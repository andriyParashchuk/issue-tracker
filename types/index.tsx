export const STATUS_OPTIONS = ["OPEN", "COMPLETED", "IN_PROGRESS", "BLOCKED"] as const;
export const PRIORITY_OPTIONS = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
export const LABEL_OPTIONS = ["BUG", "TECH", "DEV", "EPIC"] as const;

export type IssueStatus = (typeof STATUS_OPTIONS)[number];
export type IssuePriority = (typeof PRIORITY_OPTIONS)[number];
export type IssueLabels = (typeof LABEL_OPTIONS)[number];
