const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      description: "Introducing the Nike Air Force, a timeless and iconic sneaker that combines style and performance. Made with premium leather for durability, these shoes feature Nike's Air cushioning technology for exceptional comfort and impact absorption. With a low-top design, lace-up closure, and versatile style, the Nike Air Force is a must-have addition to any sneaker collection.",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      description: "Air Jordans are iconic basketball sneakers created in collaboration with Michael Jordan. They are known for their performance-enhancing features, such as Nike's Air cushioning system, and their timeless style.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      description: "The Nike Blazer is a timeless and versatile sneaker with a retro-inspired design.",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      description: "The Nike Crater is a sustainable sneaker made with recycled materials, promoting a more eco-friendly approach to footwear.",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      description: "Hippie sneakers are casual and vibrant shoes inspired by the counterculture movement of the 1960s and 1970s, often featuring colorful designs and bohemian-inspired details.",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescription = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 *index}vw)`
        choosenProduct = products[index];
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductDescription.textContent = choosenProduct.description;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
          });
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})
