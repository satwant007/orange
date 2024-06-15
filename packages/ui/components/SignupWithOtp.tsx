import React from 'react';
import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";

function SignupWithOTP() {

    const inputCustomTheme = createTheme({
        palette:{
            primary:{
                main:'#000000'
            }
        },
        typography: {
            fontWeightBold:"2" 
        },
    })

    return (
        <ThemeProvider theme={inputCustomTheme}>
            <TextField  
                sx={{
                    display:"flex",
                    width:'100%',
                    marginRight:'50px'
                }}
                id="outlined-textarea"
                placeholder="Type Your Email"
                type='email'
                InputProps={{
                        endAdornment : 
                            <Button variant="outlined"
                                        sx={{
                                            margin:'10px',
                                            fontWeight: 'bolder',
                                            background:'#f4a74b',
                                            border:'none'
                                        }}
                            >Subscribe</Button>
                        }}
            />
        </ThemeProvider>
    )
}

export {SignupWithOTP};