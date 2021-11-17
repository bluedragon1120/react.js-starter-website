import InfoBox from "../components/InfoBox";
import NavBar from "../components/NavBar";

function ColonyX() {
  let content = `A colony of humans are trying to build a self-sustaining and functioning 
    society. An NFT based game on Ethereum where everything is regulated by a DAO, 
    of which every player (NFT holder) is a member. Coming soon...`;
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <InfoBox content={content} />
      </div>
    </div>
  );
}
export default ColonyX;
