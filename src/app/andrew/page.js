import Buton from "@/components/butonComponent";
import {ButtonHome, ButtonLogOut} from "@/components/butonComponent";


const AndrewPage = () => {
  return (
    <div>
      <Buton a={"Perfil Usuario"} />
      <ButtonHome a={"Mis propiedades"} />
      <ButtonLogOut a={"Cerrar Sesión"} />
    </div>
  );
};


export default AndrewPage;
