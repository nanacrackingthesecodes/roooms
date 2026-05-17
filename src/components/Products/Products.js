import { useRef } from "react";
import "./Products.css";

const products = [
  {
    img: "/product1.jpg",
    name: "СТІЛ LAGOM",
    desc: "Мінімалістичний стіл для роботи та навчання в скандинавському стилі",
    price: "129$",
  },
  {
    img: "/product2.jpg",
    name: "КРІСЛО NORD",
    desc: "Ергономічне крісло для комфортної роботи вдома",
    price: "89$",
  },
  {
    img: "/product3.jpg",
    name: "ПОЛИЦЯ KUB",
    desc: "Настінна полиця для організації простору",
    price: "45$",
  },
  {
    img: "/product4.jpg",
    name: "СВІТИЛЬНИК SOFT",
    desc: "М'яке тепле світло для затишної атмосфери",
    price: "39$",
  },
];

function Products() {
  const sliderRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e) => {
    drag.current.active = true;
    drag.current.startX = e.pageX - sliderRef.current.offsetLeft;
    drag.current.scrollLeft = sliderRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - drag.current.startX;
    sliderRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    drag.current.active = false;
  };

  return (
    <section className="products">
      <h2 className="products-title">ТОВАРИ</h2>

      <div
        className="products-slider"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {products.map((item, index) => (
          <div className="products-card" key={index}>
            <div className="products-img-wrap">
              <img src={item.img} alt={item.name} draggable={false} />
            </div>
            <p className="products-name">{item.name}</p>
            <p className="products-desc">{item.desc}</p>
            <p className="products-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;