import darkSouls from "../assets/darksouls.mp4";

const Video = () => {
  return (
    <div className="h-[80vh] w-full overflow-hidden">
      <video
        src={darkSouls}
        autoPlay
        loop
        muted
        controls={false}
        className="w-full h-full object-cover border-0"
      ></video>
    </div>
  );
};

export default Video;
