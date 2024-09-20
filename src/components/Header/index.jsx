import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from './styles';
import { api } from '../../services/index';
import { useNavigate } from 'react-router-dom';

export function Header(){
    const { signOut, user } = useAuth();
    const navigation = useNavigation();
    

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="Foto do usuario" />
                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    );
}