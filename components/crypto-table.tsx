import { Container } from "./container";
import { CryptoData, CryptoRow } from "./crypto-row";

async function CryptoTable() {
  const response: any = await fetch(`https://${process.env.API_URL}/assets`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Accept-Encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 * 45 },
  });

  const result = await response.json();
  const data: CryptoData[] = result.data;
  return (
    <section className="mt-12">
      <Container>
        <div>
          <div className="flex justify-between items-center w-full text-[#848e96] text-xs md:text-sm">
            <div className="flex w-1/3">Crypto</div>
            <div className="w-1/3 text-end">Last Price</div>
            <div className="flex justify-end">
              <div className="min-w-[72px] text-end">24h chg%</div>
            </div>
          </div>
        </div>
        <div>
          {data.map((d) => (
            <CryptoRow key={d.id} data={d} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CryptoTable;
