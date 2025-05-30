import UniversalButton from "@/components/UniversalButton";

const LaandlordRegister = () => {
  return (
    <div className="relative">
      <div className="w-full h-[352px] bg-[#bad8e7] text-center py-16"></div>

      {/* Contenedor del formulario posicionado fijo y centrado */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg shadow-md max-w-[388px] w-full p-4 mx-4">
          <h2 className="text-2xl text-center mb-4">Crea tu cuenta</h2>

          <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                NAME
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                EMAIL
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="email"
                id="email"
                name="email"
                placeholder="user@mail.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                PHONE
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="tel"
                id="phone"
                name="phone"
                placeholder="999-999-999"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                PASSWORD
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="password"
                id="password"
                name="password"
                placeholder="******"
              />
              <small className="helper-text text-gray-500">
                Al menos 6 caracteres
              </small>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-[#373737] tracking-[1.5px]">
                PASSWORD CONFIRMATION
              </label>
              <input
                className="p-2 border border-[#1290cb] rounded-lg"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="******"
              />
            </div>
            <div className="mx-auto mt-3">
              <UniversalButton text={"CREAR CUENTA"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LaandlordRegister;
