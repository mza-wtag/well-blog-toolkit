import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@assets/images/icons/search.svg";
import LogoutIcon from "@assets/images/icons/Frame.svg";
import { logoutUser } from "@features/authSlice";
import Button from "@components/Button/Button";
import "@components/Header/header.scss";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar container">
        <Link to="/" className="navbar__logo">
          WellBlog
        </Link>
        <div className="navbar__search">
          <input type="search" placeholder="Search" />
          <img src={SearchIcon} alt="search" />
        </div>
        {loggedInUser ? (
          <div className="navbar__menu">
            Welcome
            <span className="navbar__user-name">
              <Link to="/me">{loggedInUser.fullName} !</Link>
            </span>
            <Button onClick={handleLogout} className="navbar__logout-btn">
              <img src={LogoutIcon} alt="Logout" />
            </Button>
          </div>
        ) : (
          <div className="navbar__menu">
            <Link to="/login">Login</Link> <span> / </span>
            <Link to="/register">Signup</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
