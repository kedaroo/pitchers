import { useOnboarding } from "../../../context/onboarding-context";

export const UserDetails = () => {
  const { state: {name, startup, bio}, dispatch } = useOnboarding();

  return (
    <div>
      <div className="bg-gray-100 py-6 flex flex-col justify-center">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 h-96 overflow-auto">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  2
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
                    <div className="flex flex-col">
                      <label className="leading-loose">Name</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => dispatch({type: "SET_NAME", payload: e.target.value})}
                      />
                    </div>
                    <label htmlFor="investor">
                      <label className="leading-loose">Start Up Name</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Start up Name"
                        value={startup}
                        onChange={(e) => dispatch({type: "SET_STARTUP", payload: e.target.value})}
                      />
                    </label>
                    <label htmlFor="other">
                      <label className="leading-loose">Bio</label>
                      <textarea
                        rows="4"
                        cols="10"
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Bio"
                        value={bio}
                        onChange={(e) => dispatch({type: "SET_BIO", payload: e.target.value})}
                      />
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
