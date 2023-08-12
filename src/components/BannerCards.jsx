import "../styles/Dashboard/dashboard.scss";
import ProgressItem from "./ProgressItem";

const BannerCards = () => {
  // data for progress cards
  const progressCardsData = [
    {
      id: 1,
      name: "Marco Sciosia",
      time: "3h 26m",
      bgColor: "#005CAB",
      width: "70%",
    },
    {
      id: 2,
      name: "Alex Cannava",
      time: "2h 26m",
      bgColor: "#005CAB",
      width: "50%",
    },
    {
      id: 3,
      name: "Frank Giulia...",
      time: "1h 26m",
      bgColor: "#34C759",
      width: "30%",
    },
    {
      id: 4,
      name: "Giovanna Ba...",
      time: "4h 26m",
      bgColor: "#FF9500",
      width: "100%",
    },
    {
      id: 5,
      name: "Marco Sciosia",
      time: "3h 26m",
      bgColor: "#FC3400",
      width: "80%",
    },
  ];

  return (
    <div className="banner_cards">
      {/* Card Left */}
      <div className="bc_left">
        {/* Title */}
        <div className="card_title">
          <img src="./images/number-of-edit.png" alt="" />
          <p>Number of Edits</p>
        </div>

        {/* Counter */}
        <div className="counter">
          <h1 className="jakarta">1,203</h1>
        </div>

        {/* statistics */}
        <div className="statistics">
          {/* result */}
          <div className="result">
            <img src="./images/increase.png" alt="increase" />
            <p className="jakarta">1.32%</p>
          </div>

          <p>Last 7 days</p>
        </div>
      </div>

      {/* Card Center */}
      <div className="bc_center">
        {/* Title */}
        <div className="card_title">
          <img src="./images/spent-per-hour.png" alt="" />
          <p>Average Time Spent per Day</p>
        </div>

        {/* items */}
        <div className="items">
          {progressCardsData?.map((item) => {
            const { bgColor, id, name, time, width } = item;
            return (
              <ProgressItem
                key={id}
                width={width}
                bgColor={bgColor}
                name={name}
                time={time}
              />
            );
          })}
        </div>
      </div>

      {/* Card Left */}
      <div className="bc_right">
        {/* Title */}
        <div className="card_title">
          <img src="./images/number-of-edits.png" alt="" />
          <p>Top Number of Edits</p>
        </div>

        {/* Counter */}
        <div className="counter">
          <h1 className="jakarta">Marco Scio...</h1>
        </div>

        {/* statistics */}
        <div className="statistics">
          {/* result */}
          <div className="result">
            <img src="./images/increase.png" alt="increase" />
            <p className="jakarta">+104</p>
          </div>

          <p>Last Month</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
