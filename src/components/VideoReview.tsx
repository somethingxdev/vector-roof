import ReactPlayer from 'react-player'
const Video = ({url}) => {
  return (
    <div className="player-wrapper h-full w-full rounded-lg">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        light="/company-poster.png"
        playing
        controls
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </div>
  );
};
export default Video;
