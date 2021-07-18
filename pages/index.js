import React from 'react';
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import MainGrid from '../src/components/MainGrid' //CSS
import Box from '../src/components/Box' //CSS
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { AreaProfileRelationsBoxWrapper } from '../src/components/AreaProfileRelations'


function ProfileSidebar(props){
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.userThumb}.png`} style={{borderRadius: '8px'}}/>
      <hr />
        <p>
          <a className ="boxLink" href={`https://github.com/${props.userThumb}`}>
            git@{props.userThumb}
          </a>
        </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function AreaProfileRelations(props){
  return (
    <AreaProfileRelationsBoxWrapper>
        <h2 className="smallTitle">{props.title} ({props.items.length})</h2><hr />
        {console.log('PROPS ', props)}
          <ul style={{margin:"0px"}}>
            
          </ul>
      </AreaProfileRelationsBoxWrapper>
  )
}
export default function Home(props) {
  const githubUser = props.githubUser;
  const pessoasFavoritas = ['gbyteinfo', 'juunegreiros', 'omariosouto', 'peas', 'joana', 'felipefialho']
  const [seguidores, setSeguidores] = React.useState([]); //USANDO HOCKS PARA GUARDAR STATE
  const [gruposAll, setGrupos] = React.useState([]);

  /* INICIO MANIPULANDO STATES / API */
    /* INICIO CONSUMINDO API GITHUB */
    React.useEffect(function() { // USANDO HOCKS PARA MANIPULAR STATE
      fetch(`https://api.github.com/users/${githubUser}/followers`)
        .then(function (respostaServidor){ // CRIA A PROMISSE
          return respostaServidor.json();
        })
          .then(function (respostaCompleta){// PROMISSE RECUPERADA
            setSeguidores(respostaCompleta)
    })
    /* FIM CONSUMINDO API GITHUB */

    /* INICIO COMSUMINDO API GraphQL DATO CMS */
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers:{
        'Authorization': `f0a39842f7a61c842f819d4b9bf8b4`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query":`query{
        allComunidades {
          id
          imageUrl
          title
          creatorSlug
          _status
          _firstPublishedAt
        }
      }`})
    })
    .then((response) => response.json())//PROMISSE
    .then((respostaCompleta) => {
      const gruposVindoDato = respostaCompleta.data.allComunidades;
      console.log(gruposVindoDato)
      setGrupos(gruposVindoDato)
    })
    /* FIM COMSUMINDO API DATO CMS */
    },[])// EXECUTA SO UMA VEZ, OU UMA VARIAVEL COM STATE INDICANDO QUANTAS VEZES O useEffect() IRA EXECUTAR
  /* FIM MANIPULANDO STATES / API */

  /* INICIO SEGUIDORES API GITHUB */
  return ( 
    <>
      <AlurakutMenu githubUser={githubUser}/>
      <MainGrid >
        <div className="areaProfile" style={{gridArea: 'areaProfile'}}>
          <ProfileSidebar userThumb={githubUser} />
        </div>

        <div className= "areaWelcome" style={{gridArea: 'areaWelcome'}}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2>Crie o que você quiser :)</h2>
            <hr />
            <form onSubmit={
              function handleCreateComunity(event){
                event.preventDefault();
                
                //CAPTURANDO DADOS DO FORMULARIO
                const dadosFormGrupos = new FormData(event.target)
                const grupo = {
                  title: dadosFormGrupos.get('titleGroup'),//FORM 1
                  imageUrl: dadosFormGrupos.get('imageGroup'),//FORM 2
                  creatorSlug: githubUser, //USER PADRAO
                }
                //CHAMANDO API
                fetch('/api/grupos', {
                  method: 'POST',
                  headers:{
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(grupo)
                })
                .then(async (response) => {
                  const dados = await response.json();
                  console.log("client**", dados);
                })
                const gruposAtt = [...gruposAll, grupo]//...INCLUINDO GRUPOSALL EM GRUPOS
                setGrupos(gruposAtt)//SETANDO O STATE
              }}
            >
              <div>
                <input
                  placeholder="Digite o nome do grupo" 
                  name="titleGroup" 
                  aria-label="Nome do Grupo"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Cole a URL da imagem de capa" 
                  name="imageGroup" 
                  aria-label="Capa do Grupo"
                />
              </div>
              <button>Criar Grupo</button>
            </form>
          </Box>
        </div>
        
        <div className="areaProfileRelations" style={{gridArea: 'areaProfileRelations'}}>
          <AreaProfileRelations title="Seguidores" items={seguidores}/>
          <AreaProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Grupos ({gruposAll.length})</h2><hr />
              <ul style={{margin:"0px"}}>
                {gruposAll.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id/*TIRANDO ERRO KEY*/}>
                      <a href={`https://www.gbyteinfo.com.br/melhores-alternativas-de-aplicativo-igual-whatsapp/`}>
                        <img src={itemAtual.imageUrl} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )})
                }
              </ul>
          </AreaProfileRelationsBoxWrapper>
          <AreaProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2><hr />
              <ul style={{margin:"0px"}}>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li key={itemAtual/*TIRANDO ERRO KEY*/}>
                      <a href={`https://www.gbyteinfo.com.br/melhores-alternativas-de-aplicativo-igual-whatsapp/`}>
                        <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )})
                }
              </ul>
          </AreaProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  )
}

//getServerSideProps - renderização lado servidor
export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.TOKEN_USUARIO
  //const tokenDecode = jwt.decode(token)
  const tokenDecode = jwt.decode(token).githubUser;

  console.log('Token decodificado:', tokenDecode )
  return {
    props: {
        githubUser: tokenDecode
    },
  }
}
