export default function Load(props) {
  return (
    <div
      className={`tr-background load`}
      style={{ display: props.inProgress ? "block" : "none" }}
    >
      <div className="tr-cont">
        <img className="load-img" src="../logo-o-2d.svg" alt="load" />
      </div>
    </div>
  );
}
