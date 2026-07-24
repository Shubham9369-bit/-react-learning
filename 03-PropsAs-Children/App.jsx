
import Card from './components/Card';
import './App.css'
import { useState } from 'react';

function App() {
  //create State
  //Manage State
  //Change State
  //Sabhi child me state ko sync karaunga
  
  const [name,setName]=useState(" ")
  return (
    <>
      <Card name={name} setName={setName}/>
      <p>Hey i am inside parent components: {name}</p>
    </>
  )
}

export default App
