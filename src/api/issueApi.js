import { base } from "./instance";

export const issueAPI = {
  getIssues: () => base.get(`/issues`),
  addIssue: (data) => base.post(`/issues`, data),
  getIssueDetail: (issueId) => base.get(`/issues/${issueId}`),
  updateIssue: (data, issueId) => base.put(`/issues/${issueId}`, data),
  deleteIssue: (issueId) => base.delete(`/issues/${issueId}`),
};

export const commentAPI = {
  getCommentAll: () => base.get(`/comments`),
  // getComments: (page) => base.get(`/comments?_page=${page}&_limit=20`),
  getComments: (page) =>
    base.get(`/comments?_sort=id&_order=desc&_page=${page}}&_limit=20`),
  getCommentDetail: (commentId) => base.get(`/comments/${commentId}`),
  addComments: (data) => base.post(`/comments`, data),
  updateComment: (updateData) =>
    base.put(`/comments/${updateData.id}`, updateData),
  deleteCommentt: (commentId) => base.delete(`/comments/${commentId}`),
};
