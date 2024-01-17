import { Crypto, CryptoData } from "@/components/crypto";

export default async function Home() {
  const response: any = await fetch(`https://${process.env.API_URL}/assets`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 * 60 },
  });

  const result = await response.json();
  const data: CryptoData[] = result.data;

  return (
    <div className="py-4 mt-12">
      <div className="w-full">
        <h1 className="px-4 text-3xl text-[#f0b90b] font-medium">Cryptracka</h1>
        <div className="px-4">
          {data.map((d) => (
            <Crypto key={d.id} data={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
