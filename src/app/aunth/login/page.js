import Navbar from "@/components/Navbar";
import LoginView from "@/views/aunth/login";

const Login = () => {
  return (
    <div>
      <div className="relative z-50">
        <Navbar type={"noLogged"} />
      </div>

      <div className="relative">
        <div className="w-full h-[352px] bg-[#bad8e7] text-center py-16"></div>
        <LoginView />
      </div>
    </div>
  );
};

export default Login;
