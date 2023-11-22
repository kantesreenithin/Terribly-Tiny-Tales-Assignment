import React from "react";
import ProfileImage from "../images/profile.jpeg";
import data from "../data.json";
import "../components/style.css";

const main = () => {
  return (
    <div className="cover-image">
      <div className="profile-container">
        <img src={ProfileImage} alt="profile" className="profile-image" />
        <div className="profile-name">
          <h3>
            {data.profile.firstname} {data.profile.lastname} &#9807;
            <span className="check-symbol">&#10003;</span>
            <div className="arrange-boxes">
              <div>
                <p className="info-box"> {data.profile.followers} </p>
                <p className="info-box-name"> Followers</p>
              </div>
              <div>
                <p className="info-box"> {data.profile.following} </p>
                <p className="info-box-name"> Following</p>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default main;
