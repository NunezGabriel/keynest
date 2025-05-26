import Image from "next/image";

const HomeGuest = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center w-full bg-white px-4 sm:px-6 lg:px-8">
        <Image
          src="bigbackground.svg"
          alt="Descripción"
          width={0}
          height={0}
          sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 85vw"
          className="w-full h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default HomeGuest;
