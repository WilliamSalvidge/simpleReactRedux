import React, {
  useState,
  useEffect,
  useContext
} from "react";
import { NavLink } from "react-router-dom";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const resultsMessages = {
  buttonA: "You have selected button A!",
  buttonB: "You have selected button B!",
  buttonC: "You have selected button C!",
  buttonD: "You have selected button D!"
};

function Results() {
  const data = useSelector(state => state.data);
  const [resultsData, setResultsData] =
    useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let trueKeys = Object.keys(data).filter(
        x => data[x] == true
      );
      let resultsMessageKeys = trueKeys.map(
        x => resultsMessages[x]
      );
      setResultsData(resultsMessageKeys);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="checkbox">
        {resultsData.map((result, idx) => {
          return (
            <div key={idx}>
              <h1>{result}</h1>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Home
        </Button>
      </Link>
    </>
  );
}

export default Results;