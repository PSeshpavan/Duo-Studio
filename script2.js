function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()



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
            scroller: "#main",
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
            scroller: "#main",
            // markers:true,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 3,
        },
    });

    tl2.to("#main", {
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