export default function AnimationEndScreen(props) {
  return (
    <div
      className="end-back"
      style={{ display: props.inProgress ? "block" : "none" }}
    >
      <div className="end-background">
        <h1 className="end-thank">Thanks for watching.</h1>
        <h2 className="end-credit">Created by Igor Ho, August 2022.</h2>
        <h2 className="end-credit">(After 72hrs and 12 cups of coffee)</h2>
      </div>
    </div>
  );
}
