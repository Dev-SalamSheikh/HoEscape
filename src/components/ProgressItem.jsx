const ProgressItem = ({ width, bgColor, name, time }) => {
  return (
    <>
      {/* item */}
      <div className="item">
        <div className="name">
          <p>{name}</p>
        </div>

        <div className="time">
          <p>{time}</p>
        </div>

        {/* progressbar */}
        <div className="progressBar">
          <div
            className="bar"
            style={{ width: width, background: bgColor }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressItem;
