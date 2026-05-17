import "./Cat.css";

function Cat() {
  const products = [
    { img: "/названабору1 copy.png", title: "Nordvik" },
    { img: "/названабору2 copy.png", title: "Eira" },
    { img: "/названабору3 copy.png", title: "Fjord" },
    { img: "/названабору4 copy.jpg", title: "Lund" },
    { img: "/названабору5 copy.jpg", title: "Skala" },
    { img: "/названабору6 copy.jpg", title: "Oslo" },
    { img: "/названабору7 copy.jpg", title: "Bergen" },
    { img: "/названабору8 copy.png", title: "Malmö" },
    { img: "/названабору9 copy.jpg", title: "Sven" },
    { img: "/названабору10 copy.png", title: "Runa" },
    { img: "/названабору11 copy.jpg", title: "Oaken" },
    { img: "/названабору12 copy.jpg", title: "Arden" },
    { img: "/названабору13 copy.png", title: "Vega" },
    { img: "/названабору14 copy.png", title: "Lina" },
    { img: "/названабору15 copy.jpg", title: "Nora" },
    { img: "/названабору16 copy.jpg", title: "Stockholm" },
    { img: "/названабору17 copy.jpg", title: "Aster" },
    { img: "/названабору18 copy.jpg", title: "Nordic Moon" },
  ];

  return (
    <section className="cat">
      <h2>Каталог</h2>

      <div className="cat-grid">
        {products.map((product, index) => (
          <div className="cat-item" key={index}>
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cat;