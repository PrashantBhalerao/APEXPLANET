async function loadImages() {
      const container = document.getElementById("image-container");
      container.innerHTML = ""; // clear old images

      for (let i = 1; i <= 9; i++) {
        // Using Picsum Photos API
        const imgUrl = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Random Image";

        const title = document.createElement("h3");
        title.textContent = "Beautiful Image " + i;

        card.appendChild(img);
        card.appendChild(title);
        container.appendChild(card);
      }
    }

    // Load images on first visit
    loadImages();