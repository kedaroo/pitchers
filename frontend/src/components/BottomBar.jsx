import { AiOutlinePlayCircle, AiOutlineMessage, AiOutlinePlusCircle } from "react-icons/ai";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export const BottomBar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className="footer bg-gray-300
        text-3xl text-black text-center
        bottom-0
        p-1
        grid
        grid-cols-4"
    >
      <div className="grid place-items-center">
        <img
          className="w-7 h-7 rounded-full"
          src="https://picsum.photos/200"
          alt="Rounded avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="grid place-items-center">
        <AiOutlinePlusCircle size={30} />
      </div>
      <div className="grid place-items-center">
        <AiOutlinePlayCircle size={30} />
      </div>
      <div className="grid place-items-center">
        <AiOutlineMessage size={30} />
      </div>
    </div>
  );
};
