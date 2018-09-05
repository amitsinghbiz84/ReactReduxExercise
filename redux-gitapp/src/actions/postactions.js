export function updateResponse(filteredIssueList) {
  return {
    type: 'UPDATE_RESPONSE',
    filteredIssueList
  }
}