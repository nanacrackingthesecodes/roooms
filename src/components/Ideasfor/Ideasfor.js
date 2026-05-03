import "./Ideasfor.css";

function Ideasfor() {
  const ideasforItems = [
    { id: 1, image: "/idea1.jpg" },
    { id: 2, image: "/idea2.jpg" },
    { id: 3, image: "/idea3.jpg" },
    { id: 4, image: "/idea4.jpg" },
  ];

  return (
    <section className="ideasfor">
      <h2 className="ideasfor__title">ідеї для оформлення</h2>

      <div className="ideasfor__container">
        {ideasforItems.map((item, index) => (
          <div
            key={item.id}
            className={`ideasfor__item ideasfor__item--${index + 1}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </div>
    </section>
  );
}

export default Ideasfor;