export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ROLE":
      return { ...state, role: action.payload.target.value };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_STARTUP":
      return { ...state, startup: action.payload };
    case "SET_BIO":
      return { ...state, bio: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SUBMIT":
      return { ...state, isSubmitLoading: true };
    case "SUBMISSION_RECEIVED":
      return { ...state, isSubmitLoading: false, isSubmissionReceived: true };
    default:
      return state;
  }
};
