const products = [
  { 
    id: 1, 
    name: "Smartphone", 
    category: "electronics", 
    price: 15000, 
    rating: 4.5, 
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg" 
  },
  { 
    id: 2, 
    name: "Laptop", 
    category: "electronics", 
    price: 55000, 
    rating: 4.7, 
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg" 
  },
  { 
    id: 3, 
    name: "T-Shirt", 
    category: "clothing", 
    price: 700, 
    rating: 4.2, 
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg" 
  },
  { 
    id: 4, 
    name: "Jeans", 
    category: "clothing", 
    price: 1200, 
    rating: 4.0, 
    image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" 
  },
  { 
    id: 5, 
    name: "Novel Book", 
    category: "books", 
    price: 400, 
    rating: 4.8, 
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg" 
  },
  { 
    id: 6, 
    name: "Headphones", 
    category: "electronics", 
    price: 2000, 
    rating: 4.3, 
    image: "https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg" 
  }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const sortOptions = document.getElementById("sortOptions");
const filterBtn = document.getElementById("filterBtn");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }
  filteredProducts.forEach(p => {
    const productCard = `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <p class="rating">⭐ ${p.rating}</p>
        <p>Category: ${p.category}</p>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // Filter by price
  const min = minPrice.value ? parseInt(minPrice.value) : 0;
  const max = maxPrice.value ? parseInt(maxPrice.value) : Infinity;
  filtered = filtered.filter(p => p.price >= min && p.price <= max);

  // Sort
  const sortValue = sortOptions.value;
  if (sortValue === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "ratingHighLow") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Initial display
displayProducts(products);

// Event listeners
filterBtn.addEventListener("click", filterAndSortProducts);
sortOptions.addEventListener("change", filterAndSortProducts);
categoryFilter.addEventListener("change", filterAndSortProducts);
