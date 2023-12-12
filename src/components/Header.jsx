const Header = (props) => {
  return (
    <div className="headerContainer">
      <div className="menu">
        First-level Menu / Second-level Menu / <span>Current Page</span>
      </div>
      <div className="songSection">
        <h1 className="songText">Songs</h1>
        <button onClick={() => props.addSongScreen(true)}>Add Songs</button>
      </div>
    </div>
  );
};

export default Header;
