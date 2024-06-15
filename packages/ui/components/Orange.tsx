import React from 'react';
import { ThemeProvider, Typography, createTheme } from '@mui/material';
import '@fontsource/great-vibes'; // Defaults to weight 400


function OrangeLogo () { 

  const logoStyles = {
    width  : '100px',   
    height  : '100px',
    padding : '10px'
  }

    return (
    <div>
        <img src="/public/assets/OrangeLogo.png" alt="Orange Corp Logo" style={logoStyles} />
      </div>
    );
}
function OrangeLogoShort() { 

  const logoStyles = {
    width  : '70px',   
    height  : '70px',
    padding : '10px'
  }

    return (
      <div>
        <img src="/public/assets/OrangeLogo.png" alt="Orange Corp Logo" style={logoStyles} />
        </div>
    );
}

function OrangePoem () {
  
  const poemTheme = createTheme({
    typography: {
      fontFamily : 'Great Vibes, Arial',
      body1:{
        fontFamily: 'default', // 'default' is not a recognized font-family. Use a valid font or remove this line.
      }
    }
  });
  return (
    <>
      <ThemeProvider theme={poemTheme}>
        <div >
          <Typography variant='h2' align='left'>The Orange</Typography>
          <Typography variant='body1' 
                      align='left'>
          <br/>At lunchtime I bought a huge orange
          <br/>The size of it made us all laugh.
          <br/>I peeled it and shared it with Robert and Dave
          <br/>They got quarters and I had a half.
          <br/>
          <br/>And that orange, it made me so happy,
          <br/>As ordinary things often do
          <br/>Just lately. The shopping. A walk in the park.
          <br/>This is peace and contentment. It’s new.
          <br/>
          <br/>The rest of the day was quite easy.
          <br/>I did all the jobs on my list
          <br/>And enjoyed them and had some time over.
          <br/>I love you. I’m glad I exist.
          <br/><br/>
          </Typography>
          <Typography variant='h6' align='left'> - Wendy Cope</Typography>
        </div>
      </ThemeProvider>
    </>
  )
}

function OrangePoemComplete() {
  return (
    <>
        <div style={{
              paddingTop:'10%',
              paddingLeft:'50%'
            }}>
          <OrangeLogo/>
        </div>
        <div style={{
              paddingTop:'5%',
              paddingLeft:'40%'
            }}>
          <OrangePoem/>
        </div>
    
    </>
  )
}
  export  {
    OrangeLogo,
    OrangeLogoShort,
    OrangePoemComplete
  };