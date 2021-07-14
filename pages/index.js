import MainGrid from '../src/components/MainGrid' //CSS
import Box from '../src/components/Box' //CSS
import { AlurakutMenu } from '../src/lib/AluraCommons'
import { AreaProfileRelationsBoxWrapper } from '../src/components/AreaProfileRelations'

function ProfileSidebar(props){
  console.log("Debung do Index props => ", props)
  return (
    <Box>
      <img src={`https://github.com/${props.userThumb}.png`} style={{borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  
  const githubUser = 'gbyteinfo';
  const pessoasFavoritas = ['gbyteinfo', 'jorge', 'leticia', 'bruna', 'joana', 'felipefialho']
  
  return ( 
    <>
      <AlurakutMenu />
      <MainGrid>
        
        
        <div className="areaProfile" style={{gridArea: 'areaProfile'}}>
          <ProfileSidebar userThumb={githubUser} />
        </div>
        
        
        <div className= "areaWelcome" style={{gridArea: 'areaWelcome'}}>
          <Box>
            Bem Vindo
          </Box>
        </div>


        <div className="areaProfileRelations" style={{gridArea: 'areaProfileRelations'}}>
          <AreaProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Comunidade GitHub ({pessoasFavoritas.length})</h2>
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
