function getScrollPercent() {
    let r = document.body.scrollHeight - window.innerHeight,
        l = window.scrollY;
    return (l / r) * 100;
}
const scrollProgressBar = document.getElementById("scroll-progress-bar");
document.onscroll = function () {
    var r = Math.round(getScrollPercent());
    (scrollProgressBar.style.width = r + "%"), (scrollProgressBar.ariaValueNow = r);
};
