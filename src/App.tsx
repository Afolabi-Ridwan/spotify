import "./App.css";
import Loader from "./Pages/LoaderPage/loaderPage";
import { useState, useEffect } from "react";
import Homepage from "./Pages/HomePage/homePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ui from "./Pages/HomePage/Ui/ui";

function App() {
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loadingState ? <Loader /> : <Homepage />}
          <Route path="/home" element={<Homepage/>}/>
    </div>
  );
}

export default App;
