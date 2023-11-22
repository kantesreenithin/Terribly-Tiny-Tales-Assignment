import React from "react";
import data from "../data.json";
import "../components/style.css";
import star from "../images/star.png";
import likes from "../images/like.png";
import view from "../images/view.png";
import heart from "../images/heart.png";
import posts from "../posts.json";
const post = () => {
  return (
    <div>
      <div className="info-place">
        <p>{data.profile.Bio}</p>
        <a href={data.profile.link}>{data.profile.link}</a>
      </div>
      <div className="info-detail-place">
        <div className="info-detail-arrange">
          <img src={star} alt="like" />
          <p> {data.profile.star} </p>
        </div>
        <div className="info-detail-arrange">
          <img src={likes} alt="like" />
          <p> {data.profile["profile-likes"]} </p>
        </div>
        <div className="info-detail-arrange">
          <img src={view} alt="like" />
          <p> {data.profile["profile-view"]} </p>
        </div>
        <div className="info-detail-arrange">
          <img src={heart} alt="like" />
          <p> {data.profile.loves} </p>
        </div>
      </div>
      <div className="post-place">
        <span className="posts">{data.profile.posts} Posts</span>
      </div>
      <div className="post-bottom-line"></div>
      {posts.map((info) => {
        return (
          <div className="sub">
          <div className="matter">
            <h2>{info.title}</h2>
            <img src={likes} alt="like" className="matter-like" />
          </div>
          <div className="sub-matter">
            <p>{info.description}</p>
          </div>
          <div className="matter-info">
            <p className="sub-m">
              <span className="sub-m-info">musing by</span>{" "}
              {data.profile.firstname}
              {data.profile.lastname}{" "}
            </p>
            <p className="sub-m-info-2">{info.view}</p>
          </div>
          <div className="sub-border"></div>
        </div>
        )
       
      })}
    </div>
  );
};

export default post;
