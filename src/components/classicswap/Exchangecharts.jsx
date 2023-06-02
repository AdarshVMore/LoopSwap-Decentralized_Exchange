
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Exchangecharts({ selectedToken }) {
  const [priceHistory, setPriceHistory] = useState([]);
  const [timeRange, setTimeRange] = useState("30"); // Default time range is 30 days
  var text = selectedToken ? selectedToken.symbol: "None";
  console.log(text.toLowerCase())
  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${text.toLowerCase()}/market_chart?vs_currency=usd&days=${timeRange}`
        );
        const { prices } = response.data;
        setPriceHistory(prices);
      } catch (error) {
        console.log("Error fetching price history:", error);
      }
    };

    fetchPriceHistory();
  }, [timeRange]);

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  const chartData = {
    labels: priceHistory.map((priceData) =>
      new Date(priceData[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Price History",
        data: priceHistory.map((priceData) => priceData[1]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div>
    <h1>Token Price History</h1>
    <div>
      <label htmlFor="timeRange">Time Range:</label>
      <select id="timeRange" value={timeRange} onChange={handleTimeRangeChange}>
        <option value="30">30 Days</option>
        <option value="90">90 Days</option>
        <option value="180">180 Days</option>
        <option value="365">1 Year</option>
        <option value="all">All Time</option>
      </select>
    </div>
    <Line data={chartData} />
  </div>
  );
}

export default Exchangecharts;