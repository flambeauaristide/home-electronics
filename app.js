const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const product = [
    {
        id: 1,
        title: "Smart TV",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./images/pexels-vecislavas-popa-1571458.jpg.jpg"
            },
            {
                code: "darkblue",
                img: "./images/pexels-max-vakhtbovych-7045715.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "Smart Fridge",
        price: 80,
        colors: [
            {
                code: "black",
                img: "./images/pexels-airam-datoon-9637718.jpg"
            },
            {
                code: "darkblue",
                img: "./images/pexels-portrenk-10525966.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Smart Radio",
        price: 20,
        colors: [
            {
                code: "black",
                img: "./images/pexels-skylar-kang-6368906.jpg"
            },
            {
                code: "darkblue",
                img: "./images/pexels-erik-mclean-9272383.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Cooker",
        price: 70,
        colors: [
            {
                code: "black",
                img: "./images/pexels-timur-saglambilek-66639.jpg"
            },
            {
                code: "darkblue",
                img: "./images/cooker2.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Blender",
        price: 50,
        colors: [
            {
                code: "black",
                img: "./images/pexels-chait-goli-1797103.jpg"
            },
            {
                code: "darkblue",
                img: "./images/blender2.jpg"
            }
        ]
    },
    {
        id: 6,
        title: "Mixer",
        price: 20,
        colors: [
            {
                code: "black",
                img: "./images/pexels-david-yohanes-1450903.jpg"
            },
            {
                code: "darkblue",
                img: "./images/mixer2.jpg"
            }
        ]
    }
];

let chosenProduct = product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductInches = document.querySelectorAll(".inch");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = product[index];

        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductInches.forEach((inch, index) => {
    inch.addEventListener("click", () => {
        currentProductInches.forEach(inch => {
            inch.style.backgroundColor = "white"
            inch.style.color = "black"
    });
        inch.style.backgroundColor = "black"
        inch.style.color = "white"
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})