import { useEffect, useRef, useState } from "react";

const DashboardTopBar = () => {
  const ref = useRef();
  const ref2 = useRef();

  // select timeframe data array
  const timeFrame = [
    "Last 7 days",
    "Last 15 days",
    "Last 30 days",
    "Last 3 Months",
    "Last 6 Months",
    "Last 12 Months",
  ];

  // state for show the dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // UseEffect Function for Handle Popup Open Close
  useEffect(() => {
    const closePopup = (e) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, []);

  // state for current timeframe state
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 7 days");
  return (
    <div className="topbar">
      {/* welcome text */}
      <div className="welcome">
        <h1 className="jakarta">Welcome back, Sarah</h1>
      </div>

      {/* Filter Option */}
      <div className="filter">
        {/* Left side */}
        <div className="left">
          <p className="jakarta">Monday, 08 July 2023.</p>
          <p className="jakarta">
            You&apos;ve 5 new booking request, Checkout more in{" "}
            <span>
              <a href="#">Booking Request</a>
            </span>
          </p>
        </div>

        {/* right side */}
        <div className="right">
          {/* filter menu */}
          <div
            className="filter-menu"
            ref={ref}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3333 8.66665H8V12H11.3333V8.66665ZM10.6667 1.33331V2.66665H5.33333V1.33331H4V2.66665H3.33333C2.59333 2.66665 2.00667 3.26665 2.00667 3.99998L2 13.3333C2 14.0666 2.59333 14.6666 3.33333 14.6666H12.6667C13.4 14.6666 14 14.0666 14 13.3333V3.99998C14 3.26665 13.4 2.66665 12.6667 2.66665H12V1.33331H10.6667ZM12.6667 13.3333H3.33333V5.99998H12.6667V13.3333Z"
                fill="#84818A"
              />
            </svg>

            {/* text */}
            <p>
              Show : <span>{selectedTimeframe}</span>
            </p>

            {/* Dropdown Icon */}
            <div className="dropdown-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.70896 6.70743C3.07856 6.07759 3.52463 5 4.41575 5H11.5873C12.478 5 12.9243 6.07669 12.2947 6.70679L8.71219 10.2926C8.32185 10.6833 7.68868 10.6836 7.29798 10.2932L3.70896 6.70743Z"
                  fill="#8F92A1"
                  fillOpacity="0.4"
                />
              </svg>
            </div>

            {/* dropdown */}
            {showDropdown === true ? (
              <div className="dropdown" ref={ref2}>
                <ul>
                  {timeFrame?.map((item, index) => (
                    <li onClick={() => setSelectedTimeframe(item)} key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
