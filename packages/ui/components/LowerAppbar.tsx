import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
const pages = ['Home', 'Projects', 'Photography', 'Words', 'About'];
function LowerAppbar(){

  
    return (
      <AppBar position="static"
        sx={{ bgcolor: "#e2bf89" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{
                display: "flex",
                justifyContent:'center'
            }}>
            <Box sx={{
                display: "flex",
                justifyContent:'space-between',
                width:'60%'
            }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
export default LowerAppbar;