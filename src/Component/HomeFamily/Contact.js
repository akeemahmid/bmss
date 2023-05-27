// import { Twitter, YouTube, Instagram} from "@mui/icons-material";
import {FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import { Box, Typography, Container} from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div className='new' id='contact' style={{
        paddingBottom: '20px'
    }}>
        <Typography sx={{
            fontSize: {
                xs: '35px',
                md: '37px'
            },
            color: 'whitesmoke',
            textAlign: 'center',
            marginBottom:{
                xs: '3%',
                md: '2%'
            }
        }}> Contact Me</Typography>
        <Container>
            <Box sx={{
                width: '100%',
                display: 'flex',
                alignItems:  'center',
                justifyContent:{
                    xs:'center',
                    md: 'space-between'
                },
                flexDirection:{
                    xs: 'column',
                    md: 'row'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    // alignItems: 'center',
                    flexDirection: 'column',
                    width:{
                        xs: '100%',
                        md: '45%'
                    },
                }}>
                    <Typography sx={{
                        fontSize:{
                            xs:'27px',
                            md:'30px'
                        },
                        marginBottom:'3%',
                        width:'100%',
                        textAlign: 'left',
                        fontWeight: 'bold',
                        color: 'orange'
                    }}>
                        Get in touch
                    </Typography>
                    <Typography sx={{
                        fontSize:'20px',
                        color: 'whitesmoke'
                    }}>
                        For partnerships, sponsorships, or if you're eager to learn more
                        about me and cryptocurrency, we welcome you to get in touch with us 
                        using the contact form below.  <br/>
                        We're excited to hear from you and explore potential collaborations!
                    </Typography>
                </Box>

                <Box sx={{
                     width:{
                        xs: '100%',
                        md: '45%'
                    },
                    marginTop:{
                        xs:'5%',
                        md: '2%'
                    }
                }}>

              <form action='mailto:akeemabdulhamid7@gmail.com' method='GET' style={{
                width:'100%'
              }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    // alignItems: 'center',
                    flexDirection:{
                        xs: 'column',
                        md: 'row'
                    },
                    justifyContent: {
                        xs: 'center',
                        md: 'space-between'
                    }
                }}>
                    <input type='text' placeholder='Name'  name='subject' style={{
                        width: {
                            xs: '100%',
                            md: '50%'
                        },
                        border: '2px solid whitesmoke',
                        background:'transparent',
                        padding: '10px',
                        marginBottom:'3%',
                        color: 'whitesmoke',
                        fontSize: '20px'
                    }}/>
                    <input type='email' placeholder='Email address' name='email'  style={{
                        width: {
                            xs: '100%',
                            md: '50%'
                        },
                         border: '2px solid whitesmoke',
                        background:'transparent',
                        padding: '10px',
                        marginBottom:'3%',
                        color: 'whitesmoke',
                        fontSize: '18px'
                        
                        // marginBottom:{
                        //     xs: '3%',
                        //     md: '0'
                        // }
                        
                    }}/>
                </Box>
                <Box sx={{
                    width:'100%',
                    marginTop: '3%'
                }}>
                    <textarea rows='10' name='body'  style={{
                        width:'94%',
                        border: '2px solid white',
                        background: 'transparent',
                        padding: '10px',
                        color: 'whitesmoke',
                    }} placeholder='Message...'>

                    </textarea>
                </Box>
                <input type='submit' value='SEND' style={{
                    width:'100%',
                    border: 'none',
                    marginTop: '3%',
                    fontSize: '20px',
                    background: 'orange',
                    color: 'whitesmoke',
                    padding: '10px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}/>
              </form>
                </Box>
    
          
           
            
            </Box>
        </Container>
    </div>
  )
}

export default Contact