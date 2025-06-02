"use client";
import SellForm from "@/views/createProperty/SellForm";
import { useRouter } from "next/navigation";

const SellPage = () => {
  const router = useRouter();

  return <SellForm onModeChange={() => router.push("/rent")} />;
};

export default SellPage;
