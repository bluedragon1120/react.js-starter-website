import ParticipateBox from "./ParticipateBox";
import "../stylesheets/participateSection.css";
import DiscordBox from "../components/DiscordBox";

function ParticipateSection() {
  let content = `Join our community on discord and go to town! Collaborate on a 
    project you like or start your own. You can also browse projects in the 
    Projects section of the site.`;
  return (
    <div className="capa">
      <div className="container">
        <div className="row">
          <div className="col">
            <ParticipateBox content={content} />
          </div>
          <div className="col">
            <DiscordBox />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ParticipateSection;
