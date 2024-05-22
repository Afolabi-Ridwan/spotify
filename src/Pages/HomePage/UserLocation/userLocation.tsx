
const UserLocation = (setUserCountry: Function | null) => {


  function getUserCountryName() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function successCallback(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = "aeb1243b27064f8894e306a845c064f7";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude}+${longitude}&pretty=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const countryName = data.results[0].components.country;
        setUserCountry !== null && setUserCountry(countryName);
      })
      .catch((error) => {
        console.error("Error fetching data from the geocoding API:", error);
      });
  }

  function errorCallback(error: any) {
    console.error("Error getting user location:", error.message);
  }
    getUserCountryName();
};

export default UserLocation;
