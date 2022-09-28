import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [apiFetch, setApiFetch] = useState(null);
  const [ifError, setIfError] = useState(null);

  //API request using axios
  const getAPIData = async () => {
    //for error handling we've used try/catch block here
    try {
      const response = await axios.get(
        "https://api.github.com/users/hadley/orgs"
      );
      setApiFetch(response.data);
    } catch (error) {
      setIfError(error.message);
    }
  };

  useEffect(() => {
    // fetch()
    //we're using then and catch like Promise, because fetch() will always return a 'Promise'
    // fetch("https://api.github.com/users/hadley/orgs")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data --> ", data);
    //     setApiFetch(data);
    //   })
    //   .catch((err) => console.log("err --> ", err));

    getAPIData();
  }, []);

  return (
    <div className="App">
      <h1>API Requests</h1>
      <h2> -- Result -- </h2>
      <div>{!apiFetch && ifError && <h2>{ifError}</h2>}</div>
      <div>
        {apiFetch &&
          apiFetch.map((item) => {
            return (
              <div style={{ border: "1px solid" }} key={item.id}>
                <h3 style={{ overflowX: "scroll" }}>{item.avatar_url}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
