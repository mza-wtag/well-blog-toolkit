import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@assets/images/icons/Frame.svg";
import { logoutUser } from "@features/authSlice";
import Button from "@components/Button/Button";
import Search from "@components/Search/Search";
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
        <Search />
        {loggedInUser ? (
          <div className="navbar__menu">
            Welcome
            <span className="navbar__user-name">
              <Link to="/me">{loggedInUser?.fullName} !</Link>
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
