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
    <section>
      <Container>
        <div className="py-6">
          <h1 className="px-4 text-3xl text-[#f0b90b] font-medium">
            Cryptracka
          </h1>
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
