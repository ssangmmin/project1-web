const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// 배열안에 객체생성 
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
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

// 홈페이지 첫 화면은 에어포스
let choosenProduct = products[0];

// console.log(products[0]) -> products안의 첫번째 인덱스 값을 불러옴 (에어포스) 

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// console.log(currentProductImg);
// console.log(currentProductTitle);
// console.log(currentProductPrice);
// console.log(currentProductColors);
// console.log(currentProductSizes);

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // 메뉴 클릭시 wrapper 박스를 이동
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // 메뉴 클릭시 선택한 제품의 정보를 choosenProduct로 제품 삽입
        choosenProduct = products[index]

        // 선택한 제품의 제목, 가격, 사진을 현재제품으로 덮어씌기
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        
        // 선택한 제품 백그라운드 컬러를 변경
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        }); 
    });
});

// 제품 색깔 클릭시 사진 변경
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  // 사이즈 선택 시 사이즈버튼 색 변경
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
    size.style.backgroundColor = "black";
    size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const closeButton = document.querySelector(".close");

// 클릭시 결제창 보이게하기
productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});

// 클릭시 결제창 안보이게하기
closeButton.addEventListener("click",()=>{
    payment.style.display="none";
});