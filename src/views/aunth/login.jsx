import UniversalButton from "@/components/buttons/UniversalButton";

const LoginView = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-md max-w-[388px] w-full p-4 mx-4">
        <h2 className="text-2xl text-center mb-4">Inicia Sesion</h2>

        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#373737] tracking-[1.5px] ">
              CORREO ELECTRONICO
            </label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="email"
              id="emailLogin"
              name="email"
              placeholder="user@email.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-[#373737] tracking-[1.5px] ">
              CONRASEÑA
            </label>
            <input
              className="p-2 border border-[#1290cb] rounded-lg"
              type="password"
              id="loginPassword"
              name="password"
              placeholder="******"
            />
          </div>

          <div className="mx-auto mt-3">
            <UniversalButton text={"Iniciar Sesion"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
