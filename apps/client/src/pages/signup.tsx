import {SubscribePage} from 'ui';
import axios from 'axios';
export default function signup() {
  return (
      <>
        <SubscribePage onClick={async (username)=>{
            console.log("from subscibe page tage in Client "+username);
            const response = await axios.post("/api/subscribe",{username});
            if(response.status == 200){
              localStorage.setItem('token', response.data.token);
              console.log(localStorage.getItem('token'));
            }
        }} />
      </>
    );
  }