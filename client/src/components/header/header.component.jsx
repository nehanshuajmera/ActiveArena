import { Link } from "react-router-dom";
import "./header.styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="logo-link">
          <img src="/active-logo.png" alt="Logo" />
          <h1 className="heading-primary">
            <span className="heading-primary-main">Active</span>
            <span className="heading-primary-sub">Arena</span>
          </h1>
        </Link>
      </div>
      <div className="header__links"></div>
    </header>
  );
};
