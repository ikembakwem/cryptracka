import { Container } from "./container";

export const Header = () => {
  return (
    <header className="h-14 flex items-center">
      <Container>
        <div className="text-xl inline-flex text-[#f0b90b] font-medium p-2">
          Cryptracka
        </div>
      </Container>
    </header>
  );
};
