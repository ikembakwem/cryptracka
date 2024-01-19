import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="mt-24 border-t border-[#36363d]">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between py-12">
          <div className="font-light text-sm text-[#909baa]">
            Copyright &copy; {new Date().getFullYear()} Ikechukwu Mbakwem
          </div>
          <div>Powered by CoinCapAPI</div>
        </div>
      </Container>
    </footer>
  );
};
