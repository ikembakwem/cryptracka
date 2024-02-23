import { CryptoData } from "./crypto-row";
import { CryptoRows } from "./crypto-rows";

async function CryptoTable() {
  const response: any = await fetch(`https://${process.env.API_URL}/assets`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  const result = await response.json();
  const data: CryptoData[] = result.data;
  return (
    <section className="mt-12">
      <CryptoRows data={data} />
    </section>
  );
}

export default CryptoTable;
