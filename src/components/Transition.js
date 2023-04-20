export default function Transition(props) {
  return (
    <div
      className="tr-background"
      style={{ display: props.inProgress ? "block" : "none" }}
    >
      <div className="tr-cont">
        <div className="tr-img">
          <img src="../transition-wheel.svg" className="tr-wheel" alt="" />
          <img src="../transition-sled.svg" className="tr-sled" alt="" />
          <div className="tr-line"></div>
        </div>
      </div>
    </div>
  );
}
