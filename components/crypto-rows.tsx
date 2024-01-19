"use client";
import { useEffect, useState } from "react";
import { CryptoData, CryptoRow } from "./crypto-row";
import { Container } from "./container";

type Props = {
  data: CryptoData[];
};

export const CryptoRows = ({ data }: Props) => {
  const [loadMore, setLoadMore] = useState(false);
  const [apiData, setApiData] = useState<CryptoData[]>([]);
  const [allData, setAllData] = useState<CryptoData[]>([]);

  useEffect(() => {
    setAllData(data);
    if (loadMore) {
      setApiData(allData);
      return;
    }
    setApiData(allData.slice(0, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allData, loadMore]);

  return (
    <>
      <div className="mx-auto px-2 py-3 sm:px-4 md:px-0 lg:px-12 md:max-w-containerMd lg:max-w-container">
        <h3 className="inline-block text-lg md:text-xl text-[#848e96] font-semibold border-b-4 border-[#f0b90b]">
          Top
        </h3>
      </div>
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
        <div className="overflow-y-auto h-[384px] md:h-[480px]">
          {apiData.map((d) => (
            <CryptoRow key={d.id} data={d} />
          ))}
        </div>
        <div>
          <button
            onClick={() => setLoadMore((prev) => !prev)}
            className="cursor-pointer p-2 min-w-72"
          >
            <span className="text-[#f0b90b] underline">
              {loadMore ? "Show less" : "Show more"}
            </span>
          </button>
        </div>
      </Container>
    </>
  );
};
