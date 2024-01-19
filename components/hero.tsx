import { Container } from "./container";

export const Hero = () => {
  return (
    <section className="py-12 mt-6 md:py-8 md:mt-9">
      <Container>
        <div className="md:max-w-[520px]">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Track all your cryptocurrencies in one place
          </h1>
          <p className="text-lg leading-snug text-[#6f7081] mt-4 md:text-xl">
            Monitor crypto prices, see top gainers and top losers to make
            informed decision for your next cryptocurrency purchase.
          </p>
        </div>
      </Container>
    </section>
  );
};
