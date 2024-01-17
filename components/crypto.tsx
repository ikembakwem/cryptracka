export const Crypto = () => {
  return (
    <a
      href="#"
      className="py-3 w-full flex justify-between items-center text-base font-normal"
    >
      <div className="flex w-[45%]">
        <div className="flex items-baseline">
          <div className="mr-1 ml-2 text-lg text-[#eaecef] font-medium">
            BTC
          </div>
          <div className="text-sm text-[#848E9C] whitespace-nowrap leading-[20px]">
            Bitcoin
          </div>
        </div>
      </div>
      <div className="flex flex-end w-[25%] font-medium">
        <div className="flex flex-col items-end">
          <span className="text-[#eaecef] font-medium">$4,345</span>
          <span className="text-xs font-light text-[#848E9C]">$4,345</span>
        </div>
      </div>
      <div className="flex flex-end w-[25%]">
        <div className="flex items-center justify-center w-[72px] h-10 bg-[#f6465d] rounded">
          <span>-1.28%</span>
        </div>
      </div>
    </a>
  );
};
