import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Avatar } from "./styles";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export function Profile(){
    const { user } = useAuth();

    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ passwordOld, setPasswordOld ] = useState();
    const [ passwordNew, setPasswordNew ] = useState();

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/iuryescano.png" alt="Foto do usuário"></img>
                    
                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input id="avatar" type="file"></input>
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onchange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onchange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onchange={e => setPasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova senha "
                    type="password"
                    icon={FiLock}
                    onchange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Salvar"/>


            </Form>
        </Container>
    )
};