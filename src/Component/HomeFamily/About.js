import { Box, Typography, Container} from '@mui/material'
import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Arrays } from '../Api/Data'

const About = () => {
  const [Service, setServices] = useState(Arrays)
  const items = Service.map((x)=>{
    const {heading, body, logo} = x
    return (
     
    <Box id='service' sx={{
      display: 'flex',
      flexDirection:'column',
      alignItems: 'center',
      padding: '15px',
      borderRadius: '15px'
    }} className="justname">
      <Typography sx={{
        fontSize:{
          xs: '35px',
          md: '40px'
        },
        textAlign:'left',
        color:'whitesmoke'
      }} className='iconss'>
        {logo}
      </Typography>
      <Typography sx={{
        fontSize:{
          xs: '33px',
          md: '35px'
        },
        color:'orange'
      }}>
        {heading}
      </Typography>
      <Typography sx={{
        fontSize:{
          xs: '20px',
          md: '22px'
        },
        color: 'whitesmoke'
      }}>
        {body}
      </Typography>
    </Box>
    )
  })

  const responsive = {
    0:{
        items: 1,
    },
    512:{
        items: 2,
    },
    900:{
      items: 3,
  }
}
  return (
    <div id="service">
       <Container>
        <Typography sx={{
          marginTop: {
            xs: '5%',
            md: '2%'
          },
          marginBottom:  {
            xs: '5%',
            md: '2%'
          },
          textAlign: 'center',
          Width: '100%',
          fontSize: {
            xs: '35px',
            md: '40px'
          },
          fontWeight:{
            xs:'500',
            md: '700'
          },
          color: 'whitesmoke'

        }}>
          My Services
        </Typography>
      <AliceCarousel
         disableDotsControls
         disableButtonsControls
         autoPlay
         mouseTracking
         infinite
         autoPlayInterval={950}
         animationDuration={2500}
         responsive={responsive}
         items={items}
      />
      </Container>
    </div>
  )
}

export default About