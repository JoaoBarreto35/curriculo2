function scroollar(targetId) {
    //preferi essa abordagem para não "sujar" a url
    document.querySelector("#" + targetId).scrollIntoView({
        behavior: 'smooth'
    });
}
const cardSites = document.querySelectorAll(".card-site");

Array.from(cardSites).forEach((el)=>{
    el.addEventListener('click',()=>{
        window.location.href=`./works/${el.getAttribute("data-local")}/index.html`;
        //fiz assim para adicionar uma animação heheheheh
    })
})