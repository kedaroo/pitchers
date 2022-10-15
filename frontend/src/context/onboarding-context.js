import { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const OnboardingContext = createContext();

const initialState = {
  role: "",
  name: "",
  startup: "",
  bio: "",
  profile_picture: "",

  user_id: "",

  categories: [],

  isSubmitLoading: false,
  isSubmissionReceived: false,
};

const OnboardingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OnboardingContext.Provider value={{ state, dispatch }}>
      {children}
    </OnboardingContext.Provider>
  );
};

const useOnboarding = () => useContext(OnboardingContext);

export { useOnboarding, OnboardingProvider };
