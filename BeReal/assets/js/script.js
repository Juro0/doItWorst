// CAROUSEL

let getSrc = (n) => {
    return("assets/img/screen/screen-" + n +"-en.png")
}

let n = 1
let carousel = () => {
    const title = document.getElementsByClassName("screen-title")[0]
    const subtitle = document.getElementsByClassName("screen-subtitle")[0]
    const img = document.getElementsByClassName("screen-img")[0]

    const titles = ["one notification", "two minutes to share", "all your friends", "comments and react", "keep your friends", "go back in time"]
    const subtitles = ["sent to everyone", "what are you doing", "post at the same time", "with realmojis", "all day with you", "with your memories"]

    title.textContent = titles[n]
    subtitle.textContent = subtitles[n]
    img.src = getSrc(n + 1)
    
    if(n == 5) {
        n = 0
    }
    else {
        n++
    }
    console.log("x")

}

// SCROLL ANIMATION 1

let revealed = false

// first declare of interval | do not delete it
let inter = setInterval(carousel, 2000)
clearInterval(inter)

let revealCarousel = () => {
    var reveals = document.querySelectorAll(".reveal-c");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            if(!revealed) {
                inter = setInterval(carousel, 2000)
                revealed = true
            }
        } else {
            reveals[i].classList.remove("active");
            if(revealed) {
                clearInterval(inter)
                revealed = false
            }
        }
    }
}

// SCROLL ANIMATION 2
let reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealCarousel);
window.addEventListener("scroll", reveal);
revealCarousel()
reveal()
