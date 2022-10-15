import { useAuth } from "../context/auth-context";

export const LoginForm = () => {
  const { signupUser, setSignupUser, createUser, signinWithGoogle } =
    useAuth();

  return (
    <>
      <div className="container px-4 max-w-6xl mx-auto my-8">
        <div className="w-full max-w-xl mx-auto">
          <form className="LgnForm max-w-sm mx-auto  shadow-lg bg-white rounded-lg pt-6 pb-8 mb-4 px-8">
            <h3 className="font-bold text-center">Sign Up</h3>
            <div className="MskForm">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow apperance-none border rounded w-full py-2 p2-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={signupUser.email}
                  onChange={(e) =>
                    setSignupUser({ ...signupUser, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 p2-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={signupUser.password}
                  onChange={(e) =>
                    setSignupUser({ ...signupUser, password: e.target.value })
                  }
                />
                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className="align-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={createUser}
                >
                  Sign Up
                </button>
              </div>
              <p className="font-bold text-center">Or</p>
              <div className="LgnSm my-4 max-w-sm text-center">
                <p className="LgnFb p-2 block bg-blue-500 rounded-sm text-white md:hover:text-black-600 my-2 font-bold" onClick={signinWithGoogle}>
                  Sign up with Gmail
                </p>
              </div>
              <div>
                <p className="font-bold">Have account ?</p>
                <p>Log In</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
