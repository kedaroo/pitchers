import { useOnboarding } from "../../../context/onboarding-context";

export const UserRole = () => {
  const {
    state: { role },
    dispatch,
  } = useOnboarding();

  return (
    <div>
      <div className="bg-gray-100 py-6 flex flex-col justify-center">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  1
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Complete Your Profile</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Details will help curate your experience
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <p className="leading-loose">Who are you ?</p>
                    <label htmlFor="founder">
                      <input
                        type="radio"
                        id="founder"
                        name="role"
                        value="founder"
                        onChange={(e) =>
                          dispatch({ type: "SET_ROLE", payload: e })
                        }
                        className="mx-2 px-2 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                      Founder
                    </label>
                    <label htmlFor="investor">
                      <input
                        id="investor"
                        name="role"
                        type="radio"
                        value="investor"
                        onChange={(e) =>
                          dispatch({ type: "SET_ROLE", payload: e })
                        }
                        className="mx-2 px-2 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                      Investor
                    </label>
                    <label htmlFor="other">
                      <input
                        id="other"
                        name="role"
                        type="radio"
                        value="other"
                        onChange={(e) =>
                          dispatch({ type: "SET_ROLE", payload: e })
                        }
                        className="mx-2 px-2 py-2 border focus:ring-gray-500 focus:border-gray-900 sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
