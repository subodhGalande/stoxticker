import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const Graph: React.FC = () => {
  const [valuesX, setValuesX] = useState([]);
  const [valuesY, setValuesY] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=XRF1NKMNXGCG6BP3`
    )
      .then((response) => response.json())
      .then((res) => {
        for (let key in res["Time Series (Daily)"]) {
          setValuesX(Object.keys(res[key]));
          setValuesY(res["Time Series (Daily)"][key]["1. open"]);
        }
        console.log(res);
      });

    //console.log(valuesY);
    console.log(valuesX);
  }, []);

  return (
    <div>
      <h1>Stock Market</h1>
      <Plot
        data={[
          {
            x: valuesX,
            y: valuesY,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
        ]}
        layout={{ width: 720, height: 440, title: "A Fancy Plot" }}
      />
    </div>
  );
};

export default Graph;
