import "@mantine/core/styles.css";
import { Navigate, Route, Routes } from "react-router-dom";
import useUserStore from "../hooks/useUserStore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import "./Layout.css";
import Main from "./Main";
import SideNav from "./SideNav";

function Layout() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="layout">
      <SideNav />
      <Main>
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
      </Main>
    </div>
  );
}

export default Layout;
