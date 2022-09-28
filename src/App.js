import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [apiFetch, setApiFetch] = useState(null);

  useEffect(() => {
    // fetch using promise
    fetch("https://api.github.com/users/hadley/orgs")
      .then((res) => res.json())
      .then((data) => {
        console.log("data --> ", data);
        setApiFetch(data);
      })
      .catch((err) => console.log("err --> ", err));
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

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
