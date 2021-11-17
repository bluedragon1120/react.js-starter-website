import InfoBox from "../components/InfoBox";
import NavBar from "../components/NavBar";

function CrossBlockchainWallet() {
  let content = `A single manager of private keys for multiple blockchains. 
    Coming soon...`;
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <InfoBox content={content} />
      </div>
    </div>
  );
}
export default CrossBlockchainWallet;
