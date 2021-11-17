import InfoSection from "../components/InfoSection";
import NavBar from "../components/NavBar";
import ParticipateSection from "../components/ParticipateSection";

function HomePage() {
  return (
    <div className="App">
      <NavBar />

      <div className="App-header">
        <InfoSection />
        <ParticipateSection />
      </div>
    </div>
  );
}
export default HomePage;
