var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")
});

