import React from "react";
import "./Information.css";

const smallInformation = [
  { id: 1, image: "/info1.jpg", title: "НАЗВА НАБОРУ" },
  { id: 2, image: "/info2.jpg", title: "НАЗВА НАБОРУ" },
  { id: 3, image: "/info3.jpg", title: "НАЗВА НАБОРУ" },
  { id: 4, image: "/info4.jpg", title: "НАЗВА НАБОРУ" },
  { id: 5, image: "/info5.jpg", title: "НАЗВА НАБОРУ" },
  { id: 6, image: "/info6.jpg", title: "НАЗВА НАБОРУ" },
  { id: 7, image: "/info7.jpg", title: "НАЗВА НАБОРУ" },
];

function Information() {
  return (
    <section className="information">
      <h2 className="information-title">ІНФОРМАЦІЯ</h2>

      <div className="information-wrapper">
        <div className="information-image">
          <div className="information-grey"></div>
        </div>

        <div className="information-card">
          <div className="information-card-content">
            <h3>ІНФОРМАЦІЯ</h3>
            <p>
              lorem ipsum dolor sit amet consectetur. bibendum neque at em integer
              integer. tempus a mi in enim dui rhoncus vulputate nulla et.
            </p>
          </div>
        </div>
      </div>

      {/* КАК smallRooms */}
      <div className="small-list">
        {smallInformation.map((item) => (
          <div key={item.id} className="small-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Information;