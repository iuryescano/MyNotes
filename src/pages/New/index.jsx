import { useState } from 'react'; 

import { useNavigate } from 'react-router-dom';

import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';

import { api } from '../../services/index';

import { Container, Form } from './styles';

export function New(){
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");

  const [ links, setLinks ] = useState([]);
  const [ newLink, setNewLink ] = useState("");

  const [ tags, setTags ] = useState([]);
  const [ newTag, setNewTag ] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1); //volta para rota anterior
  }

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

  async function handleNewNote(){
    if(!title) { //se tiver um título vazio faça...
      return alert("Você não preencheu o título da nota. Por favor, preencha esse campo.")
    }

    if(newLink) { //se tiver uma novoLink no campo faça...
      return alert("Voce deixou um link no campo para adicionar mas não confirmou. Clique para adicionar ou deixe o campo vazio")
    }

    if(newTag) { //se tiver uma novaTag no campo faça...
      return alert("Voce deixou uma tag no campo para adicionar mas não confirmou. Clique para adicionar ou deixe o campo vazio")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota cadastrada com sucesso!");
    navigate(-1);
  }


  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText 
              title={"Voltar"} 
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

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

          <Button
            title="Salvar" 
            onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  );
}