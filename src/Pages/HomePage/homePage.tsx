import "./homePage.css";
import Trending from "../../Services/Api/trendingAPI";
import { useState } from "react";
import Spinner from "../../Components/Spinner/spinner";
import Ui from "./Ui/ui"

const Homepage = () => {


  const [result, updateResult] = useState<any>(null);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [errorState, setErrorState] = useState<boolean>(false);


  return (
    <div className="homepage">
      <Trending updateErrorState={setErrorState} loadingState={loadingState} setLoadingHandler={setLoadingState} updateResultHandler={updateResult} />

      {!loadingState ? <Spinner/> : <Ui resultHandler={result} errorState={errorState}/>}


    </div>
  );
};



export default Homepage;