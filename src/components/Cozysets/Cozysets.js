import "./Cozysets.css";

function Cozysets() {
  const sets = [
    {
      img: "/cozysets1.jpg",
      title: "ВЕЧІРНІЙ ЗАТИШОК",
    },
    {
      img: "/cozysets2.jpg",
      title: "СКАНДІ СПОКОЙ",
    },
    {
      img: "/cozysets3.jpg",
      title: "HOME FEEL SET",
    },
  ];

  return (
    <section className="cozysets">
      <h2>ЗАТИШНІ НАБОРИ</h2>

      <div className="cozysets-grid">
        {sets.map((item, index) => (
          <div className="cozysets-item" key={index}>
            <img src={item.img} alt={item.title} className="cozysets-image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cozysets;