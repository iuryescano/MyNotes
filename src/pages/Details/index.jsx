import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";


export function Details() { //Se eu tivesse colocado default lá no main eu não precisaria colocar entre {} pois eu estaria exportando tudo
  return ( //1 componente sempre vai retornar sempre 1 único elemento por isso da div envolta de tudo
    <Container>
      <Header />
      <Section title="Links Uteis">
        <Links>
          <li><a href="https://github.com/iuryescano">https://github.com/iuryescano</a></li>
          <li><a href="https://github.com/iuryescano">https://github.com/iuryescano</a></li>
        </Links>
      </Section>
      <Button title="Voltar" />
    </Container>
  )
}
