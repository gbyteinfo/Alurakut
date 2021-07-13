import MainGrid from './src/components/MainGrid' //CSS
import Box from './src/components/Box' //CSS

export default function Home() {

  const githubUser = 'gbyteinfo';

  return ( 

      <MainGrid>
        <div className="areaProfile" style={{gridArea: 'areaProfile'}}>
          <Box>
            <img src={`https://github.com/${githubUser}.png`} style={{borderRadius: '8px'}}/>
          </Box>
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
          </Box>
        </div>
      </MainGrid>
  
  )
}
