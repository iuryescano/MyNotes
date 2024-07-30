import { Container, Profile } from './styles';

export function Header(){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/iuryescano.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>Iury Escano</strong>
                </div>
            </Profile>
        </Container>
    );
}