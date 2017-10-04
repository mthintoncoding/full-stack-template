import React from 'react';
import $ from 'jquery';
import '../video.css';
import '../video.js';

const Video = () => (
  <div className="homepage-hero-module">
      <div className="video-container">
          <div className="filter"></div>
          <video autoPlay loop className="fillWidth">
              <source src="/Users/mthinton/Downloads/Fresh-Paint/MP4/Fresh-Paint.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
              <source src="/Users/mthinton/Downloads/Fresh-Paint/WEBM/Fresh-Paint.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div className="poster">
              <img src="/Users/mthinton/Downloads/Fresh-Paint/Snapshots/Fresh-Paint.jpg" alt=""></img>
          </div>
      </div>
  </div>
)

export default Video
