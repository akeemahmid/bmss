import { CloseOutlined, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography, Menu } from '@mui/material';
import React, { useState } from 'react'
import {Outlet } from 'react-router-dom'
import {Link} from 'react-scroll'
import { ContextApi } from './Context';

const Navbar = () => {
  const [Toggle, setToggle] = useState(false)
  const {currency, setCurrency} = ContextApi()
  const darkTheme = createTheme({
    palette:{
      primary:{
        main: '#fff',
      },
      type: 'dark'
    }
  })
  const NavItems = [{
    name: 'Home',
    Link: 'home',
  },
  {
    name: 'About',
    Link: 'about',
  },
  {
    name: 'Skills',
    Link: 'skills',
  },
  {
    name: 'Service',
    Link: 'service',
  },
  {
    name: 'Contact Me',
    Link: 'contact',
 
  },]
  return (
    <div>
      <ThemeProvider theme={darkTheme}></ThemeProvider>
        <AppBar position='sticky' sx={{
             background:"#14161a"
        }}>
            <Container>
                <Toolbar  sx={{
                     display: 'flex',
                     justifyContent: "space-between",
                     alignItem: 'center' ,

                }}>
                <Box>LOGO</Box>

                  <Box sx={{display:{
            xs:'none',
            sm:'none',
            md:'flex'
          },
          gap:'15px'}}>
            {NavItems.map((x, index)=>{
              console.log(x.service)
              return(
                
               <Link to={x.Link} smooth={true} offset={-190} duration={500}> <Typography key={index} fontSize='20px' className='realLinks' color='white'>{x.name}</Typography></Link>
              )
            })}
          
          </Box>

          <Box>
            <Select
            style={{
              width: '100px',
              height: '50px',
              color: 'white',
              border: 'white',
              // background:'white'
            }}
            variant='outlined'
            value={currency}
            onChange={(e)=> setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'NGN'} >NGN</MenuItem>
            </Select>
            &nbsp;  &nbsp;
            <MenuIcon sx={{color: 'white', display:{
            xs:'inline-block',
            sm:'inline-block',
            md:'none'
          } }}
          onClick={()=>setToggle(!Toggle)}/>
          </Box>
                </Toolbar>
                <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={Toggle}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        >

        
          <Box sx={{width:'350px', height:'80vh', color: 'white', background:'#14161a', position:'relative' }}>
          {NavItems.map((x, index)=>{
              return(
               <Link to={x.Link} smooth={true} offset={-190} duration={500}> <MenuItem key={index} fontSize='20px'  color='white'>{x.name}</MenuItem></Link>
              )
            })}
          <CloseOutlined
          
          sx={{
            position: 'absolute',
            top:'3%',
            right: '10%',
            fontSize:'35px',
          color:'red'}}
          onClick={()=>setToggle(!Toggle)}
            />
          </Box>
        </Menu>
            </Container>
        </AppBar>

        <Outlet/>
    </div>
  )
}

export default Navbar
