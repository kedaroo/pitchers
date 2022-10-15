export const MyProfile = () => {
    return (
      <div className="h-screen bg-gray-300 w-full">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
          <div className="md:flex">
            <div className="w-full p-2 py-10">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg"
                    className="rounded-full"
                    width="80"
                    alt="user-profile-img"
                  />
                  <span className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>
                </div>
              </div>
              <div className="flex flex-col text-center mt-3 mb-4">
                <span className="text-2xl font-medium">Pitcher</span>
                <span className="text-md text-gray-400">@pitch_it</span>
              </div>
  
              <p className="px-16 text-center text-md text-gray-800">
                Upload your pitch.{" "}
              </p>
              <p className="px-16 text-center text-md text-gray-800">
                Reach out to the investors.{" "}
              </p>
              <p className="px-16 text-center text-md text-gray-800">
                Get Funded.{" "}
              </p>
              <div className="px-16 mt-3 text-center">
                <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                  #edtech
                </span>
                <span className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">
                  #tech
                </span>
              </div>
  
              <div className="px-14 mt-5">
                <button className="h-12 bg-blue-400 w-full text-black text-md rounded hover:shadow hover:bg-gray-300 mb-2">
                  Upload
                </button>
              </div>
            </div>
          </div>
          <p className="font-bold text-center">My Pitches</p>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                1
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                2
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                3
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                4
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                5
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                6
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                7
              </div>
              <div className="p-12 bg-gray-200 rounded-md flex items-center justify-center">
                8
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  