function onBurgerClick() {
    var element = document.querySelector("header");
    if (element)
        element.classList.toggle("visible");
}
function updateSlidingPositions() {
    document.querySelectorAll(".slide-container").forEach(function (element) {
        var elementHeight = element.offsetHeight;
        var elementPosition = element.getBoundingClientRect().top - window.innerHeight;
        var percentage = 1 - (-elementPosition) / elementHeight;
        var translate = percentage < 0 ? 0 : 200 * percentage;
        console.log(translate);
        element.querySelector(".slide-right").style.transform = "translateX(-" + translate + "px)";
        element.querySelector(".slide-up").style.transform = "translateY(" + translate + "px)";
    });
}
addEventListener("scroll", function (event) {
    updateSlidingPositions();
});
updateSlidingPositions();
