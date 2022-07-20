// Header Section 
let header = document.querySelector(".header")
let burgerIcon = document.querySelector(".header .burger-icon")
let headerLinks = document.querySelector(".header ul")

burgerIcon.addEventListener("click", function () {
    let overly = document.createElement("div")
    overly.className = "header-overly"
    document.body.appendChild(overly)
    overly.appendChild(headerLinks)
    let closeButton = document.createElement("span")
    closeButton.className = "close-button"
    let closeButtonText = document.createTextNode("X")
    closeButton.appendChild(closeButtonText)
    overly.appendChild(closeButton)
    document.addEventListener("click", function (el) {
        if (el.target.className === "header-overly" || el.target.className === "close-button") {
            overly.remove()
        }
    })
})

$(".header ul a").click(function (e) {
    e.preventDefault()
    $("html, body").animate({
        scrollTop: $("." + $(this).data("scroll")).offset().top - $(".header").innerHeight()
    })
    $(".header-overly").remove()
})

// Schedule Section 

let scheduleSpan = document.querySelectorAll(".schedule .head span")
let scheduleUl = document.querySelectorAll(".schedule .schedule-content ul")

scheduleSpan.forEach((span) => {
    span.addEventListener("click", function () {
        scheduleSpan.forEach((span) => {
            span.classList.remove("active")
            this.classList.add("active")
        })
    })
    span.addEventListener("click", function () {
        scheduleUl.forEach((ul) => {
            ul.style.display = "none"
            document.querySelectorAll(span.dataset.sched).forEach((el) => el.style.display = "block")
        })
    })
})

// Venue Section 
let venueImg = document.querySelectorAll(".venue img")

venueImg.forEach((img) => {
    img.addEventListener("click", function () {
        let venueOverly = document.createElement("div")
        venueOverly.className = "venue-overly"
        document.body.appendChild(venueOverly)
        let slider = document.createElement("div")
        slider.className = "slider"
        venueOverly.appendChild(slider)
        for (let i = 0; i < venueImg.length; i++) {
            let boxImg = document.createElement("div")
            boxImg.className = "box-img"
            slider.appendChild(boxImg)
            if (venueImg[i].alt !== "") {
                let imgHead = document.createElement("h4")
                imgHead.className = "img-head"
                boxImg.appendChild(imgHead)
                let headText = document.createTextNode(venueImg[i].alt)
                imgHead.appendChild(headText)
            }
            let imgBox = document.createElement("img")
            imgBox.src = venueImg[i].src
            boxImg.appendChild(imgBox)
        }
        let btn = document.createElement("div")
        btn.className = "btn"
        let prevBtn = document.createElement("button")
        let prevBtnSvg = document.createElement("span")
        prevBtn.appendChild(prevBtnSvg)
        prevBtnSvg.className = "fas fa-angle-left"
        prevBtn.appendChild(prevBtnSvg)
        prevBtn.className = "prev"
        btn.appendChild(prevBtn)
        let nextBtn = document.createElement("button")
        let nextBtnSvg = document.createElement("span")
        nextBtn.appendChild(nextBtnSvg)
        nextBtnSvg.className = "fas fa-angle-right"
        prevBtn.appendChild(prevBtnSvg)
        nextBtn.className = "next"
        btn.appendChild(nextBtn)
        venueOverly.appendChild(btn)
        let venueSlider = document.querySelector(".venue-overly .slider")
        let box = venueSlider.getElementsByClassName("box-img")
        prevBtn.addEventListener("click", function () {
            venueSlider.prepend(box[box.length - 1])
        })
        nextBtn.addEventListener("click", function () {
            venueSlider.append(box[0])
        })
        let closeButton = document.createElement("span")
        closeButton.className = "close-button"
        venueOverly.appendChild(closeButton)
        let closeButtonText = document.createTextNode("X")
        closeButton.appendChild(closeButtonText)
        document.addEventListener("click", function (el) {
            if (el.target.className === "close-button" || el.target.className === "venue-overly") {
                venueOverly.remove()
            }
        })
    })
})

// Gallery Section 

// let gallerySlider = document.querySelector(".gallery .slider")
// let gallerySlide = gallerySlider.getElementsByClassName("slide")

// setInterval(() => {
//     gallerySlider.append(gallerySlide[0])
// }, 1000)

let galleryImg = document.querySelectorAll(".gallery .slider .slide img")

galleryImg.forEach((galley) => {
    galley.addEventListener("click", function () {
        let galleryOverly = document.createElement("div")
        galleryOverly.className = "gallery-overly"
        document.body.appendChild(galleryOverly)
        let gallerySlider = document.createElement("div")
        gallerySlider.className = "gallery-slider"
        galleryOverly.appendChild(gallerySlider)
        for (let i = 0; i < galleryImg.length; i++) {
            let boxImg = document.createElement("div")
            boxImg.className = "box-img"
            if (galleryImg[i].alt !== "") {
                let head = document.createElement("h3")
                head.className = "img-head"
                let headText = document.createTextNode(`${galleryImg[i].alt}-${i + 1}`)
                head.appendChild(headText)
                boxImg.appendChild(head)
            }
            gallerySlider.appendChild(boxImg)
            let img = document.createElement("img")
            img.src = galleryImg[i].src
            boxImg.appendChild(img)
        }
        let btn = document.createElement("div")
        btn.className = "btn"
        let prevBtn = document.createElement("button")
        let prevBtnSvg = document.createElement("span")
        prevBtn.appendChild(prevBtnSvg)
        prevBtnSvg.className = "fas fa-angle-left"
        prevBtn.appendChild(prevBtnSvg)
        prevBtn.className = "prev"
        btn.appendChild(prevBtn)
        let nextBtn = document.createElement("button")
        let nextBtnSvg = document.createElement("span")
        nextBtn.appendChild(nextBtnSvg)
        nextBtnSvg.className = "fas fa-angle-right"
        prevBtn.appendChild(prevBtnSvg)
        nextBtn.className = "next"
        btn.appendChild(nextBtn)
        galleryOverly.appendChild(btn)
        let slider = document.querySelector(".gallery-overly .gallery-slider")
        let box = slider.getElementsByClassName("box-img")
        prevBtn.addEventListener("click", function () {
            slider.prepend(box[box.length - 1])
        })
        nextBtn.addEventListener("click", function () {
            slider.append(box[0])
        })
        let closeButton = document.createElement("span")
        closeButton.className = "close-button"
        let closeButtonText = document.createTextNode("X")
        closeButton.appendChild(closeButtonText)
        galleryOverly.appendChild(closeButton)
        document.addEventListener("click", function (el) {
            if (el.target.className === "close-button" || el.target.className === "gallery-overly") {
                galleryOverly.remove()
            }
        })
    })
})

// FAQ Section 

let panel = document.querySelectorAll(".fAQ .panel")

// panel.forEach((el) => {
//     el.addEventListener("click", function () {
//         panel.forEach((el) => {
//             el.classList.remove("active")
//             this.classList.toggle("active")
//         })
//     })
// })
for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", function () {
        panel[i].classList.toggle("active")
    })
}

// Button To Top 

let buttonToTop = document.querySelector("span.up")

buttonToTop.addEventListener("click", function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})

window.onscroll = function () {
    // Header Section 
    window.scrollY >= 800 ? header.classList.add("active"):header.classList.remove("active")
    // buttonToTop 
    window.scrollY >= 800 ? buttonToTop.classList.add("active"):buttonToTop.classList.remove("active")
}