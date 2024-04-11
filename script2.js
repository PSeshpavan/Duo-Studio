var main = document.querySelector(".main")


// gsap.registerPlugin(ScrollTrigger);
// function init() {

//     //     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     //     const locoScroll = new LocomotiveScroll({
//     //         el: document.querySelector(".main"),
//     //         smooth: true
//     //     });

//     //     locoScroll.on("scroll", ScrollTrigger.update);

//     //     ScrollTrigger.scrollerProxy(".main", {
//     //         scrollTop(value) {
//     //             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     //         }, 
//     //         getBoundingClientRect() {
//     //             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     //         },
//     //         pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//     //     });

//     //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     //     ScrollTrigger.refresh();



//     // const scroll = new LocomotiveScroll({
//     //     el: document.querySelector('.main'),
//     //     smooth: true
//     // });
//     // Initialize ScrollTrigger
//     // gsap.registerPlugin(ScrollTrigger);

//     // Initialize Locomotive scroll
//     const locomotive = new LocomotiveScroll({
//         el: document.querySelector(".main"),
//         smooth: true,
//         multiplier: 1.0,
//         getDirection: true,
//     });

//     // Update ScrollTrigger every time the user scrolls using Locomotive
//     locomotive.on("scroll", () => {
//         ScrollTrigger.update();
//     });

//     // Initialize ScrollTrigger with the Locomotive scroll container
//     ScrollTrigger.defaults({
//         scroller: ".main",
//     });

//     // Initialize your animations here
//     // ...

// }

// init()








function cursor() {
    var crsr = document.querySelector(".cursor")

    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px",
            crsr.style.top = dets.y + "px"
    });
    document.addEventListener("scroll", function (dets) {
        crsr.style.left = dets.x + "px",
            crsr.style.top = dets.y + "px"
    });
}
cursor()


function start() {
    let text = new SplitType(".hero");
    var time = gsap.timeline();
    time.from("#page1 h1,#page1 h2", {
        opacity: 0,
    });
    time.to(".char", {
        y: 0,
        duration: 1.5,
        opacity: 1,
        // ease:"power2.out",
    }, "start");
    time.to("#page1 h1,#page1 h2", {
        stagger: 1,
    });
    time.from("#page1 .video", {
        y: 200,
        opacity: 0,
        delay: 1.2,
        // ease:"linear",
    }, "start");
}
start()


function page1() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            // scroller: ".main",
            // markers:true,
            start: "top 27%",
            end: "top 5%",
            scrub: 3,
        }
    });

    tl.to("#page1 h1", {
        x: -170,
    }, "p1")

    tl.to("#page1 h2", {
        x: 70,
    }, "p1")

    tl.to("#page1 .video", {
        width: "97%",
        x: "-19%"
    }, "p1")
}
page1()


function page2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            // scroller: ".main",
            // markers:true,
            start: "top 30%",
            end: "bottom 70%",
            scrub: 3,
        },
    });

    tl2.to(".main", {
        backgroundColor: "#fff",
    }, "p2");

    tl2.from("#page2 h1", {
        y: 100,
        opacity: 0,
    }, "p2");

    tl2.from("#page2 h3", {
        x: -1000,
        opacity: 0,
    }, "p2");

    tl2.from("#page2 p,#page2 button", {
        x: 1000,
        opacity: 0,
    }, "p2");
}
page2()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});