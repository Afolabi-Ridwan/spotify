import "./App.css";
import Loader from "./Pages/LoaderPage/loaderPage";
import { useState, useEffect } from "react";
import Homepage from "./Pages/HomePage/homePage";

function App() {
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
  }, []);

  return <div className="App">{loadingState ? <Loader /> : <Homepage />}</div>;
}

export default App;