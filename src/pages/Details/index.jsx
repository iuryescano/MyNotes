import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Details() { //Se eu tivesse colocado default lá no main eu não precisaria colocar entre {} pois eu estaria exportando tudo
  return ( //1 componente sempre vai retornar sempre 1 único elemento por isso da div envolta de tudo
    <Container>
      <Header />

      <Button title="Voltar" />
    </Container>
  )
}
