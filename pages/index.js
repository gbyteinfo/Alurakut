import MainGrid from '../src/components/MainGrid' //CSS
import Box from '../src/components/Box' //CSS
import { AlurakutMenu } from '../src/lib/AluraCommons'

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
  const pessoasFavoritas = ['gbyteinfo', 'jorge', 'leticia', 'luiza', 'bruna', 'joana', 'felipefialho']
  
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
          <Box>
            Pessoas e Mais
          </Box>
          <Box>
            Comunidade
            <ul>
            {pessoasFavoritas.map((pessoasMapeadas) => {
              return (
                <a href={`/users/${pessoasMapeadas}`} key={pessoasMapeadas}>
                  <img src={`https://github.com/${pessoasMapeadas}.png`} style={{borderRadius: '8px'}}/>
                  <li>{pessoasMapeadas}</li>
                </a>
                
                )
              })
            }
            </ul>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
