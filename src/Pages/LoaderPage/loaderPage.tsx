
import "./loaderPage.css";
import spotifyLogo from "../../Assets/Images/SpotifyLogoPNGImage.png"
import { useEffect, useState } from "react";
import UserLocation from "../HomePage/UserLocation/userLocation";
import Context from "../../Services/Context/createContext";

const Loader = () => {
  const [userCountry, setUserCountry] = useState("");
  console.log(userCountry)

  useEffect(() => {
    
    UserLocation(setUserCountry);
  }, [userCountry])

  return (
    <div>
      <Context.Provider value={{userCountry: userCountry}}>      
        <div className="loaderPage">
          <img src={spotifyLogo} alt="spotify-logo" />
        </div>
        </Context.Provider>
    </div>
  );
};

export default Loader;
