import React from "react";
import Header from "../components/Header";
import { MdPlayCircle } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Sidebar from "../components/Sidebar";
import MediaPlayer from "../components/MediaPlayer";
import { useState } from "react";
import AddScreenModal from "../components/AddScreenModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import songs from "../assets/Songs";


const MusicDashboard = () => {
  const navigate = useNavigate();
  const [addSongScreen, setAddSongScreen] = useState(false);
  const [currSong, setCurrSong] = useState(null);
  const [songsList, setSongsList] = useState(songs);

  const deleteSong = (id) => {};
  console.log(currSong);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {addSongScreen && <AddScreenModal addSongScreen={setAddSongScreen} songs={setSongsList} />}
      <Sidebar />
      <div className="music_box">
        <Header addSongScreen={setAddSongScreen}  songsList={setSongsList} />
        <table className="tableContent" cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th>SONG NAME</th>
              <th>SOURCE</th>
              <th>ADDED ON</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <br />
          <br />
          <tbody>
            {songsList.map((item, index) => (
              <tr key={item.id}>
                <td className="photu">
                  <img src={item.photoAlbum} alt="albumLogo" />
                  {item.name}
                </td>
                <td>{item.source}</td>
                <td>{item.date}</td>
                <td className="clickable"  onClick={() => setCurrSong(item.name)}>
                  <MdPlayCircle color="#FDB927" size="40px" />
                </td>
                <td className="clickable" onClick={() => deleteSong(item.id)}
>
                  <AiOutlineDelete size="14px" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <MediaPlayer playing={currSong} songs={songsList}/>
      </div>
    </div>
  );
};

export default MusicDashboard;
