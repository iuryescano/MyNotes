import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Avatar } from "./styles";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/index';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ passwordOld, setPasswordOld ] = useState();
    const [ passwordNew, setPasswordNew ] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar ] = useState(avatarUrl);
    const [avatarFile, setAvatarFile ] = useState(null);
    

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        const userUpdated = Object.assign(user, updated); //isso aqui é para manter o avatar mesmo alterando só o nome
        //return console.log(userUpdated);

        await updateProfile({ user: userUpdated, avatarFile })
    }

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1); //volta para rota anterior
    }


    function handleChangeAvatar(event) {
        const file = event.target.files[0]; //pegando primeira posicao
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <button type='button' onClick={handleBack}>
                    <FiArrowLeft size={24}/>
                </button>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatar}
                        alt="Foto do usuário"
                    />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input 
                            id="avatar" 
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha "
                    type="password"
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>


            </Form>
        </Container>
    )
};