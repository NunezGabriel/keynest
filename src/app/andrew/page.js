"use client";

import UniversalButton from "@/components/UniversalButton";
import DropdownButton from "@/components/DropdownButton";
import RegisterPropertyMenu from "@/components/RegisterPropertyMenu"; // 👈 importamos el nuevo componente

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <UniversalButton
        text="CERRAR SESIÓN"
        color="secondary"
        onClick={() => console.log("Cerrar sesión")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="PERFIL"
        color="primary"
        onClick={() => console.log("Ir al perfil")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="AGREGAR"
        color="primary"
        onClick={() => console.log("Agregar nueva propiedad")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="EDITAR PROPIEDAD"
        iconPosition="left"
        color="primary"
        iconClassName="text-[#1290CB]"
        iconBackgroundStyle="bg-white px-1 py-1 rounded-md"
        onClick={() => console.log("Editar propiedad")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="BUSCAR PROPIEDAD"
        iconPosition="left"
        color="#000000"
        iconClassName="#000000"
        iconBackgroundStyle="bg-white px-1 py-1 rounded-md"
        onClick={() => console.log("Buscar propiedad")}
        responsive="hidden md:flex"
      />

      {/* 👇 Se usa el nuevo componente con menú */}
      <RegisterPropertyMenu />

      <DropdownButton
        text="MÁS"
        options={[
          {
            label: "Con jardín",
            onClick: () => console.log("Filtrar jardín"),
          },
          {
            label: "Con cochera",
            onClick: () => console.log("Filtrar cochera"),
          },
        ]}
      />
    </div>
  );
};

export default Page;





/* "use client";
import UniversalButton from "@/components/UniversalButton";
import DropdownButton from "@/components/DropdownButton";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <UniversalButton
        text="CERRAR SESIÓN"
        color="secondary"
        onClick={() => console.log("Cerrar sesión")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="PERFIL"
        color="primary"
        onClick={() => console.log("Ir al perfil")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="AGREGAR"
        color="primary"
        onClick={() => console.log("Agregar nueva propiedad")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="EDITAR PROPIEDAD"
        iconPosition="left"
        color="primary"
        iconClassName="text-[#1290CB]"
        iconBackgroundStyle="bg-white px-1 py-1 rounded-md" 
        onClick={() => console.log("Editar propiedad")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="BUSCAR PROPIEDAD"
        iconPosition="left"
        color="#000000"
        iconClassName="#000000"
        iconBackgroundStyle="bg-white px-1 py-1 rounded-md" 
        onClick={() => console.log("Buscar propiedad")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="REGISTRAR NUEVA PROPIEDAD"
        iconPosition="left"
        color="primary"
        iconClassName="text-[#1290CB]"
        iconBackgroundStyle="bg-white px-1 py-1 rounded-md"
        onClick={() => console.log("Registrar nueva propiedad")}
      />

      <DropdownButton
        text="MÁS"
        options={[
          {
            label: "Con jardín",
            onClick: () => console.log("Filtrar jardín"),
          },
          {
            label: "Con cochera",
            onClick: () => console.log("Filtrar cochera"),
          },
        ]}
      />


    </div>
  );
};

export default Page; */











/* "use client";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import UniversalButton from "@/components/UniversalButton";
import DropdownButton from "@/components/DropdownButton";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <UniversalButton
        text="CERRAR SESIÓN"
        icon={IoLogOutOutline}
        color="secondary"
        onClick={() => console.log("Cerrar sesión")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="PERFIL"
        icon={FaUserAlt}
        color="primary"
        onClick={() => console.log("Ir al perfil")}
        responsive="hidden md:flex"
      />

      <UniversalButton
        text="AGREGAR"
        icon={IoMdAdd}
        color="primary"
        onClick={() => console.log("Agregar nueva propiedad")}
        responsive="hidden md:flex"
      />

      <DropdownButton
        text="MÁS"
        options={[
          {
            label: "Con jardín",
            onClick: () => console.log("Filtrar jardín"),
          },
          {
            label: "Con cochera",
            onClick: () => console.log("Filtrar cochera"),
          }
        ]}
      />
    </div>
  );
};

export default Page;
 */





/* "use client";
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

export default Page; */















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