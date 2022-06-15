
import './App.css';
import IdCard from './Components/IdCard.jsx'
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';
import LikeButton from './Components/LikeButton';
import CilckablePicture from './Components/ClickablePicture';
import Dice from './Components/Dice';

const {idInformations, creditCards} = require('./testData.js')

function App() {
  return (
    <div className="App">
      {idInformations.map((person)=>{
        return <div key={person.id}><IdCard person={person}/></div>
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
          return <div key={card.id}><CreditCard card={card}/></div>
        })}  
      </div>
      <div className="ratingStars">
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
          }}
        />
          <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>
      <div>
        <LikeButton />
      </div>
      <div>
        <CilckablePicture />
      </div>
      <div>
        <Dice />
      </div>
    </div>

  );
}

export default App;

//