import "./App.css";
import { LoginForm } from "./components/LoginForm";
import "../src/output.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
