"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import StatsCharts from "@/components/StatsCharts";
import { HashLoader } from "react-spinners";

const ViewStatsView = () => {
  return (
    <div>
      <Navbar type="admin" />

      <section className="mx-auto max-w-[1227px] flex flex-col gap-12 mb-24 mt-16 p-4">
        <h2 className="text-xl font-bold">Estadísticas Generales</h2>

        {/* Sección de Gráficos */}
        <StatsCharts />

        {/* Explicación de gráficos pequeños con leyenda de color */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Propietarios (morado) */}
          <div className="relative bg-white p-4 rounded-2xl shadow-md">
            <div
              className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#ae00ff]"
              title="Color de gráfico morado"
            ></div>
            <h3 className="text-md font-semibold text-[#16b4ff] mb-2">
              ¿Qué muestra este gráfico?
            </h3>
            <p>
              Este gráfico representa a los propietarios que han publicado más
              propiedades en la plataforma. Se consideran las últimas
              propiedades registradas.
            </p>
          </div>

          {/* Buscadores (azul) */}
          <div className="relative bg-white p-4 rounded-2xl shadow-md">
            <div
              className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#22ff00]"
              title="Color de gráfico azul"
            ></div>
            <h3 className="text-md font-semibold text-[#16b4ff] mb-2">
              ¿Qué muestra este gráfico?
            </h3>
            <p>
              Aquí se visualizan los usuarios tipo "seeker" que han marcado más
              propiedades como favoritas. Indica el nivel de interacción de los
              buscadores.
            </p>
          </div>

          {/* Tipos de propiedades (amarillo) */}
          <div className="relative bg-white p-4 rounded-2xl shadow-md">
            <div
              className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#ffc107]"
              title="Color de gráfico amarillo"
            ></div>
            <h3 className="text-md font-semibold text-[#16b4ff] mb-2">
              ¿Qué muestra este gráfico?
            </h3>
            <p>
              Esta gráfica muestra cuántas propiedades se han registrado por
              tipo, como casas, departamentos u otros. Ayuda a entender la
              oferta más común.
            </p>
          </div>
        </div>

        {/* Explicación del gráfico grande */}
        <div className="relative bg-white p-6 rounded-2xl shadow-md mt-6">
          <div
            className="absolute top-3 right-3 w-4 h-4 rounded-full bg-[#00bfff]"
            title="Color de gráfico azul"
          ></div>
          <h3 className="text-lg font-semibold text-[#16b4ff] mb-2">
            ¿Qué representa la actividad semanal?
          </h3>
          <p>
            Este gráfico de líneas muestra cuántas propiedades ha registrado el
            propietario más activo durante la semana. Permite visualizar qué
            días tiene mayor actividad en la plataforma.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViewStatsView;
