import styled from 'styled-components'
import MainGrid from './src/components/MainGrid' //CSS
import Box from './src/components/Box' //CSS

export default function Home() {
  return ( 

      <MainGrid>
        <div className="areaProfile" style={{gridArea: 'areaProfile'}}>
          <Box>
            <img src="https://github.com/gbyteinfo.png"/>
          </Box>
        </div>
        <div className= "areaWelcome" style={{gridArea: 'areaWelcome'}}>
          <Box>
            Bem Vindo
          </Box>
        </div>
        <div className="areaProfileRelations" style={{gridArea: 'areaProfileRelations'}}>
          <Box>
            Pessoas, Comunidades e mais
          </Box>
        </div>
      </MainGrid>
  
  )
}
