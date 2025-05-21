"use client";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import UniversalButton from "@/components/UniversalButton";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-full">
      <UniversalButton
        text="CERRAR SESIÓN"
        icon={IoLogOutOutline}
        color="secondary"
        size="base"
      />
      <UniversalButton
        text="PERFIL"
        icon={FaUserAlt}
        color="primary"
        size="base"
      />
      <UniversalButton
        text="AGREGAR"
        icon={IoMdAdd}
        color="primary"
        size="base"
        iconPosition="right"
      />

      <UniversalButton
        text="EDITAR"
        color="primary"
        size="base"
      />
      
    </div>
  );
};

export default Page;















/* import ButtonProfile from "@/components/butonComponent";
import {ButtonLogOut, ButtonStart, ButtonSearch, ButtonAdd, ButtonEdit, ButtonDelete, ButtonSearch2, ButtonJoin, ButtonLogIn, ButtonCreateAccount, ButtonMyProperties, ButtonSave, ButtonAccept, ButtonCreateAccount2, ButtonPrice, ButtonPropertyType, ButtonRoomBath, ButtonPlus, ButtonContactAdvertiser, ButtonAddFavourites, ButtonEditProperty, ButtonRegisterNP, ButtonUpload, ButtonPublishProperty } from "@/components/butonComponent";


const AndrewPage = () => {
  return (
    <div>

      <ButtonLogOut a={"CERRAR SESIÓN"} />
      <ButtonProfile b={"PERFIL"} />
      <ButtonStart c={"EMPEZAR"}/>
      <ButtonSearch d={"BUSCAR"}/>
      <ButtonAdd e={"AGREGAR"}/>
      <ButtonEdit f={"EDITAR"}/>
      <ButtonDelete g={"ELIMINAR"}/>
      <ButtonSearch2 h={"BUSCAR PROPIEDAD"}/>
      <ButtonJoin i={"UNIRSE"}/>
      <ButtonLogIn j={"INICIAR SESIÓN"}/>
      <ButtonCreateAccount k={"CREAR UNA CUENTA AHORA"}/>
      <ButtonMyProperties l={"MIS PROPIEDADES"} />
      <ButtonSave m={"GUARDADOS"}/>
      <ButtonAccept n={"ACEPTAR"}/>
      <ButtonCreateAccount2 o={"CREATE ACCOUNT"}/>
      <ButtonPrice p={"PRECIO"}/>
      <ButtonPropertyType q={"TIPO DE PROPIEDAD"}/>
      <ButtonRoomBath r={"CUARTOS Y BAÑOS"}/>
      <ButtonPlus s={"MÁS"}/>
      <ButtonContactAdvertiser t={"CONTACTAR AL ANUNCIANTE"}/>
      <ButtonAddFavourites u={"AÑADIR A FAVORITOS"}/>
      <ButtonEditProperty v={"EDITAR PROPIEDAD"}/>
      <ButtonRegisterNP w={"REGISTRAR NUEVA PROPIEDAD"}/>
      <ButtonUpload x={"Elije un archivo "}/>
      <ButtonPublishProperty y={"PUBLICAR PROPIEDAD"}/>
      
      

    </div>
  );
};


export default AndrewPage;
 */