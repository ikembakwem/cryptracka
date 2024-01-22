import { Container } from "./container";

export const Header = () => {
  return (
    <header className="h-14 flex items-center">
      <Container>
        <div className="text-xl inline-flex text-orangeBomb font-medium p-2">
          Cryptracka
        </div>
      </Container>
    </header>
  );
};
