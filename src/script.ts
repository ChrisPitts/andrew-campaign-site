function onBurgerClick() {
    var element = document.querySelector("header");
    if (element)
        element.classList.toggle("visible");
}

function updateSlidingPositions(){

    
    document.querySelectorAll(".slide-container").forEach((element)=>{
        
        let translate:number;
        if(window.innerWidth <= 1200)
            translate = 0;
        else{
            let elementHeight = (element as HTMLElement).offsetHeight;
            let elementPosition = element.getBoundingClientRect().top - window.innerHeight;
            let percentage = 1 - (-elementPosition) / elementHeight;
            translate = percentage < 0 ? 0 : 200 * percentage
        }
        
        let slideRight = element.querySelector(".slide-right") as HTMLElement;
        let slideLeft = element.querySelector(".slide-left") as HTMLElement;
        let slideUp = element.querySelector(".slide-up") as HTMLElement
        if(slideRight)
            slideRight.style.transform = "translateX(-" + translate + "px)";
        if(slideLeft)
            slideLeft.style.transform = "translateX(" + translate + "px)";
        if(slideUp)
            slideUp.style.transform = "translateY(" + translate + "px)"; 
    })

}

addEventListener("scroll", (event)=>{
    updateSlidingPositions();
})

addEventListener("resize", (event)=>updateSlidingPositions())

updateSlidingPositions();