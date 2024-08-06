import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';

import { Container, Form } from './styles';

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href='/'>Voltar</a>
          </header>

          <Input placeholder="Titulo"></Input>
          <Textarea placeholder="Observações"></Textarea>

          <Section title="Links Uteis">
              <NoteItem value="https://github.com/iuryescano"/>
              <NoteItem isNew placeholder="Novo link"/>
          </Section>
        </Form>
      </main>
    </Container>
  );
}