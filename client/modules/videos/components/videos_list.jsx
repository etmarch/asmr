import React from 'react';


const VideosList = ({videos}) => (
  <div>
    <h3 className="centered">All Videos</h3>
    {videos.map( (video, index) => {
      return (<div key={video._id}><VideoGridCell video={video} /></div>);
    })}
  </div>
);

export default VideosList;


const VideoGridCell = (video) => (
    <div>
      <h4>{video.title}</h4>
      <video src={video.s3Url} autoplay poster="/poster_images/tube_logo.png">
        Sorry, your browser doesn't support embedded videos,
        but don't worry, you can <a href={video.s3Url}>download it</a>
        and watch it with your favorite video player!
      </video>
      <p>Artist: {video.ownerId}</p>
      <p>Likes: {video.likes}</p>
      <p>Plays: {video.playCount}</p>
      <p>Artist: {video.ownerId}</p>
    </div>
);
