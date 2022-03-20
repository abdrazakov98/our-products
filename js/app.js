function cards() {
    fetch("db.json")
      .then((res) => {
        return res.json();
      })
      .then((product) => {
        product.forEach((e) => {
          const card = document.querySelector(".card");
          const ul = document.createElement("ul");
          const li = document.createElement("li");
          const img = document.createElement("img");
          const hr = document.createElement("hr");
          const p = document.createElement("h3");
          const price = document.createElement("h4");
          const desc = document.createElement("h5");
  
          img.getAttribute("src");
          img.src = e.img;
          p.textContent = e.title;
          price.textContent = e.price;
          desc.textContent = e.desc;
          card.append(ul);
          ul.append(li);
          li.append(img);
          li.append(p);
          li.append(price);
          li.append(hr);
          li.append(desc);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  cards();
  