import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from './styles';

export function Header(){
    const { signOut } = useAuth();
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/iuryescano.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Iury Escano</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    );
}