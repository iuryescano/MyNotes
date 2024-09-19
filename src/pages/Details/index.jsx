import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

import { useParams, useNavigate } from "react-router-dom"; //para buscar os parametros da rota
import { useState, useEffect } from "react";
import { api } from '../../services/index';


export function Details() { //Se eu tivesse colocado default lá no main eu não precisaria colocar entre {} pois eu estaria exportando tudo
  const [data, setData] = useState(null);
  
  const params = useParams();
  const navigate = useNavigate(); //para navegar para outras rotas

  function handleBack(){
    navigate("/");
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])
  
  return ( //1 componente sempre vai retornar sempre 1 único elemento por isso da div envolta de tudo
    <Container>
      
      <Header />
      {
       data && //se tem conteudo... mostra o valor... se nao tiver...
        <main>
          <Content>
            <ButtonText title="excluir nota"/>
            
            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

            { data.links && //so renderizo se tiver links... // _blank é para o usuario ir pra outra pagina e nao fechar a atual
              <Section title="Links Uteis"> 
                <Links> 
                  {
                    data.links.map((link) => (
                      <li key={String(link.url)}>
                        <a href={link.url} target="_blank"> 
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            { 
              data.tags && 
              <Section title="Marcadores">
                { 
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
                </Section>
            }

            <Button 
              title="Voltar" 
              onClick={handleBack} 
            />

            </Content>
        </main>
      }
      
    </Container>
  )
}
