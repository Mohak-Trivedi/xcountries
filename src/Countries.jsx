import React, { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const cardStyle = {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  };

  const imageStyle = {
    width: "100px",
    height: "100px"
  };

  return (
    <div style={containerStyle}>
      {countries.map((country) =>  (
        <div key={country.abbr} style={cardStyle}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            style={imageStyle}
          />
          <h2>{country.name}</h2>
        </div>
      )
      )}
    </div>
  );
}

export default App;
