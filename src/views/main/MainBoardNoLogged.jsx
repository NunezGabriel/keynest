import FillterComponent from "@/components/mainBoard/fillterComponent";
import Navbar from "@/components/Navbar";
import CardComponent from "@/components/cardComponent";
import Footer from "@/components/footer";

const MainBoardNoLogged = () => {
  const prrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div>
      <Navbar type={"noLogged"} />
      <FillterComponent />
      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-24 mb-24">
        {prrueba.map((item, index) => (
          <CardComponent key={index} />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default MainBoardNoLogged;
