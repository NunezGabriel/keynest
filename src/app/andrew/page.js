import ButtonProfile from "@/components/butonComponent";
import {ButtonHome, ButtonLogOut} from "@/components/butonComponent";


const AndrewPage = () => {
  return (
    <div>
      <ButtonProfile a={"Perfil Usuario"} />
      <ButtonHome b={"Mis propiedades"} />
      <ButtonLogOut c={"Cerrar Sesión"} />
    </div>
  );
};


export default AndrewPage;
