import { useState } from 'react'; 
import { Link } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { Container, Form } from './styles';

export function New(){

  const [ links, setLinks ] = useState([]);
  const [ newLink, setNewLink ] = useState("");

  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag ] = useState("");

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
      setNewLink("");
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]); //acessa o estado anterior e coloca numa listagem
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }


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

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                <NoteItem
                key={String(index)}
                value={link}
                onClick={()=> handleRemoveLink(link)}/> //se nao tiver a arrow function ele vai ficar tentando executar sozinho para excluir o link
              ))
            }
              <NoteItem
                isNew
                placeholder="Novo link"
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                onClick={handleAddLink}/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
                
              }  
              <NoteItem 
                isNew 
                placeholder="New tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}