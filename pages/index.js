import React from 'react';
import MainGrid from '../src/components/MainGrid' //CSS
import Box from '../src/components/Box' //CSS
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraCommons'
import { AreaProfileRelationsBoxWrapper } from '../src/components/AreaProfileRelations'


function ProfileSidebar(props){
  return (
    <Box>
      <img src={`https://github.com/${props.userThumb}.png`} style={{borderRadius: '8px'}}/>
      <hr />
        <p>
          <a className ="boxLink" href={`https://github.com/${props.userThumb}`}>
            git: @{props.userThumb}
          </a>
        </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [grupos, criaGrupos] = React.useState([]);// USANDO HOCKS PARA MANIPULAR ESTATE
  console.log('Grupos Adicionados', grupos)

  const githubUser = 'gbyteinfo';
  const pessoasFavoritas = ['gbyteinfo', 'juunegreiros', 'omariosouto', 'peas', 'joana', 'felipefialho']
  return ( 
    <>
      <AlurakutMenu />
      <MainGrid>
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
                console.log('Group Name => ', dadosFormGrupos.get('titleGroup'))
                console.log('Group Image => ', dadosFormGrupos.get('imageGroup'))


                //ADICIONANDO EM grupoAtt O ARRAY COM O useState(grupos)
                //USANDO ... (SPRED) PARA ADICIONAR NOVO ITEM AO ARRAY 
                const gruposAtt = [...grupos, 'Vivendo com Rock']
                criaGrupos(gruposAtt)

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
          <AreaProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Grupos Adicionados ({grupos.length})</h2><hr />
              <ul style={{margin:"0px"}}>
                {grupos.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/grupos/${itemAtual}`} key={itemAtual}>
                        {/*<img src={`https://github.com/${gruposAdicionados}.png`}/>*/}
                        <img src={`http://3.bp.blogspot.com/-zGCrrMY3k7k/XjyvlYGP22I/AAAAAAAALwc/HP8II5nSKCMpWdVhXFAhM06UubE1c6hnwCK4BGAYYCw/s1600/500.jpg`} />
                        <span>{itemAtual}</span>
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
                    <li>
                      <a href={`/amigos/${itemAtual}`} key={itemAtual}>
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
