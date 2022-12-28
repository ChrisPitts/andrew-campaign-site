function onBurgerClick() {
    var element = document.querySelector("header");
    if (element)
        element.classList.toggle("visible");
}
function updateSlidingPositions() {
    document.querySelectorAll(".slide-container").forEach(function (element) {
        var translate;
        if (window.innerWidth <= 1200)
            translate = 0;
        else {
            var elementHeight = element.offsetHeight;
            var elementPosition = element.getBoundingClientRect().top - window.innerHeight;
            var percentage = 1 - (-elementPosition) / elementHeight;
            translate = percentage < 0 ? 0 : 200 * percentage;
        }
        var slideRight = element.querySelector(".slide-right");
        var slideLeft = element.querySelector(".slide-left");
        var slideUp = element.querySelector(".slide-up");
        if (slideRight)
            slideRight.style.transform = "translateX(-" + translate + "px)";
        if (slideLeft)
            slideLeft.style.transform = "translateX(" + translate + "px)";
        if (slideUp)
            slideUp.style.transform = "translateY(" + translate + "px)";
    });
}
addEventListener("scroll", function (event) {
    updateSlidingPositions();
});
addEventListener("resize", function (event) { return updateSlidingPositions(); });
updateSlidingPositions();
