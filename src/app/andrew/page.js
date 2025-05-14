import ButtonProfile from "@/components/butonComponent";
import {ButtonHome, ButtonLogOut} from "@/components/butonComponent";


const AndrewPage = () => {
  return (
    <div>
      <ButtonProfile a={"PERFIL"} />
      <ButtonHome b={"MIS PROPIEDADES"} />
      <ButtonLogOut c={"CERRAR SESIÓN"} />
    </div>
  );
};


export default AndrewPage;
