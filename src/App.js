
import './App.css';
import IdCard from './Components/IdCard.jsx'
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';

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

  const creditCards = [
    {
      type:"Visa",
      number:"0123456789018845",
      expirationMonth:3,
      expirationYear:2021,
      bank:"BNP",
      owner:"Maxence Bouret",
      bgColor:"#11aa99",
      color:"white",
    },
    {
      type:"Master Card",
      number:"0123456789010995",
      expirationMonth:3,
      expirationYear:2021,
      bank:"N26",
      owner:"Maxence Bouret",
      bgColor:"#eeeeee",
      color:"#222222"
    },
    {
      type:"Visa",
      number:"0123456789016984",
      expirationMonth:12,
      expirationYear:2019,
      bank:"Name of the Bank",
      owner:"Firstname Lastname",
      bgColor:"#ddbb55",
      color:"white" 
    }
  ]

function App() {
  return (
    <div className="App">
      {idInformations.map((person)=>{
        return <IdCard person={person}/>
      })}
      <div>
        <Greetings lang="de" name="Ludwig"/>
        <Greetings lang="fr" name="François"/>
      </div>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div className="cardInRow">
        {creditCards.map((card)=>{
          return <CreditCard card={card}/>
        })}  
      </div>
      
    </div>
  );
}

export default App;

//