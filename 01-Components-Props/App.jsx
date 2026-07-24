import UserCard from './components/UserCard'
import './App.css'
import Hanumanji from './assets/Hanumanji.jpg';
import Shivaji from './assets/Shivaji.webp';
import Shubham from './assets/Shubham.jpeg';

function App() {
  

  return (
    <div className='container'>
      <UserCard name="Shubham" desc="description1" image={Shubham} style={{"border-radius":"10px"}}/>
      <UserCard name="Chatrapati Shivaji Maharaj" desc="description2" image={Shivaji} style={{"border-radius":"10px"}}/>
      <UserCard name="Bajrangbali" desc="description3" image={Hanumanji} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
