import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { Container, Form } from './styles';

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Titulo"></Input>
          <Textarea placeholder="Observações"></Textarea>

          <Section title="Links Uteis">
              <NoteItem value="https://github.com/iuryescano"/>
              <NoteItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"/>
              <NoteItem isNew placeholder="New tag"/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}