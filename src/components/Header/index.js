import React, { useRef, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.svg"
import userProfile from "../../assets/user-profile.svg";
import searchIcon from "../../assets/search.svg";
import notificationBell from "../../assets/notification.svg"
import userListContext from "../../context/userListContext";
import { useContext } from "react";
import DataFilters from "../DataFilters";

const Header = () => {

  const timerId = useRef();
  const [search, setSearch] = useState("");
  const { filterList } = useContext(userListContext);
  const [showFilter, setShowFilter] = useState(false);

  function handleChange(event) {
    setSearch(event.target.value);
    filterList(event.target.value);
  }

  const debounceFn = (callback, delayTime = 200) => {
    return function (...args) {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(() => {
        callback(...args);
      }, delayTime)
    }
  }

  const handleDebounce = debounceFn(handleChange, 200)

  return (
    <header className="header">
      
      <div className="left-section">
        <div className="logo" onClick={() => setShowFilter(!showFilter)}>
          <img src={logo} alt="Logo" />
        </div>
      </div>

     
      <div className="center-section">
        <p className="welcome-text">Welcome, User!</p>
        <div className="search-bar">
          <input type="text" placeholder="Search by name" onChange={handleDebounce}/>
          <button className="search-btn">
            <img src={searchIcon} className="fas fa-arrow-right" />
          </button>
        </div>
      </div>

     
      <div className="right-section">
        <button className="notification-icon">
          <img src={notificationBell} className="fas fa-bell" />
        </button>
        <div className="profile">
          <img src={userProfile} alt="User" />
        </div>
      </div>

      {showFilter && (
        <div className="data-filters-container">
          <DataFilters setShowFilter={() => setShowFilter(!showFilter)} />
        </div>
      )}
    </header>
  );
};

export default Header;
