import CryptoTable from "@/components/crypto-table";
import { Hero } from "@/components/hero";

export default async function Home() {
  return (
    <>
      <Hero />
      <CryptoTable />
    </>
  );
}
