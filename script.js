console.log("Portfolio Loaded");

// Efek muncul saat scroll (bisa dikembangkan nanti)
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#ffffff";

    }else{

        header.style.background = "#ffffff";

    }

});
