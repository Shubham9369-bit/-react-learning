

import { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn,setLoggedIn]=useState(true);

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1>Welcome everyOne to codehelp web dev course</h1>
      <div>
        {isLoggedIn && <LoginBtn/>}
      </div>
    </div>
  )

  // return(
  //   <>
  //     {isLoggedIn?<Logout/> : <LoginBtn/>}
  //   </>
  // )

  // if(isLoggedIn){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
  
}

export default App
