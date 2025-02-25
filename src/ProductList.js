import React from "react";

const products = [
  {
    id: 1,
    name: "COLOUR BLASTERS",
    image: "photo1.jpg",
    price: 1800,
    oldPrice: 2000,
    rating: 4.5,
    reviews: 8,
    sale: true,
  },
  {
    id: 2,
    name: "FRULI FRUIT GULAL 250 GM - (5 X 50 GM)",
    image: "photo2.jpg",
    price: 200,
    rating: 4.0,
    reviews: 2,
    sale: false,
  },
  {
    id: 3,
    name: "NATURA BLUE & RED 200 GM - (2 X 100GM)",
    image: "photo3.jpg",
    price: 325,
    rating: 4.2,
    reviews: 4,
    sale: false,
  },
  {
    id: 4,
    name: "NATURA GREEN & YELLOW 200 GM - (2 X 100GM)",
    image: "photo4.jpg",
    price: 325,
    rating: 4.2,
    reviews: 2,
    sale: false,
  },
  {
    id: 5,
    name: "COLOUR BLASTERS",
    image: "photo5.jpg",
    price: 1800,
    oldPrice: 2000,
    rating: 4.5,
    reviews: 8,
    sale: true,
  },
  {
    id: 6,
    name: "COLOUR BLASTERS",
    image: "photo6.jpg",
    price: 1800,
    oldPrice: 2000,
    rating: 4.5,
    reviews: 8,
    sale: true,
  },
  {
    id: 7,
    name: "COLOUR BLASTERS",
    image: "photo4.jpg",
    price: 1800,
    oldPrice: 2000,
    rating: 4.5,
    reviews: 8,
    sale: true,
  },

];

const ProductPage = () => {
  return (
    <div className="product-container">
      <h2>7 PRODUCTS</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.sale && <span className="sale-badge">ON SALE</span>}
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <div className="product-price">
                {product.sale && (
                  <span className="old-price">RS. {product.oldPrice}.00</span>
                )}
                <span className="new-price">RS. {product.price}.00</span>
              </div>
              <div className="rating">
                {"★".repeat(Math.floor(product.rating))} ({product.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
