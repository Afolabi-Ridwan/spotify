import { useEffect, useState } from "react";
import UserLocation from "../../Pages/HomePage/UserLocation/userLocation";
import { countries } from "../CountryCodes/country";

interface TrendingComponent {
  updateResultHandler: (result: object) => void;
  setLoadingHandler: (isLoading: boolean) => void;
  updateErrorState: (errorState: boolean) => void
  loadingState: boolean;
}

const Trending: React.FC<TrendingComponent> = ({
  updateResultHandler,
  setLoadingHandler,
  loadingState,
  updateErrorState
}) => {
  const [userCountry, setUserCountry] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const filterCountry = countries.filter(
    (eachCountry) =>
      userCountry !== null && eachCountry.name.includes(userCountry)
  );

  
  useEffect(() => {
    UserLocation(setUserCountry);
    console.log(userCountry);

    setTimeout(() => {
      const pageLoader = async () => {
        try {
          const filteredCountry = filterCountry.find((eachItem) => eachItem);

          const url =
            await `https://spotify81.p.rapidapi.com/top_200_tracks?country=${
              filteredCountry && filteredCountry.code
            }`;

          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "dee71d3e21msh8230662239558b1p141942jsn143f3e60756f",
              "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
            },
          };

          const response = await fetch(url, options);
          const result = await response.json();
          setLoadingHandler(true)
          updateResultHandler(result);
          console.log(result);
          


          if (response.ok) {
            // setLoadingHandler(true);
          // setLoadingHandler(true)

          } else {
            updateErrorState(true);
            console.log(errorMessage);
            // setLoadingHandler(true);
          }
        } 
        catch (error: any) {
          console.error(error);
          // setErrorMessage(error);
        }
      };

      return pageLoader();
    }, 100);
  }, [ loadingState]);

  return null;
};

export default Trending;
