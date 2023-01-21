import { base } from "./instance";

export const issueAPI = {
  getIssues: () => base.get(`/issues`),
  addIssue: (data) => base.post(`/issues`, data),
  getIssueDetail: (issueId) => base.get(`/issues/${issueId}`),
  updateIssue: (data, issueId) => base.put(`/issues/${issueId}`, data),
  deleteIssue: (issueId) => base.delete(`/issues/${issueId}`),
};
