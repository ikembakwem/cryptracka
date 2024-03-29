export type CryptoData = {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  changePercent24Hr: string;
};

type Props = {
  data: CryptoData;
};

export const CryptoRow = ({ data }: Props) => {
  const { changePercent24Hr, priceUsd } = data;
  const changePrc = Number(changePercent24Hr);
  const price = Number(priceUsd);
  const formattedPrice =
    price > 10
      ? Number(price.toFixed(2)).toLocaleString()
      : price > 0.01
      ? price.toFixed(4)
      : Number(price.toFixed(6));
  const formattedPrc =
    changePrc > 0 ? `+${changePrc.toFixed(2)}%` : `${changePrc.toFixed(2)}%`;

  return (
    <a
      href="#"
      className="py-3 flex justify-between items-center text-base md:text-lg font-normal w-full"
    >
      <div className="flex w-1/3">
        <div>
          <div className="text-lg md:text-xl leading-tight text-moonlightMist font-medium min-w-12">
            {data.symbol}
          </div>
          <div className="text-sm md:text-base text-stormcloudSlate whitespace-nowrap leading-none">
            {data.name}
          </div>
        </div>
      </div>
      <div className="w-1/3 font-medium text-end">
        <p className="text-moonlightMist font-medium">${formattedPrice}</p>
        <p className="text-xs md:text-sm font-light text-stormcloudSlate">
          ${formattedPrice}
        </p>
      </div>
      <div className="flex justify-end">
        <div
          className={`flex text-sm md:text-base items-center justify-center self-end w-[72px] h-8 ${
            changePrc > 0 ? "bg-springMeadow" : "bg-cherryBomb"
          } rounded`}
        >
          <span>{formattedPrc}</span>
        </div>
      </div>
    </a>
  );
};
