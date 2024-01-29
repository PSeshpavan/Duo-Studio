function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
init()








function cursor() {
    var crsr = document.querySelector(".cursor")
    var main = document.querySelector(".main")
    document.addEventListener("mousemove", function (dets) {
        crsr.style.left = dets.x + "px",
            crsr.style.top = dets.y + "px"
    })
}
cursor()


function start() {
    let text = new SplitType(".hero");
    var time = gsap.timeline();
    time.to(".char", {
        y: 0,
        duration: 1.5,
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
            scroller: ".main",
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
    }, "p1")
}
page1()


function page2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -125%",
            end: "top -140%",
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


function page3() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -230%",
            end: "top -240%",
            scrub: 3,
        },
    });
    tl3.to(".main", {
        // backgroundColor:"#000",
    }, "p3");
}
page3()

function page4() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -320%",
            end: "top -330%",
            scrub: 3,
        },
    });
    tl4.to(".main", {
        backgroundColor: "#fff",

    }, "p4");

    
}
page4()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});