import {Paper } from '@mui/material'
import {OrangePoemComplete} from 'ui'
import {SignupWithOTP} from 'ui'

export default function signup() {
  return (
      <>
        <div>
          <div style={{
                display: 'flex',
                justifyContent: 'space-between',}}  >
            <Paper  sx={{ background:'transparent', 
                          width:'45%',
                          boxShadow: 'none',
                        }}>
                <OrangePoemComplete/>
            </Paper>
            <div  style={{
                        display:'flex',
                        alignItems:'center',
                        width:'55%',
                        background:'transparent', 
                        justifyContent:'space-between',
                        boxShadow: 'none'
                        }}>
                        <SignupWithOTP/>
            </div>
          </div>
        </div>
    </>
    );
  }