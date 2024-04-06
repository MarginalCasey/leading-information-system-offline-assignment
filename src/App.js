import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Left from "./Left";
import Right from "./Right";
import useUserStore from "./hooks/useUserStore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

function App() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="App">
      <Left />
      <Right>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" Component={Home} />
          <Route element={!user ? <Navigate to="/" replace /> : undefined}>
            <Route path="/user" Component={User} />
          </Route>
          <Route element={user ? <Navigate to="/" replace /> : undefined}>
            <Route path="/login" Component={Login} />
          </Route>
        </Routes>
      </Right>
    </div>
  );
}

export default App;
