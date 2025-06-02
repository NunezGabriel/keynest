"use client";
import RentForm from "@/views/createProperty/RentForm";
import { useRouter } from "next/navigation";

const RentPage = () => {
  const router = useRouter();

  return <RentForm onModeChange={() => router.push("/sell")} />;
};

export default RentPage;
