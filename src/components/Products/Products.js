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
    desc: "М’яке тепле світло для затишної атмосфери",
    price: "39$",
  },
];

function Products() {
  return (
    <section className="products">
      <h2 className="products-title">ТОВАРИ</h2>

      <div className="products-grid">
        {products.map((item, index) => (
          <div className="products-card" key={index}>
            <div className="products-img-wrap">
              <img src={item.img} alt={item.name} />
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
