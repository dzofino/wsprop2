import './App.css';
import Cards from './Component/Cards';
import Navigation from './Component/Navigation';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap",marginTop:"5%"}}>
      <Cards name="Messi"rang="94" pass="85" drible="78" imgsrc="https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1"/>
      <Cards name="Ronaldo"rang="97" pass="87" drible="74" imgsrc="https://s.hs-data.com/bilder/spieler/gross/13029.jpg?fallback=png"/>
      <Cards name="Junior"rang="91" pass="78" drible="71" imgsrc="https://www.footballdatabase.eu/images/photos/players/a_320/320787.jpg"/>
      <Cards name="Mbappe"rang="91" pass="79" drible="69" imgsrc="https://s.hs-data.com/bilder/spieler/gross/284095.jpg"/>
      <Cards name="Messakni"rang="60" pass="59" drible="65" imgsrc="https://www.footballdatabase.eu/images/photos/players/2021/a_92/92396.jpg"/>

     </div>
    </div>
  );
}

export default App;
