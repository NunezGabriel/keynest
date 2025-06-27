"use client";

import Navbar from "@/components/Navbar";

import Footer from "@/components/footer";

const ViewStatsView = () => {
  return (
    <div>
      <Navbar type={"admin"} />

      <section className="mx-auto max-w-[1227px] flex flex-wrap justify-between gap-20 mb-24 mt-16 p-4 "></section>
      <Footer />
    </div>
  );
};

export default ViewStatsView;
