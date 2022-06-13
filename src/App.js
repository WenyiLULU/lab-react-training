
import './App.css';
import IdCard from './Components/IdCard.jsx'
import Greetings from './Components/Greetings';
import Random from './Components/Random';

const idInformations = [
  {   lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date("1992-07-14"),
      picture: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
      lastName:'Delores',
      firstName:'Obrien',
      gender:'female',
      height:172,
      birth:new Date("1988-05-11"),
      picture:"https://randomuser.me/api/portraits/women/44.jpg",
  }
  ]

function App() {
  return (
    <div className="App">
      {idInformations.map((person)=>{
        return <IdCard person={person}/>
      })}
      <Greetings lang="de" name="Ludwig"/>
      <Greetings lang="fr" name="François"/>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;

//