import React from 'react';
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
          <ul style={{margin:"0px"}}>
            
          </ul>
      </AreaProfileRelationsBoxWrapper>
  )
}
export default function Home() {
  const githubUser = 'gbyteinfo';
  const pessoasFavoritas = ['gbyteinfo', 'juunegreiros', 'omariosouto', 'peas', 'joana', 'felipefialho']
  const [seguidores, setSeguidores] = React.useState([]); //USANDO HOCKS PARA GUARDAR STATE
  const [grupos, setGrupos] = React.useState([ //USANDO HOCKS PARA GUARDAR STATE
    { 
      id:'aaaassss',
      title:'Eu odeio acordar cedo',
      image:'https://media.giphy.com/media/5QMTGldAFagUeQPRDB/giphy.gif',
    },{
      id:'aaasd',
      title: 'Gbyteinfo', 
      image: 'https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-0/p526x296/139457967_422965425797684_7632254747461119700_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeFtH74JZ2pMS0DGVKkdHodZZqa6yTshW4ZmprrJOyFbhm-vn1dj_WwLk3TxWmQDpJgcP3UtBv2VN4X15F-owrm6&_nc_ohc=yURKh4ldg40AX_ywK0o&_nc_ht=scontent.fcpq5-1.fna&oh=e85f90a5fdb19a4561ee7aaa1652e877&oe=60F40C3D',
    },{
      id:'dddsasaaa',
      title: 'Rock é vida',
      image: 'https://media.giphy.com/media/7lAFH4MrNJMcg/giphy.gif',
    }
  ]);

  /* INICIO SEGUIDORES API GITHUB */
    React.useEffect(function() { // USANDO HOCKS PARA MANIPULAR STATE
      fetch('https://api.github.com/users/gbyteinfo/followers')
        .then(function (respostaServidor){ // CRIA A PROMISSE
          return respostaServidor.json();
        })
          .then(function (respostaCompleta){// PROMISSE RECUPERADA
            setSeguidores(respostaCompleta)
        })
    },[])// EXECUTA SO UMA VEZ, OU UMA VARIAVEL COM STATE INDICANDO QUANTAS VEZES O useEffect() IRA EXECUTAR
  /* FIM SEGUIDORES API GITHUB */

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
                //console.log('Group Name => ', dadosFormGrupos.get('titleGroup'))
                //console.log('Group Image => ', dadosFormGrupos.get('imageGroup'))


                //ADICIONANDO EM grupoAtt O ARRAY COM O useState(grupos)
                //USANDO ... (SPRED) PARA ADICIONAR NOVO ITEM AO ARRAY 
                const grupo = {
                  id: new Date().toISOString(),
                  title: dadosFormGrupos.get('titleGroup'),
                  image: dadosFormGrupos.get('imageGroup'),
                }
                const gruposAtt = [...grupos, grupo]
                setGrupos(gruposAtt)
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
          <AreaProfileRelations title="Seguidoresss" items={seguidores}/>
          <AreaProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Grupos ({grupos.length})</h2><hr />
              <ul style={{margin:"0px"}}>
                {grupos.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id/*TIRANDO ERRO KEY*/}>
                      <a href={`https://www.gbyteinfo.com.br/melhores-alternativas-de-aplicativo-igual-whatsapp/`}>
                        <img src={itemAtual.image} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )})
                }{/*pessoasFavoritas*/}
              </ul>
          </AreaProfileRelationsBoxWrapper>
          <AreaProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({pessoasFavoritas.length})</h2><hr />
              <ul style={{margin:"0px"}}>
                {pessoasFavoritas.map((itemAtual) => {
                  return (
                    <li key={itemAtual/*TIRANDO ERRO KEY*/}>
                      {/*<a href={`/amigos/${itemAtual}`}*/}
                      <a href={`https://www.gbyteinfo.com.br/melhores-alternativas-de-aplicativo-igual-whatsapp/`}>
                        <img src={`https://github.com/${itemAtual}.png`}/>
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )})
                }{/*pessoasFavoritas*/}
              </ul>
          </AreaProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  )
}
