/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Youtube.css";

function Youtube() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  // fetch(
  //   "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDgXOiw4ydyd8lJS-lfc4UlHLn3vjK8EiY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
  // )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     setVideos(data.items);
  //     console.log(data.items);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching videos:", error);
  //   });

  // }, []);

  useEffect(() => {
    getYoutubeAPI();
  }, []);

  async function getYoutubeAPI() {
    try {
      const API_KEY = "AIzaSyDgXOiw4ydyd8lJS-lfc4UlHLn3vjK8EiY";

      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8`
      );

      setVideos(response.data.items);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  }
  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {videos.map((video) => {
            let videoId = video.id.videoId;
            let videoLink = `https://www.youtube.com/watch?v=${videoId}`;
            let thumbnails = video.snippet.thumbnails.high.url;
            let title = video.snippet.title;
            let description = video.snippet.description;

            return (
              <div key={videoId} className="col-sm-12 col-md-3">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={videoLink} target="_blank" rel="noreferrer">
                      <img src={thumbnails} alt={title} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={videoLink} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                    </div>
                    <div className="videoDesc">{description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Youtube;
