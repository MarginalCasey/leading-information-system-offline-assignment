import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Left from "./Left";
import Right from "./Right";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Left />
      <Right>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" Component={Home} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Right>
    </div>
  );
}

export default App;
