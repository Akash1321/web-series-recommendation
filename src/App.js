import { useState } from "react";
import "./styles.css";

const showList = {
  prime: [
    { seriesName: "Panchayat", rating: "8.9" },
    { seriesName: "The Family Man", rating: "8.7" },
    { seriesName: "Mirzapur", rating: "8.5" }
  ],
  netflix: [
    { seriesName: "Kota Factory", rating: "9.1" },
    { seriesName: "Stories by Rabindranath Tagore", rating: "8.7" },
    { seriesName: "Delhi Crime", rating: "8.5" }
  ],
  hotstar: [
    { seriesName: "Special OPS", rating: "8.6" },
    { seriesName: "Criminal Justice", rating: "8.1" },
    { seriesName: "Aarya", rating: "7.8" }
  ],
  sonyLiv: [
    { seriesName: "Scam 1992", rating: "9.3" },
    { seriesName: "Gullak", rating: "9.2" },
    { seriesName: "Rocket Boys", rating: "8.9" }
  ],
  zee5: [
    { seriesName: "Kaali", rating: "8.9" },
    { seriesName: "Crashh", rating: "8.7" },
    { seriesName: "Jeet Ki Zid", rating: "8.2" }
  ]
};
export default function App() {
  const [recommendationList, setRecommendationList] = useState("prime");

  function clickHandler(platforms) {
    setRecommendationList(platforms);
  }

  return (
    <div className="App">
      <h1> Indian Web series </h1>
      <p>Best Indian Web series of famous OTT platforms</p>

      <div className="ott-container">
        {Object.keys(showList).map((platforms) => (
          <button
            keys={platforms}
            className="ott-platforms"
            onClick={() => clickHandler(platforms)}
          >
            {platforms}
          </button>
        ))}
      </div>

      <ul className="list-holder">
        {showList[recommendationList].map((series) => (
          <li key={series} className="display-list">
            <div className="display-name"> {series.seriesName} </div>
            <div className="display-rating">
              {" "}
              IMDb - <span> {series.rating} </span>{" "}
            </div>
          </li>
        ))}
      </ul>

      <p> Curated by Akash with 💙 </p>
    </div>
  );
}
