import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { ButtonText } from '../../components/ButtonText';



export function Home(){
    return(
        <Container>
            <Brand>
                <h1>MyNotess</h1>
            </Brand>

        <Header/>

        <Menu>
            <li><ButtonText title="Todos" /></li>
            <li><ButtonText title="React" /></li>
            <li><ButtonText title="Nodejs" /></li>
        </Menu>
            
        <Search>
            <Input placeholder="Pesquisar pelo titulo"/>
        </Search>

        <Content>
            <Section title="Minhas Notas">
                <Note data={{
                    title: 'React',
                    tags: [
                        {id: '1', name: 'React'},
                        {id: '2', name: 'Rocketseat'}
                    ]
                    }}/>
            </Section>
        </Content>

        <NewNote to="/new">
            <FiPlus />
            Criar Nota
        </NewNote>

        </Container>

    );
}
