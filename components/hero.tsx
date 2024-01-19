/* eslint-disable @next/next/no-img-element */
import { Container } from "./container";

export const Hero = () => {
  return (
    <section className="md:mt-9 text-center md:text-left">
      <Container>
        <div className="flex flex-col-reverse md:flex-row md:items-center pb-12 md:py-8">
          <div className="md:max-w-[520px] md:w-3/5">
            <h1 className="text-4xl font-bold leading-none tracking-tight md:text-5xl">
              Track all your cryptocurrencies in one place
            </h1>
            <p className="text-lg leading-snug text-[#6f7081] mt-4 md:text-xl">
              Monitor crypto prices, see top gainers and top losers to make
              informed decision for your next cryptocurrency purchase.
            </p>
          </div>
          <div className="md:w-2/5 p-8 lg:p-14">
            <img src="/images/bitcoin.png" alt="Bitcoin hero image" />
          </div>
        </div>
      </Container>
    </section>
  );
};
