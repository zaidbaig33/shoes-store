const wrapper = document.querySelector(".wrapper");
const menuItem = document.querySelectorAll(".pointer");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./images/airforce1.png",
        },
        {
          code: "darkblue",
          img: "./images/airforce2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan1.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer1.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./images/creater1.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./images/hippie1.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".product-title");
  const currentProductPrice = document.querySelector(".product-price");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item,index) =>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * (index-3)}vw)` ;

        chosenProduct = products[index-3];

        currentProductImg.src = chosenProduct.colors[0].img ;
        currentProductTitle.innerHTML = chosenProduct.title;
        currentProductPrice.innerHTML = chosenProduct.price;

        currentProductColors.forEach((item,index)=>{
            item.style.backgroundColor = chosenProduct.colors[index].code;
        })

    })
})

currentProductColors.forEach((item,index)=>{
    item.addEventListener("click",()=>{
     currentProductImg.src = chosenProduct.colors[index].img ;
    })
})


currentProductSizes.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        currentProductSizes.forEach((item,index)=>{
            item.style.backgroundColor = "white";
            item.style.color= "black";
        });
        item.style.backgroundColor = "black";
        item.style.color = "white";
        console.log("i am not working")
    })
})