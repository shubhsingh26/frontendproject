
let products = {
    data: [
      {
        productName: "Premium Watch",
        category: "Watch",
        price: "70",
        image:
        "https://cdna.lystit.com/400/500/tr/photos/amazon-prime/3560bbb0/diesel-GoldBlack-Dial-57mm-Mr-Daddy-20-Quartz-Stainless-Steel-Chronograph-Watch.jpeg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Skirt",
        price: "49",
        image:
        "https://hellosouthkorea.com/cdn/shop/products/Pleated-Skirt-Women-High-Waist-Sexy-Mini-Skirts-Tennis-Skirt-Girl-Dance-Skirt-Kawaii-Casual-Korean_jpg_1200x.webp?v=1688764271 ",
           },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image:
        "https://ae01.alicdn.com/kf/S40a6f55e54ba4b4f8e7dc7f74a7296acD/Super-Hot-Asian-Girls-Kroean-Top-thin-Pink-Retro-V-neck-Ruffles-Lace-Eleganta-Tees-Sexy.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image:
          "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image:
          "https://images.unsplash.com/photo-1663006770163-528e18351299?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Skirt",
        price: "89",
        image:
          "https://plus.unsplash.com/premium_photo-1671117131083-33d33ae6cbc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Skirt",
        price: "49",
        image:
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        productName: "Black T-Shirt",
        category: "Topwear",
        price: "36",
        image:
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      },
      {
        productName: "CA Short Skirt",
        category: "Skirt",
        price: "49",
        image:
          "https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        productName: "Classic Smart Watch",
        category: "Watch",
        price: "70",
        image:
          "https://plus.unsplash.com/premium_photo-1681822419697-50bf30a8c64e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        productName: "Knitted Short Top",
        category: "Topwear",
        price: "29",
        image:
          "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image:
          "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
      },
    ],
  };
  
  for (let i of products.data) {
    
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
  
    
    let container = document.createElement("div");
    container.classList.add("container");
  
    card.innerHTML = `
      <div class="image-container"><img src="${i.image}"></div>
      <div><i class='bx bx-heart' id="heart-icon" ></i></div>
      <div class="container">
           <div>
              <h5 class="product-name">${i.productName.toUpperCase()}</h5>
              <h6>$ ${i.price}</h6>
          </div>
          <button class="cart-btn">Add to Cart</button>
      </div>
      `;
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  

  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
  
    
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  document.getElementById("search").addEventListener("click", () => {
  
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    elements.forEach((element, index) => {
     
  
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
 
  window.onload = () => {
    filterProduct("all");
  };
  
 
  
  let heartBtns = document.querySelectorAll("#heart-icon");
  heartBtns.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("bxs-heart");
    });
  });