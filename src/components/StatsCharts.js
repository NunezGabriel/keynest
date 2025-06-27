"use client";
import { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { useProperty } from "@/context/PropertyContext";
import { useAuth } from "@/context/AuthContext";

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
      ticks: { color: "#000" },
    },
    y: {
      ticks: { beginAtZero: true, color: "#000", stepSize: 1 },
    },
  },
};

const StatsCharts = () => {
  const { getProperties, getAllFavorites } = useProperty();

  const { user } = useAuth();

  const [landlordsData, setLandlordsData] = useState(null);
  const [seekersData, setSeekersData] = useState(null);
  const [typeData, setTypeData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const properties = await getProperties();
      const favorites = await getAllFavorites();

      // --- 1. Top 5 Propietarios ---
      const landlordCounts = {};
      properties.forEach((prop) => {
        const name = prop.user?.name || "Desconocido";
        landlordCounts[name] = (landlordCounts[name] || 0) + 1;
      });
      const sortedLandlords = Object.entries(landlordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setLandlordsData({
        labels: sortedLandlords.map((e) => e[0]),
        datasets: [
          {
            label: "Propiedades Publicadas",
            data: sortedLandlords.map((e) => e[1]),
            backgroundColor: "#e4aaff",
            borderColor: "#ae00ff",
            borderWidth: 2,
          },
        ],
      });

      // --- 2. Top 5 Buscadores ---
      const seekerCounts = {};
      favorites.forEach((fav) => {
        const name = fav.user?.name || "Desconocido";
        seekerCounts[name] = (seekerCounts[name] || 0) + 1;
      });
      const sortedSeekers = Object.entries(seekerCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setSeekersData({
        labels: sortedSeekers.map((e) => e[0]),
        datasets: [
          {
            label: "Favoritos Marcados",
            data: sortedSeekers.map((e) => e[1]),
            backgroundColor: "#a1ffb8",
            borderColor: "#009325",
            borderWidth: 2,
          },
        ],
      });

      // --- 3. Tipos de Propiedades (Casa vs Departamento) ---
      const typeCounts = {};
      properties.forEach((prop) => {
        const type = prop.property_type || "Desconocido";
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });
      const sortedTypes = Object.entries(typeCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      setTypeData({
        labels: sortedTypes.map((e) => e[0]),
        datasets: [
          {
            label: "Propiedades por Tipo",
            data: sortedTypes.map((e) => e[1]),
            backgroundColor: "#fede7d",
            borderColor: "#b58800",
            borderWidth: 2,
          },
        ],
      });

      // --- 4. Línea: Propietario más activo por día ---
      if (sortedLandlords.length > 0) {
        const topLandlordName = sortedLandlords[0][0];
        const weeklyCount = {
          Lunes: 0,
          Martes: 0,
          Miércoles: 0,
          Jueves: 0,
          Viernes: 0,
          Sábado: 0,
          Domingo: 0,
        };

        properties
          .filter((p) => p.user?.name === topLandlordName)
          .forEach((p) => {
            const dayName = new Date(p.created_at).toLocaleDateString("es-ES", {
              weekday: "long",
            });
            weeklyCount[capitalize(dayName)] += 1;
          });

        setWeeklyData({
          labels: Object.keys(weeklyCount),
          datasets: [
            {
              label: "Propiedades Vendidas",
              data: Object.values(weeklyCount),
              fill: true,
              backgroundColor: "rgba(22, 180, 255, 0.2)",
              borderColor: "#16b4ff",
              tension: 0.3,
              pointRadius: 3,
              pointBackgroundColor: "#16b4ff",
            },
          ],
        });
      }
    };

    fetchStats();
  }, []);

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  if (!landlordsData || !seekersData || !typeData || !weeklyData) {
    return (
      <p className="text-center text-gray-500">Cargando estadísticas...</p>
    );
  }

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
        <h3 className="text-lg font-semibold mb-2 text-center">
          Tipos de Propiedades
        </h3>
        <Bar data={typeData} options={chartOptions} />
      </div>

      <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          Actividad Semanal del Propietario Más Activo
        </h3>
        <Line data={weeklyData} options={chartOptions} />
      </div>
    </div>
  );
};

export default StatsCharts;
