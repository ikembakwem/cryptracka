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
    price < 2 ? price.toFixed(6) : Number(price.toFixed(2)).toLocaleString();
  const formattedPrc =
    changePrc > 0 ? `+${changePrc.toFixed(2)}%` : `${changePrc.toFixed(2)}%`;

  return (
    <a
      href="#"
      className="py-3 flex justify-between items-center text-base font-normal w-full"
    >
      <div className="flex w-1/3">
        <div>
          <div className="text-lg leading-tight text-[#eaecef] font-medium min-w-12">
            {data.symbol}
          </div>
          <div className="text-sm text-[#848E9C] whitespace-nowrap leading-none">
            {data.name}
          </div>
        </div>
      </div>
      <div className="w-1/3 font-medium text-end">
        <p className="text-[#eaecef] font-medium">${formattedPrice}</p>
        <p className="text-xs font-light text-[#848E9C]">${formattedPrice}</p>
      </div>
      <div className="flex justify-end">
        <div
          className={`flex text-sm items-center justify-center self-end w-[72px] h-8 ${
            changePrc > 0 ? "bg-[#0ecb81]" : "bg-[#f6465d]"
          } rounded`}
        >
          <span>{formattedPrc}</span>
        </div>
      </div>
    </a>
  );
};
