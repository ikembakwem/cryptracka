import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#36363d]">
      <Container>
        <div className="flex flex-col-reverse md:flex-row md:justify-between py-12 items-baseline">
          <div className="font-light text-sm text-[#909baa] mt-3 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} Ikechukwu Mbakwem
          </div>
          <div>Powered by CoinCapAPI</div>
        </div>
      </Container>
    </footer>
  );
};
