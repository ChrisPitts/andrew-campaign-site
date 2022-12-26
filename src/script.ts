function onBurgerClick() {
    var element = document.querySelector("header");
    if (element)
        element.classList.toggle("visible");
}

function updateSlidingPositions(){


    document.querySelectorAll(".slide-container").forEach((element)=>{
        let elementHeight = (element as HTMLElement).offsetHeight;
        let elementPosition = element.getBoundingClientRect().top - window.innerHeight;
        let percentage = 1 - (-elementPosition) / elementHeight;
        let translate = percentage < 0 ? 0 : 200 * percentage
        
        console.log(translate);
        (element.querySelector(".slide-right") as HTMLElement).style.transform = "translateX(-" + translate + "px)"; 
        (element.querySelector(".slide-up") as HTMLElement).style.transform = "translateY(" + translate + "px)"; 
    })

}

addEventListener("scroll", (event)=>{
    updateSlidingPositions();
})

updateSlidingPositions();