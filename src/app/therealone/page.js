import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import HomeGuest from "@/views/HomeGuest";
import HomeSeeker from "@/views/HomeSeeker";
import HomeLandlord from "@/views/HomeLandlord";

const TheRealOne = () => {
  const rendereo = "2";

  return (
    <div>
      {rendereo === "1" && (
        <>
          <Navbar type={"noLogged"} />
          <HomeGuest />
        </>
      )}

      {rendereo === "2" && (
        <>
          <Navbar type={"landlordLog"} />
          <HomeLandlord />
        </>
      )}

      {rendereo === "3" && (
        <>
          <Navbar type={"seekerLog"} />
          <HomeSeeker />
        </>
      )}

      <Footer />
    </div>
  );
};

export default TheRealOne;
