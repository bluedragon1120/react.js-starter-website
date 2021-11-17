import InfoBox from "../components/InfoBox";
import NavBar from "../components/NavBar";

function ShadowGalactic() {
  let content = "Bridge between crypto and fiat. Coming soon...";
  return (
    <div className="App">
      <NavBar />
      <div className="App-header">
        <InfoBox content={content} />
      </div>
    </div>
  );
}
export default ShadowGalactic;
