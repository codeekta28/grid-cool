console.log("This is portfolio js");
let items=document.querySelectorAll(".portfolio-item-wrapper");
// console.log(items);
items.forEach((portfolioItem)=>{
portfolioItem.addEventListener('mouseover',(e)=>{
    console.log(portfolioItem.children[0].classList.add("image-darken"));
});
portfolioItem.addEventListener('mouseout',()=>{
    portfolioItem.children[0].classList.remove("image-darken");
});
});