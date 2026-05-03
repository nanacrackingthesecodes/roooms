import "./Products.css";

const productImages = [
  "/product1.jpg",
  "/product2.jpg",
  "/product3.jpg",
  "/product4.jpg",
];

const nameText = "НАЗВА ТОВАРУ";
const descText = "Опис товару опис товару опис товару";
const priceText = "001$";

function Products() {
  return (
    <section className="products">
      <h2 className="products-title">ТОВАРИ</h2>

      <div className="products-grid">
        {productImages.map((img, index) => (
          <div className="products-card" key={index}>
            <div className="products-img-wrap">
              <img src={img} alt={nameText} />
            </div>

            <p className="products-name">{nameText}</p>
            <p className="products-desc">{descText}</p>
            <p className="products-price">{priceText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
