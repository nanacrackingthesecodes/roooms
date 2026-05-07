import "./Cat.css";

function Cat() {
  const products = [
    "/названабору1 copy.png","/названабору2 copy.png","/названабору3 copy.png",
    "/названабору4 copy.jpg","/названабору5 copy.jpg","/названабору6 copy.jpg",
    "/названабору7 copy.jpg","/названабору8 copy.png","/названабору9 copy.jpg",
    "/названабору10 copy.png","/названабору11 copy.jpg","/названабору12 copy.jpg",
    "/названабору13 copy.png","/названабору14 copy.png","/названабору15 copy.jpg",
    "/названабору16 copy.jpg","/названабору17 copy.jpg","/названабору18 copy.jpg"
  ];

  return (
    <section className="cat">
      <h2>каталог</h2>

      <div className="cat-grid">
        {products.map((img, index) => (
          <div className="cat-item" key={index}>
            <img src={img} alt="" />
            <p>скандинавський набір</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cat;