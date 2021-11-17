import InfoBox from "./InfoBox";

function InfoSection() {
  let content = `Vanderlinde is an open technology initiative.  
    We collaborate to build shit, experiment, and through all this 
    create value and fundamentally improve the quality of life. 
    We are a community that is open to all. Everything we do is open source 
    (including this site) and always will be.`;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <InfoBox content={content} />
        </div>

        <div className="col col-lg-5"></div>
      </div>
    </div>
  );
}

export default InfoSection;
