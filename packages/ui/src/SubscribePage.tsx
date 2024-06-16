import {Paper } from '@mui/material'
import {OrangePoemComplete} from "../components"
import {SignupWithOTP} from "../components"

function SubscribePage(props : {
  onClick: (username: string) => void
}) {
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
              <SignupWithOTP onClick={(username)=>{
                  props.onClick(username)
              }}/>
            </div>
          </div>
        </div>
      </>
    );
  }

  export {SubscribePage};