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
            <h2>O que fazer agora?</h2>
            <hr />
            <form >
              <div>
                <input
                  placeholder="Digite o nome da sua Comunidade." 
                  name="title" 
                  aria-label="Digite Agora"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Url da imagem." 
                  name="title" 
                  aria-label="Digite Agora"
                />
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        
        <div className="areaProfileRelations" style={{gridArea: 'areaProfileRelations'}}>
          <AreaProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidade GitHub ({pessoasFavoritas.length})</h2><hr />
              
              <ul style={{margin:"0px"}}>
                {pessoasFavoritas.map((pessoasMapeadas) => {
                  return (
                    <li>
                      <a href={`/users/${pessoasMapeadas}`} key={pessoasMapeadas}>
                        <img src={`https://github.com/${pessoasMapeadas}.png`}/>
                        <span>{pessoasMapeadas}</span>
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
