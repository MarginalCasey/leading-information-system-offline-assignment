import { IconHome, IconLogin, IconLogout } from "@tabler/icons-react";
import "./Left.css";

const data = [{ link: "", label: "Home", icon: IconHome }];

function Left() {
  const links = data.map((item) => (
    <a
      className="link"
      data-active={undefined}
      href={item.link}
      key={item.label}
    >
      <item.icon className="linkIcon" stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className="left">
      <nav className="navbar">
        <div className="navbarMain">{links}</div>
        <div className="footer">
          <a className="link" href="#">
            <IconLogin className="linkIcon" stroke={1.5} />
            <span>Login</span>
          </a>
          <a className="link" href="#">
            <IconLogout className="linkIcon" stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Left;
