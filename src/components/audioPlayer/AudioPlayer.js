"use client";
import { useRef, useState } from "react";
import { GiPauseButton } from "react-icons/gi";
import { IoPlaySharp } from "react-icons/io5";
import { FiRepeat } from "react-icons/fi";

// Time format
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const AudioPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const audioRef = useRef(null);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      audioRef.current.pause();
    } else {
      setPlaying(true);
      audioRef.current.play();
    }
  };

  // Current playback time handle
  const handlePlayedTime = () => {
    setPlayed(audioRef.current.currentTime || 0);
    // Hide player After Audio play end
    if (audioRef.current.ended && !loop) setPlaying(false);
  };
  const handleDuration = () => {
    setDuration(audioRef.current.duration || 0);
  };

  // Handle Renge Slider Value
  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setPlayed(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="w-[44px] h-[44px] bg-green-600 rounded-full flex justify-center items-center"
        >
          <span className="text-white">
            {playing ? (
              <GiPauseButton className="text-[25px]" />
            ) : (
              <IoPlaySharp className="ml-1 text-[25px]" />
            )}
          </span>
        </button>
        <div className={`flex items-center gap-3 ${playing ? "" : "hidden"}`}>
          {/* Range Slider */}
          <input
            type="range"
            value={played}
            max={duration}
            onChange={handleProgressChange}
            className="h-[4px] w-[120px] outline-none accent-green-500"
          />

          <span className={`text-secondary-text w-8`}>
            {formatTime(duration - played)}
          </span>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={url}
        onPlay={handleDuration}
        onTimeUpdate={handlePlayedTime}
        onLoad={(e) => (e.currentTarget.preload = "metadata")}
      />
    </div>
  );
};

export default AudioPlayer;
