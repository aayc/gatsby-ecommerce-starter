import React from "react"
const Video = ({ videoSrcURL, videoTitle, width, height, ...props }) => (
  <div className="video">
    <iframe
      width={width}
      height={height}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video