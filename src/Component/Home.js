import React from 'react'
import { Box, styled} from '@mui/material'
import Banner from './HomeFamily/Banner'
import '../Style/style.css'
import About from './HomeFamily/About'
import Service from './HomeFamily/Service'
import Trending from './HomeFamily/Trending'
import Contact from './HomeFamily/Contact'

const Home = () => {
    const HomeBody = styled(Box)({
    background: '#14161a',
  })
  return (

    <div>
     <HomeBody>
  <Banner/>
  <Service/>
  <Trending />
  <About/>
  <Contact/>
</HomeBody>
    </div>
  )
}

export default Home