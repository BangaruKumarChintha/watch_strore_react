import React,{useEffect,useState} from 'react'
import { auth } from './firebase';
import UserAuth from './UserAuth';
import Direct from './Redirect';

const FireValid = () => {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
    }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        {presentUser ? <Direct presentUser={presentUser}/> : <UserAuth /> }
      </center>
    </div>
  )
}

export default FireValid