import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { UserContext } from "../../context/userContext";
import "./Chart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ money }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(money);
  }, []);
  return (
    <div className="app__Chart">
      <Doughnut
        data={{
          labels: [...data.map((item) => item.title)],
          datasets: [
            {
              label: "expenses",
              data: [...data.map((item) => item.amount)],
              backgroundColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
                "rgba(200, 100, 135, 0.8)",
              ],
              borderColor: [
                "rgba(43, 63, 229, 0.8)",
                "rgba(250, 192, 19, 0.8)",
                "rgba(253, 135, 135, 0.8)",
                "rgba(200, 100, 135, 0.8)",
              ],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Revenue Sources",
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
