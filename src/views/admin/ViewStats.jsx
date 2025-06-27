"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import StatsCharts from "@/components/StatsCharts";

const ViewStatsView = () => {
  return (
    <div>
      <Navbar type="admin" />

      <section className="mx-auto max-w-[1227px] flex flex-col gap-12 mb-24 mt-16 p-4">
        <h2 className="text-xl font-bold">Estadísticas Generales</h2>
        <StatsCharts />

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-[#16b4ff] mb-2">Resumen</h3>
          <p>
            Estos gráficos muestran a los propietarios más activos, los usuarios
            que más han marcado favoritos, y las ciudades con más propiedades
            registradas. Los datos son simulados temporalmente.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViewStatsView;
