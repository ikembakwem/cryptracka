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
  const [allData, setAllData] = useState<CryptoData[]>(data);
  const [listing, setListing] = useState<CryptoData[]>(data);
  const [activeListing, setActiveListing] = useState<
    "top" | "gainers" | "losers"
  >("top");

  const handleGainers = () => {
    const data = allData.toSorted(
      (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
    );
    setAllData(data);
    setActiveListing("gainers");
  };

  const handleLosers = () => {
    const data = allData.toSorted(
      (a, b) => Number(a.changePercent24Hr) - Number(b.changePercent24Hr)
    );
    setAllData(data);
    setActiveListing("losers");
  };

  useEffect(() => {
    if (loadMore) {
      setApiData(allData);
      return;
    }
    setApiData(allData.slice(0, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allData, loadMore]);

  return (
    <>
      <div className="flex gap-x-3 text-lg md:text-xl mx-auto px-2 py-3 sm:px-4 md:px-0 lg:px-12 md:max-w-containerMd lg:max-w-container">
        <button
          onClick={() => {
            setAllData(listing);
            setActiveListing("top");
          }}
          className={`relative flex items-center justify-center cursor-pointer focus:outline-none py-3 pr-2 ${
            activeListing === "top" ? "text-white" : "text-[#848e96]"
          }  font-medium leading-none`}
        >
          <span>Top</span>
          <span
            className={`${
              activeListing !== "top" ? "hidden" : ""
            } absolute bottom-0 bg-[#f0b90b] w-3 h-1`}
          ></span>
        </button>
        <button
          onClick={handleGainers}
          className={`relative flex items-center justify-center cursor-pointer focus:outline-none py-3 pr-2 ${
            activeListing === "gainers" ? "text-white" : "text-[#848e96]"
          }  font-medium leading-none`}
        >
          <span>Gainers</span>
          <span
            className={`${
              activeListing !== "gainers" ? "hidden" : ""
            } absolute bottom-0 bg-[#f0b90b] w-3 h-1`}
          ></span>
        </button>
        <button
          onClick={handleLosers}
          className={`relative flex items-center justify-center cursor-pointer focus:outline-none py-3 pr-2 ${
            activeListing === "losers" ? "text-white" : "text-[#848e96]"
          }  font-medium leading-none`}
        >
          <span>Losers</span>
          <span
            className={`${
              activeListing !== "losers" ? "hidden" : ""
            } absolute bottom-0 bg-[#f0b90b] w-3 h-1`}
          ></span>
        </button>
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
            className="inline-flex items-center justify-center cursor-pointer min-w-[72px] focus:outline-none"
          >
            <span className="text-[#f0b90b] underline text-sm">
              {loadMore ? "Show less" : "Show more"}
            </span>
          </button>
        </div>
      </Container>
    </>
  );
};
