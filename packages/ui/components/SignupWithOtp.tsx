import React from 'react';
import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
import { useState } from 'react';

function SignupWithOTP(props : {
    onClick: (username: string) => void
  }) {
    const [username, setUsername] = useState("");
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
                onChange={(e)=>{
                    setUsername(e.target.value);
                }}
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
                                        onClick = {async() => {
                                            props.onClick(username)
                                        }}
                            >Subscribe</Button>
                        }}
            />
        </ThemeProvider>
    )
}

export {SignupWithOTP};