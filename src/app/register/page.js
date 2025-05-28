import Image from "next/image";

const RegsiterSelection = () => {
  return (
    <div>
      <div className="w-full bg-[#bad8e7] text-center py-16">
        <p className="text-2xl text-[#373737] font-light tracking-[0.25px]">
          Selecciona el perfil con el que te identificas
        </p>
        <h1 className="text-6xl text-[#373737] font-light tracking-[0.25px]">
          Que estas buscando?
        </h1>
      </div>
      <div className="flex gap-14 py-24 justify-center flex-wrap">
        <div className="bg-white rounded-lg shadow-md max-w-[280px] p-5 flex flex-col  text-center gap-4">
          <Image src={"/landlord.png"} width={240} height={180} alt="imagen" />
          <div>
            <h1>Propietario</h1>
            <p>Quieres rentar o vender una casa</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md max-w-[280px] p-5 flex flex-col  text-center gap-4">
          <Image src={"/seeker.png"} width={240} height={180} alt="imagen" />
          <div>
            <h1>Propietario</h1>
            <p>Quieres rentar o vender una casa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegsiterSelection;
