
import "./loaderPage.css";
import spotifyLogo from "../../Assets/Images/SpotifyLogoPNGImage.png"

const Loader = () => {
  return (
    <div>
      
        <div className="loaderPage">
          <img src={spotifyLogo} alt="spotify-logo" />
        </div>
      
    </div>
  );
};

export default Loader;
