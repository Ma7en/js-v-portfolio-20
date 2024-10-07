

/* 
================================================
================================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

/* end scroll to top */

/* 
================================================
================================================
*/

/* start toggler  */

let navTogglerBtn = document.querySelector(".nav-toggler");
let aside = document.querySelector(".aside");
let allSection = document.querySelectorAll(".section");
let totalSection = allSection.length;
let navAll = document.querySelectorAll(".nav li");
let mainContent = document.querySelector(".main-content");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn) 


function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i =0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

for(let n = 0; n < navAll.length; n++) {
    console.log(navAll[n]);
    navAll[n].addEventListener("click", () => {
        aside.classList.remove("open");
        navTogglerBtn.classList.toggle("open");
    });
}

window.addEventListener("scroll", AsReNaRe);

mainContent.addEventListener("click", AsReNaRe);

function AsReNaRe() {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
}


/* end toggler  */

/*
==============================================
==============================================
*/

/* ====== start date year ======*/

window.addEventListener("load", () => {
    let dateYear = document.querySelector(".dateYear");
    let newDate = new Date();
    dateYear.innerHTML = newDate.getFullYear();
});


/* ====== end date year ======*/

/* 
================================================
================================================
*/

/* start scroll active */

let sections = document.querySelectorAll(".main-content section[id]");

function scrollActive() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {

        let sectionHeight = current.offsetHeight,
            sectionTop =current.offsetTop - 100 , // -58
            sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.aside .nav a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.aside .nav a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

window.addEventListener('scroll', scrollActive);

/* end scroll active */

/* 
================================================
================================================
*/





















