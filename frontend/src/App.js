import "./App.css";
import { SignupForm } from "./components/form/SignupForm";
import "../src/output.css";
import { Route, Routes } from "react-router-dom";
import { UserProfile } from "./pages/UserProfile";
import { LoginForm } from "./components/form/LoginForm";
import { useEffect } from "react";
import { useAuth } from "./context/auth-context";
import { useNavigate } from "react-router-dom";
import { BottomBar } from "./components/BottomBar";
import { MyProfile } from "./pages/MyProfile";

function App() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
    navigate("/");
  }, []);

  return (
    <div className="grid place-items-center">
      <div className="wrapper">
        <div className="wrapper grid place-items-center">
          <Routes>
            <Route path="/" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<MyProfile />} />
          </Routes>
          <div className="bottom-0 fixed">
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
