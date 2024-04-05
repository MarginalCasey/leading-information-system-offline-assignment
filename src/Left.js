import { IconHome, IconLogin, IconLogout } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import "./Left.css";

const data = [{ link: "/home", label: "Home", icon: IconHome }];

function Left() {
  const links = data.map((item) => (
    <NavLink className="link" to={item.link} key={item.label}>
      <item.icon className="linkIcon" stroke={1.5} />
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <nav className="navbar">
      <div className="navbarMain">{links}</div>
      <div className="footer">
        <NavLink className="link" to="/login">
          <IconLogin className="linkIcon" stroke={1.5} />
          <span>Login</span>
        </NavLink>
        <a className="link" href="#">
          <IconLogout className="linkIcon" stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}

export default Left;
