import { IconHome, IconLogin, IconLogout, IconUser } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import useUserStore from "../hooks/useUserStore";
import "./SideNav.css";

const data = [{ link: "/home", label: "Home", icon: IconHome }];

function SideNav() {
  const user = useUserStore((state) => state.user);
  const resetUser = useUserStore((state) => state.resetUser);

  const links = data.map((item) => (
    <NavLink className="link" to={item.link} key={item.label}>
      <item.icon className="linkIcon" stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  const handleLogout = () => {
    resetUser();
  };

  return (
    <nav className="navbar">
      <div className="navbarMain">{links}</div>
      <div className="footer">
        {user ? (
          <NavLink className="link" to="/user">
            <IconUser className="linkIcon" stroke={1.5} />
            <span>User</span>
          </NavLink>
        ) : (
          <NavLink className="link" to="/login">
            <IconLogin className="linkIcon" stroke={1.5} />
            <span>Login</span>
          </NavLink>
        )}
        {user && (
          <div className="link" onClick={handleLogout}>
            <IconLogout className="linkIcon" stroke={1.5} />
            <span>Logout</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default SideNav;
