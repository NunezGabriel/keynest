import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3">
      <Link href="/andrew">Andrew</Link>
      <Link href="/kelvin">Kelvin</Link>
      <Link href="/joshua">Joshua</Link>
    </div>
  );
}