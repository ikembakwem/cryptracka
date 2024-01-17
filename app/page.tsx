import { Crypto } from "@/components/crypto";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4 mt-12">
      <h1 className="px-4 text-3xl text-[#f0b90b] font-medium">Cryptracka</h1>
      <div className="px-4 mx-auto">
        <Crypto />
      </div>
    </div>
  );
}
