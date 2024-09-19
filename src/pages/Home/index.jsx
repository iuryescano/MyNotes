import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { api } from '../../services/index';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { ButtonText } from '../../components/ButtonText';



export function Home(){
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]); //para trazer nossas tags ao inicio
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]); //para trazer as notas ao inicio

    function handleTagSelected(tagName){

        if(tagName === "all"){
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName);

        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);

        } else {
            setTagsSelected(prevState => [...prevState, tagName]); //para o todos voltar quando nenhum tiver selecionado
        }
    }

    useEffect(()=>{ //useEffect nao aceita async ent vou criar uma funcao dentro dela 
        async function fetchTags(){
            const response = await api.get("/tags"); //endereco da api que vai retornar as tags
            setTags(response.data);
        }

        fetchTags(); //chamando a funcao fetchTags que vai trazer as tags
    },[]);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }
        fetchNotes();
    }, [tagsSelected, search]); //oq colocar ai dentro do vetor... quando mudar o conteudo do search ou do tagselected ele vai executar de novo o useEffect

    return(
        <Container>
            <Brand>
                <h1>MyNotes</h1>
            </Brand>

        <Header/>

        <Menu>
            <li>
                <ButtonText 
                    title="Todos" 
                    onClick={() => handleTagSelected("all")} 
                    $isactive={tagsSelected.length === 0}/>
            </li>

            {
                tags && tags.map(tag => ( //primeiramente verifico se existe tags, se existir vou percorrer nelas...
                    <li key={String(tag.id)}>
                        <ButtonText 
                            title={tag.name} 
                            onClick={() => handleTagSelected(tag.name)} 
                            $isactive={tagsSelected.includes(tag.name)}
                        />
                    </li>

                )) 
            }
            
        </Menu>
            
        <Search>
            <Input 
                placeholder="Pesquisar pelo titulo"
                onChange={(event) => setSearch(event.target.value)}
            />
        </Search>

        <Content>
            <Section title="Minhas Notas">
                {
                    notes.map(note => (
                    <Note 
                        key={String(note.id)}
                        data={note}
                    />
                    ))
                }
            </Section>
        </Content>

        <NewNote to="/new">
            <FiPlus />
            Criar Nota
        </NewNote>

        </Container>

    );
}
