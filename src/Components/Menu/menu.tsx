import "./menu.css";
import { FaBars, FaSearch } from "react-icons/fa";

export const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="header">
          <FaBars />
          <p> Spotify Muzik</p>
        </div>

        <form >
          <div className="searchIcon">
            <FaSearch/>
          </div>
          <input placeholder="Search songs, albums, artists, podcasts" />
        </form>

        <p className="user">A</p>
      </div>
    </>
  );
};

// export default Menu
