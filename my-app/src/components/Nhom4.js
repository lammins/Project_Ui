import React from "react";

const Header = () => {
  return (
    <header style={{
      display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px",
      background: "green", color: "white"
    }}>
      <h1 style={{ margin: 0 }}>Memory Store</h1>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
      <input 
        type="text" 
        placeholder="Tìm kiếm..." 
        style={{ 
          padding: "10px 40px 10px 15px", width: "400px", borderRadius: "5px", 
          border: "1px solid #ddd", outline: "none" 
        }}
      />
      <img 
        src="../Photo/search.png" 
        alt="Search" 
        style={{ position: "absolute", right: "10px", width: "20px", height: "20px", cursor: "pointer" }}
      />
    </div>
      <div>
        <button style={{ marginRight: "10px", background: "#fff", padding: "5px 10px", borderRadius: "5px" }}>Đăng nhập</button>
        <button style={{ background: "orange", padding: "5px 10px", borderRadius: "5px" }}>🛒 Giỏ hàng</button>
      </div>
    </header>
  );
};

const FilterBar = () => {
  const laptopSeries = [
    { img: "../Photo/dell.png" },
    { img: "../Photo/hp.png" },
    { img: "../Photo/msi.png" },
    { img: "../Photo/asus.png" },
    { img: "../Photo/lenovo.png" },
    { img: "../Photo/acer.png" },
    { img: "../Photo/macbook.png" },

    
  ];

  const filters = [
    "Giá", "CPU", "RAM", "Card đồ họa", "Ổ cứng",
    "Màn hình", "Tấm nền", "Tần số quét", "Độ phân giải", "Nhu cầu", "Tính năng"
  ];

  return (
    <div style={filterContainer}>
      {/* Dòng 1: Laptop Series */}
      <div style={seriesContainer}>
        {laptopSeries.map((item, index) => (
          <div key={index} style={seriesItem}>
            <img src={`/assets/${item.img}`} alt="Laptop Series" style={seriesImage} />
          </div>
        ))}
      </div>

      {/* Dòng 2: Bộ lọc */}
      <div style={filterButtonContainer}>
        {filters.map((filter, index) => (
          <button key={index} style={filterButton}>{filter}</button>
        ))}
      </div>
    </div>
  );
};

// 🔹 **CSS Styles**
const filterContainer = { padding: "15px", maxWidth: "1100px", margin: "auto" };

const seriesContainer = { display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" };

const seriesItem = { 
  display: "flex", alignItems: "center", justifyContent: "center",
  background: "#F5F5F5", padding: "10px", borderRadius: "10px", cursor: "pointer"
};

const seriesImage = { width: "120px", height: "50px", objectFit: "contain" };

const filterButtonContainer = { display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginTop: "15px" };

const filterButton = { 
  padding: "8px 12px", borderRadius: "20px", border: "1px solid #ddd", 
  background: "#F5F5F5", cursor: "pointer", fontSize: "14px"
};


const products = [
  {
    id: 1,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-asus-vivobook-14-x1404za-nk386w-00.jpg?v=1738947938400",
    brand: "Asus",
    name: "Laptop Asus Vivobook 14 X1404ZA-NK386W",
    price: "9.490.000 ₫",
    description: "Intel Core i3-1215U, UHD Graphics, RAM 8GB DDR4, SSD 512GB, 14 Inch IPS FHD 60Hz, Win 11",
  },
  {
    id: 2,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-asus-vivobook-14-x1404za-nk389w-00.jpg?v=1718880225653",
    brand: "Asus",
    name: "Laptop Asus Vivobook 14 X1404ZA-NK389W",
    price: "15.790.000 ₫",
    description: "Intel Core i7-1255U, Iris Xe Graphics, RAM 16GB DDR4, SSD 512GB, 14 Inch IPS FHD 60Hz, Win 11",
  },
  {
    id: 3,
    image: "https://bizweb.dktcdn.net/100/329/122/products/laptop-asus-vivobook-15-x1504va-nj069w.jpg?v=1734109481490",
    brand: "Asus",
    name: "Laptop Asus Vivobook 15 X1504VA-NJ069W",
    price: "10.290.000 ₫",
    description: "Intel Core i3-1315U, UHD Graphics, Ram 8GB DDR4, SSD 512GB, 15.6 Inch IPS FHD 60Hz, Win 11",
  },
  {
    id: 4,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-asus-expertbook-b1-b1402cva-nk0104w-01.jpg?v=1726031495900",
    brand: "Asus",
    name: "Laptop ASUS ExpertBook B1 B1402CVA-NK0104W",
    price: "10.690.000 ₫",
    description: "i3-1315U, UHD Graphics, RAM 8GB DDR4, SSD 256GB, 14 Inch TN FHD 60Hz, Win 11",
  },
  {
    id: 5,
    image: "https://bizweb.dktcdn.net/thumb/grande/100/329/122/products/laptop-gaming-asus-tuf-gaming-a15-fa506ncr-hn047w-10.jpg?v=1731580048390",
    brand: "Dell",
    name: "Laptop Gaming ASUS TUF Gaming A15 ",
    price: "18.990.000 ₫",
    description: "Ryzen 7 7435HS, RTX 3050 4GB, RAM 16GB DDR5, SSD 512GB, 15.6 Inch IPS FHD 144Hz, Win 11",
  },
];

export default function Nhom4() {
  return (
    <div>
       <Header />
       <h3 style={{ textAlign: "left", marginLeft: "30px", marginBottom: "10px", fontWeight: "normal" }}>Trang chủ</h3>
       <h2 style={{ textAlign: "left", marginLeft: "30px", marginBottom: "-10px" }}>Bộ lọc</h2>
      <FilterBar /> {/* Thêm thanh bộ lọc */}
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginTop: "-10px" }}>Laptop Asus</h2>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                width: "220px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                textAlign: "center",
                background: "#fff",
                position: "relative",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                  transition: "transform 0.3s ease"
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "14px", margin: "5px 0" }}>{product.name}</h3>
                <p style={{ fontSize: "12px", color: "#555" }}>{product.description}</p>
                <h4 style={{ color: "green", margin: "10px 0" }}>{product.price}</h4>
                <button
                  style={{
                    background: "orange",
                    color: "#fff",
                    border: "none",
                    padding: "10px",
                    width: "100%",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
