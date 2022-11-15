// CREATING A PORTFOLIO TABBED COMPONENT

const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
    
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

     if (!p_btn_clicked.classList.contains("p-btn")) return;
    
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    

    p_btn_clicked.classList.add("p-btn-active");

    

    const btn_num = p_btn_clicked.dataset.btnNum;
   
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    
    p_img_elem.forEach((curElem) => curElem.classList.add("portfolio-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove(`portfolio-image-not-active`));
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// how to add media queries in js 

function myFunction(widthSize) {
    if (widthSize.matches) {
        // If media query matches
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);

// Resposive navigation 

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

