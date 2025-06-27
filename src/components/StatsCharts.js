"use client";
import { Bar, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => ` ${context.parsed.y} propiedades`,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#000",
      },
    },
    y: {
      ticks: {
        beginAtZero: true,
        color: "#000",
      },
    },
  },
};

const StatsCharts = () => {
  const landlordsData = {
    labels: ["Juan", "María", "Carlos", "Ana", "Luis"],
    datasets: [
      {
        label: "Propiedades Publicadas",
        data: [12, 9, 6, 5, 3],
        backgroundColor: "#e4aaff",
        borderColor: "#ae00ff",
        borderWidth: 2,
      },
    ],
  };

  const seekersData = {
    labels: ["Pedro", "Laura", "Miguel", "Sofía", "Andrés"],
    datasets: [
      {
        label: "Favoritos Marcados",
        data: [15, 11, 9, 6, 4],
        backgroundColor: "#abe5ff",
        borderColor: "#0088c7",
        borderWidth: 2,
      },
    ],
  };

  const citiesData = {
    labels: ["Arequipa", "Lima", "Cusco", "Trujillo", "Piura"],
    datasets: [
      {
        label: "Propiedades por Ciudad",
        data: [20, 18, 14, 11, 6],
        backgroundColor: "#fede7d",
        borderColor: "#ffc107",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-center">
          Top Propietarios
        </h3>
        <Bar data={landlordsData} options={chartOptions} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-center">
          Top Buscadores
        </h3>
        <Bar data={seekersData} options={chartOptions} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-2 text-center">Top Ciudades</h3>
        <Bar data={citiesData} options={chartOptions} />
      </div>

      <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Actividad Semanal del Propietario Más Activo
        </h3>
        <Line
          data={{
            labels: [
              "Lunes",
              "Martes",
              "Miércoles",
              "Jueves",
              "Viernes",
              "Sábado",
              "Domingo",
            ],
            datasets: [
              {
                label: "Propiedades Vendidas",
                data: [1, 3, 2, 4, 3, 5, 2], // ← Datos falsos
                fill: true,
                backgroundColor: "rgba(22, 180, 255, 0.2)", // Relleno claro
                borderColor: "#16b4ff", // Línea azul
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "#16b4ff",
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (context) => ` ${context.parsed.y} propiedades`,
                },
              },
            },
            scales: {
              x: {
                ticks: { color: "#000" },
              },
              y: {
                ticks: {
                  beginAtZero: true,
                  color: "#000",
                  stepSize: 1,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StatsCharts;
