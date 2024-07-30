import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";


export function Details() { //Se eu tivesse colocado default lá no main eu não precisaria colocar entre {} pois eu estaria exportando tudo
  return ( //1 componente sempre vai retornar sempre 1 único elemento por isso da div envolta de tudo
    <Container>
      
      <Header />
      <main>
        <Content>
          <ButtonText title="excluir nota"/>
          
          <h1>Introducao ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius esse quis perferendis, distinctio voluptatem 
            non obcaecati aliquid exercitationem illo quisquam ea asperiores saepe veniam, 
            facere repudiandae quae ex neque?</p>
          <Section title="Links Uteis">
            <Links>
              <li><a href="https://github.com/iuryescano">https://github.com/iuryescano</a></li>
              <li><a href="https://github.com/iuryescano">https://github.com/iuryescano</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title="Voltar" />
          </Content>
      </main>
    </Container>
  )
}
