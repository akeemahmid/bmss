import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import '../../Style/style.css'
import profile from '../Image/serviceimage.jpg'

const Service = () => {
    const Servicebody = styled(Box)({
      width: '100%',
        display: 'flex',
        alignItems: 'center',
      
        // flexDirection: {
        //   xs: 'column'
        // }
       
    })
  return (
    <div id='about'>
      <Container>
        <Servicebody sx={{
           flexDirection:{
            xs: 'column',
            sm: 'row',
            md: 'row'
          },
          justifyContent:{
            xs: 'center',
            sm: 'space-between',
            md: 'space-between'
        },
        marginTop:{
          sm:'4%'
        }
        }}>
        <Box sx={{
             width: {
              xs:'100%',
              sm:'45%',
              md:'36%' 
          },
          overflow:'hidden',
          marginTop: {
              xs:'3%',
              sm:'0',
              md:'0' 
          },
          height: {
              xs: '380px',
              md:'400px'
          },
        }} className='profile'>
          <img src={profile} alt='name' className='img'/>
        </Box>
        <Box sx={{
              width: {
                xs:'100%',
                sm:'45%',
                md:'47%' 
            },
            marginTop: {
                xs:'10%',
                sm:'0',
                md:'0' 
            },
            height: {
                xs: '300px',
                md:'450px'
            },
            display: 'flex',
            alignItems: {
              xs: 'flex-start',
              md: 'center'
            },
            justifyContent: {
              xs:'flex-start',
              md: 'center'
            }
        }}>
       <Typography sx={{
        color: 'whitesmoke',
        fontSize:'20px'
       }}>
       I am a crypto researcher, Twitter influencer, web3 YouTuber, content writer and DeFi analyst. With expertise in blockchain technology
       ,market analysis and decentralized finance, i deliver valuable insight and impactful content to empower and educate audience.
       {/* My goal is to accelerate the adoption and understanding of cryptocurrencies and web3 technologies while driving growth and fostering discussions
       within these evolving ecosystem */}
       </Typography>
        </Box>
        </Servicebody>
        </Container>
    </div>
  )
}

export default Service