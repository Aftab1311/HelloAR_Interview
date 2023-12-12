import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import album from "../assets/images/image.png";

const MediaPlayer = ({playing, songs}) => {
  const [songControls, setSongControls] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    if (playing === null) {
      return;
    } else {
      setCurrentSongIndex(
        songs.findIndex((item) => {
          return item.name === playing;
        })
      );
      setCurrentSong(songs[currentSongIndex]);
      setSongControls(true);
      setIsPlaying(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const playPauseToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSong(songs[newIndex]);
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    const newIndex =
      (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[newIndex]);
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  return (
    songControls && (
      <div className="mediaPlayer">
        <input
          type="range"
          className="progressBar"
          id="music_played"
          value={progress}
          min="0"
          max="100"
          onChange={(e) => setProgress(e.target.value)}
        />
        <div className="songDetails">
          <span className="details">
            <img src={album} alt="albumLogo" />
            <span className="songName">{currentSong?.name}</span>
          </span>
          <span className="icons">
            <GiPreviousButton onClick={playPreviousSong} />
            <span onClick={playPauseToggle}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </span>
            <GiNextButton onClick={playNextSong} />
          </span>
        </div>
      </div>
    )
  );
};

export default MediaPlayer;
