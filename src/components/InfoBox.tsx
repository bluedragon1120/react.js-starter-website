function InfoBox(props: any) {
  return (
    <div className="container">
      <div className="jumbotron-transparent">
        <p className="textp">{props.content}</p>
      </div>
    </div>
  );
}
export default InfoBox;
