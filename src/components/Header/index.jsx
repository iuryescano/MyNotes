import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/iuryescano.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Iury Escano</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    );
}