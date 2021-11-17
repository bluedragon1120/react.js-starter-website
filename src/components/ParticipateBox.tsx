function ParticipateBox(props: any) {
  return (
    <div className="container">
      <div className="jumbotron-transparent">
        <h1 className="headerh1">How to participate?</h1>
        <p className="textp">{props.content}</p>
      </div>
    </div>
  );
}
export default ParticipateBox;
