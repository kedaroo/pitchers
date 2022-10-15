import React, { useState } from "react";
import { useOnboarding } from "../../../context/onboarding-context";
import { UserDetails } from "./UserDetails";
import { UserRole } from "./UserRole";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../../context/auth-context";

const useProgress = () => {
  const [current, setCurrent] = useState(0);

  function moveForward() {
    setCurrent(current + 1);
  }

  function moveBack() {
    setCurrent(current - 1);
  }

  return [current, moveForward, moveBack];
};

export const Form = () => {
  const { state, dispatch } = useOnboarding();
  const steps = [<UserRole />, <UserDetails />];
  const [current, moveForward, moveBack] = useProgress();
  const { idtoken, user } = useAuth();

  const isFirst = current === 0;
  const isLast = current === steps.length - 1;

  function handleSubmit() {
    dispatch({ type: "SUBMIT" });

    setTimeout(() => {
      dispatch({ type: "SUBMISSION_RECEIVED" });
    }, 1000);
  }

  const submitDetails = async () => {
    console.log(state);
    console.log(idtoken);
    console.log(user.uid);

    try {
      const data = await axios.post(
        "https://hackout-2022-backend.herokuapp.com/api/v1/users/updateUser",
        {
          bio: state?.bio,
          startup: state?.startup,
          name: state?.name,
          profile_picture: "",
          user_id: user?.uid,
        },
        {
          headers: {
            authorization: idtoken,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  /* {alert(JSON.stringify(state, null, 2))} */

  if (state.isSubmissionReceived) {
    submitDetails();
  }

  return (
    <div className="flex flex-col justify-center">
      {steps[current]}

      <div className="pt-4 flex items-center space-x-4">
        {!isFirst && (
          <button
            className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
            onClick={() => {
              moveBack();
            }}
          >
            Go Back
          </button>
        )}
        <button
          className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
          onClick={() => {
            if (isLast) {
              handleSubmit();
            } else {
              moveForward();
            }
          }}
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};
