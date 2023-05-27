import React from 'react'
import {Container, Box, Typography} from '@mui/material'
import profile from '../Image/bmsprofile.png'
import '../../Style/style.css'

const Banner = () => {
  return (
    <div id='home'>
        <Container>
            <Box sx={{
                width: '100%', 
                display: 'flex', 
                justifyContent:{
                    xs:'center',
                    sm:'space-between',
                    md:'space-between'
                },
                flexDirection:{
                    xs:'column-reverse',
                    sm:'row',
                    md:'row'
                },
                marginBottom:{
                    xs:'3%',
                    md: '0'
                }
            }}>
                <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'47%',
                        md:'47%' 
                    },
                    marginTop: {
                        xs:'10%',
                        sm:'5%',
                        md:'0' 
                    },
                    height: {
                        xs: '350px',
                        md:'450px'
                    },
    
                    display: 'flex',
                    alignItem: 'center',
                    flexDirection: 'column',
                    justifyContent:{
                        xs:'null',
                        md: 'center'
                    },
                  

                }}>

                    <Typography sx={{
                        fontSize:{
                            xs:'23px',
                            sm:'25px',
                            md: '30px'
                        },
                            marginBottom:{
                            xs:'5px',
                            sm: '5px',
                            md: '7px'
                        },
                        color: 'whitesmoke',
                        fontWeight:{
                            xs:'600',
                            md:'500'
                        }
                    }}>
                        HELLO THERE 
                    </Typography>
                    <Typography sx={{
                        color:'orange',
                        fontSize:{
                            xs:'40px',
                            sm: '42px',
                            md: '45px'
                        },
                        marginBottom:{
                            xs:'5px',
                            sm: '0',
                            md: '7px'
                        },
                        fontWeight: '700'
                    }}>
                   I'M BMS <br/>
                
                    </Typography>
                    <Typography sx={{
                        color:'whitesmoke',
                        fontSize:{
                            xs:'26px',
                            md: '30px'
                        },
                        marginBottom:{
                            xs:'10px',
                            sm: '5px',
                            md: '7px'
                        },
                        fontWeight:{
                            xs:'600',
                            md:'500'
                        }
                    }} >
                        A Defi analyst and a Web3 YouTuber
                    </Typography>
                    <Typography 
                    sx={{
                        color:'whitesmoke',
                        fontSize:{
                            xs:'17.5px',
                            md: '18px'
                        },
                        marginBottom:{
                            xs:'15px',
                            md: '15px'
                        }
                    }}>
                    With knowledge in cryptocurrency and web3, i offer the best projects resulting in massive profit
                    </Typography>
                    <Box>
                        <button className='about'>
                            About Me
                        </button>
                    </Box>
                </Box>
                    <Box sx={{
                    width: {
                        xs:'100%',
                        sm:'47%',
                        md:'45%' 
                    },
                    overflow:'hidden',
                    marginTop: {
                        xs:'3%',
                        sm:'0',
                        md:'0' 
                    },
                    height: {
                        xs: '350px',
                        md:'400px'
                    },
                }}>
                   <img src={profile}  alt='name' className ="profile" sx={{
                    objectFit: 'cover',
                    
                   }}/> 
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default Banner