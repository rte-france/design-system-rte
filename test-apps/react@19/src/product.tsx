const product = {
  id: 1,
  name: "Wireless Headphones",
  description: "Premium noise-cancelling wireless headphones with 30-hour battery life.",
  price: 99.99,
  rating: 4.5,
  reviews: 128,
  image: "https://placehold.co/300x200?text=Headphones",
  inStock: true,
};

export default function Product() {
  return (
    <div
      style={{
        maxWidth: 360,
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: "sans-serif",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img src={product.image} alt={product.name} style={{ width: "100%", display: "block" }} />
      <div style={{ padding: 16 }}>
        <h2 style={{ margin: "0 0 8px" }}>{product.name}</h2>
        <p style={{ color: "#555", margin: "0 0 12px", fontSize: 14 }}>{product.description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ color: "#f5a623", fontWeight: "bold" }}>
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </span>
          <span style={{ color: "#888", fontSize: 13 }}>({product.reviews} reviews)</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 22, fontWeight: "bold", color: "#222" }}>${product.price.toFixed(2)}</span>
          <span style={{ fontSize: 13, color: product.inStock ? "green" : "red" }}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <button
          disabled={!product.inStock}
          style={{
            marginTop: 16,
            width: "100%",
            padding: "10px 0",
            backgroundColor: product.inStock ? "#0070f3" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 16,
            cursor: product.inStock ? "pointer" : "not-allowed",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
