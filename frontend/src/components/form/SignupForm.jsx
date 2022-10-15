import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const { signupUser, setSignupUser, createUser } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="container px-4 max-w-6xl mx-auto my-8">
        <div className="w-full max-w-xl mx-auto">
          <div className="LgnForm max-w-sm mx-auto  shadow-lg bg-white rounded-lg pt-6 pb-8 mb-4 px-8">
            <h3 className="font-bold text-center text-2xl">Sign Up</h3>
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
              </div>

              <div className="LgnSm my-4 max-w-sm text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={createUser}
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center">
                <p className="font-bold">Have account ?</p>
                <p
                  onClick={() => navigate("/login")}
                  className="underline cursor-pointer"
                >
                  Log In
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
