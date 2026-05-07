import React from "react";
import "./Information.css";

const smallInformation = [
  { id: 1, image: "/info1.jpg", title: "ОРГАНІЗАЦІЯ ПРОСТОРУ" },
  { id: 2, image: "/info2.jpg", title: "СКАНДИНАВСЬКИЙ СТИЛЬ" },
  { id: 3, image: "/info3.jpg", title: "МІНІМАЛІЗМ У ДОМІ" },
  { id: 4, image: "/info4.jpg", title: "ФУНКЦІОНАЛЬНІСТЬ" },
  { id: 5, image: "/info5.jpg", title: "ЗАТИШОК КОЖНОГО ДНЯ" },
  { id: 6, image: "/info6.jpg", title: "ПРОСТІ РІШЕННЯ" },
  { id: 7, image: "/info7.jpg", title: "ДИЗАЙН ЖИТТЯ" },
];

function Information() {
  return (
    <section className="information">
      <h2 className="information-title">ІНФОРМАЦІЯ</h2>

      <div className="information-wrapper">
  <div className="information-image">
    <img src="/information.jpg" alt="" className="information-main-img" />
  </div>

  <div className="information-card">
    <div className="information-card-content">
      <h3>ПРО ДИЗАЙН</h3>

      <p>
      Ми віримо, що гарний дизайн — це не розкіш, а щоденний комфорт. 
      Світлі кольори, натуральні текстури та прості форми створюють простір, 
      у якому легко жити, працювати та відпочивати.
      </p>
    </div>
  </div>
</div>
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