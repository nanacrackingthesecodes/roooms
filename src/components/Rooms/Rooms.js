import React, { useRef, useState } from "react";
import "./Rooms.css";

function Rooms() {
  const bigRooms = [
    { id: 1, image: "/rooms1.jpg", title: "НАЗВА НАБОРУ" },
    { id: 2, image: "/rooms2.jpg", title: "НАЗВА НАБОРУ" },
    { id: 3, image: "/rooms3.jpg", title: "НАЗВА НАБОРУ" },
    { id: 4, image: "/rooms4.jpg", title: "НАЗВА НАБОРУ" },
    { id: 5, image: "/rooms5.jpg", title: "НАЗВА НАБОРУ" },
    { id: 6, image: "/rooms6.jpg", title: "НАЗВА НАБОРУ" },
    { id: 7, image: "/rooms7.jpg", title: "НАЗВА НАБОРУ" },
  ];

  const smallRooms = [
    { id: 11, image: "/small1.jpg", title: "НАЗВА НАБОРУ" },
    { id: 12, image: "/small2.jpg", title: "НАЗВА НАБОРУ" },
    { id: 13, image: "/small3.jpg", title: "НАЗВА НАБОРУ" },
    { id: 14, image: "/small4.jpg", title: "НАЗВА НАБОРУ" },
    { id: 15, image: "/small5.jpg", title: "НАЗВА НАБОРУ" },
    { id: 16, image: "/small6.jpg", title: "НАЗВА НАБОРУ" },
    { id: 17, image: "/small7.jpg", title: "НАЗВА НАБОРУ" },
  ];

  const Track = ({ data }) => {
    const trackRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);

    const scroll = (direction) => {
      const container = trackRef.current;
      if (!container) return;

      const scrollAmount = 300;

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        setShowLeft(container.scrollLeft > 0);
      }, 200);
    };

    return (
      <div className="rooms__container">
        {showLeft && (
          <button className="rooms__arrow left" onClick={() => scroll("left")}>
            <img src="/arrow-left.png" alt="left" />
          </button>
        )}

        <div className="rooms__track" ref={trackRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className="rooms__card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="rooms__label">{item.title}</div>
            </div>
          ))}
        </div>

        <button className="rooms__arrow right" onClick={() => scroll("right")}>
          <img src="/arrow.png" alt="right" />
        </button>
      </div>
    );
  };

  return (
    <section className="rooms">
      <h2 className="rooms__title">кімнати</h2>

      <Track data={bigRooms} />

      <div className="small-list">
        {smallRooms.map((item) => (
          <div key={item.id} className="small-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Rooms;