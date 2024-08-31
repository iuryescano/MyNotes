import { useState } from 'react';
import { FiMail, FiLock, FiUser} from 'react-icons/fi';
import { Link , useNavigate} from 'react-router-dom';

import { api } from "../../services/index";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Background } from "./styles";




export function SignUp (){
  const [name, setName] = useState("");//primeiro valor dentro do parenteses é o meu estado inicial 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password) {
      alert("Preencha todos os campos");
      return; //encerra a função se algum campo não for preenchido
    }
    //console.log(name, email, password);

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Conta criada com sucesso!");
      navigate("/");
    })
    .catch( error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      }
    })
  }

  return(
    <Container>
      <Background />
      <Form>
        <h1>MyNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e=> setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type='password'
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='Cadastrar' onClick={handleSignUp}/>
        <Link to="/">
          Voltar para o login
        </Link>

      </Form>

      
    </Container>
  );
}