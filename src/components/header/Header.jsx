import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleUser,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { type } from "@testing-library/user-event/dist/type";
export const Header = () => {
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/Search");
  };

  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
          <div className="headersearchIcon">
            <img
              src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
              className="featureimage"
            />
          </div>
        </div>
     
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {/* <input  type="text" placeholder ='Search or jump to ....'/> */}
          <div className="serInputContiner">
            <input
              className="serInput"
              onClick={handleSearch}
              type="text"
              placeholder="Search or jump to ...."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <span>
            {" "}
            <input className="serInput1" type="text" placeholder="/" />
          </span>
        </div>
        <div className="headerListItem">
          <span>Pull requests</span>
        </div>
        <div className="headerListItem">
          <span>Issues</span>
        </div>

        <div className="headerListItem">
          <span>Codespaces</span>
        </div>
        <div className="headerListItem">
          <span>Marketplace</span>
        </div>
        <div className="headerListItem">
          <span>Explore</span>
        </div>
        <div className="header2">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="header2">
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="header2">
          <FontAwesomeIcon icon={faCircleUser} />
        </div>
      </div>
    </div>
  );
};
