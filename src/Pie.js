import "./App.css";
import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

const Pie = () => {
  const [loading, setLoading] = useState(true);
  const [chartValues, setChartValues] = useState({ groupOne: 0, groupTwo: 0 });

  useEffect(() => {
    const fetchValues = async () => {
      let groupOne = 0;
      let groupTwo = 0;
      let res = await fetch(
        "https://docs.openaq.org/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2021-06-17T17%3A03%3A00%2B00%3A00&limit=100&page=1&offset=0&sort=desc&unit=%C2%B5g%2Fm%C2%B3&radius=1000&order_by=datetime"
      );
      let data = await res.json();

      data.results.forEach((result) => {
        if (result.value >= 5) {
          groupOne++;
        } else {
          groupTwo++;
        }
      });
      setLoading(false);
      setChartValues({ groupOne, groupTwo });
    };
    fetchValues();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h1>hello</h1>
      <PieChart
        className="chart_part"
        data={[
          {
            title: "Group1",
            value: chartValues.groupOne,
            color: "#E386",
          },
          { title: "Group2", value: chartValues.groupTwo, color: "#32a8" },
        ]}
      />
    </div>
  );
};

export default Pie;
