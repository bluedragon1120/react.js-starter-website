import InfoBox from "../components/InfoBox";
import NavBar from "../components/NavBar";

function DogeVanderlinde() {
  let content = `A secure decentralized 2 way bridge between Dogecoin and Ethereum. 
    Coming soon.`;
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <InfoBox content={content} />
      </div>
    </div>
  );
}
export default DogeVanderlinde;
