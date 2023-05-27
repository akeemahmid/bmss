import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Slider from "./Slider";

const Trending = () => {
  return (
    <Box id='skills'
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "orange",
              width: "100%",
              height: "30%",
              fontSize: {
                xs: "32px",
                md: "40px",
              },
              // marginTop: "5%",
              marginBottom:{
                xs:'3%',
                md:'0'
              },
             
              fontWeight: {
                xs: "600",
                md: "700",
              },
            }}
          >
            My Favourites Coins
          </Typography>
          <Typography sx={{
            fontSize:'20px',
            textAlign:{
              xs:'left',
              md: 'center'
            },
            marginBottom: {
              xs: "5%",
              md: "3%",
            },
            color: "whitesmoke",
          }}>
            These are the most common pairs of coins i used for hunting and trading 
            <br/>
            Athough i could not list all but do not forget to follow me on all social platform to get updates
          </Typography>
        </Box>

        <Box className="trending">
          <Slider/>
           </Box>
      </Container>
    </Box>
  );
};

export default Trending;
