"use client";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

interface IProps {
  labels: string[];
  data: number[] | string[];
  showLegend?: boolean; // Optional prop to control legend display
}

const PieChart: React.FC<IProps> = ({ labels, data, showLegend = true }) => {
  // Register necessary components from ChartJS, always include Legend to satisfy TypeScript
  ChartJS.register(ArcElement, Tooltip, Legend);

  // Data for the pie chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset Label",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the chart
  const options = {
    plugins: {
      legend: {
        display: showLegend,
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
