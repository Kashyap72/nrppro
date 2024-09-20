/*-----------------------------------------------------------------------------------

    Theme Name: Interior - Architecture and Interior Design Template
    Description: Architecture and Interior Design Template
    Author: Chitrakoot Web
    Version: 1.0
        
    ---------------------------------- */

!function(i) {
    "use strict";
    var n = i(window);
    function a() {
        var e, a, o, t, s;
        e = i(".full-screen"),
        a = n.height(),
        e.css("min-height", a),
        o = i("header").height(),
        t = i(".screen-height"),
        s = n.height() - o,
        t.css("height", s)
    }
    i("#preloader").fadeOut("normall", function() {
        i(this).remove()
    }),
    n.on("scroll", function() {
        var e = n.scrollTop()
          , a = i(".navbar-brand img")
          , o = i(".navbar-brand.logodefault img");
        e <= 50 ? (i("header").removeClass("scrollHeader").addClass("fixedHeader"),
        a.attr("src", "img/logos/logo-inner.png")) : (i("header").removeClass("fixedHeader").addClass("scrollHeader"),
        a.attr("src", "img/logos/logo.png")),
        o.attr("src", "img/logos/logo.png")
    }),
    n.on("scroll", function() {
        500 < i(this).scrollTop() ? i(".scroll-to-top").fadeIn(400) : i(".scroll-to-top").fadeOut(400)
    }),
    i(".scroll-to-top").on("click", function(e) {
        e.preventDefault(),
        i("html, body").animate({
            scrollTop: 0
        }, 600)
    }),
    i(".parallax,.bg-img").each(function(e) {
        i(this).attr("data-background") && i(this).css("background-image", "url(" + i(this).data("background") + ")")
    }),
    i(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }),
    i(".popup-social-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }),
    n.resize(function(e) {
        setTimeout(function() {
            a()
        }, 500),
        e.preventDefault()
    }),
    a(),
    i(document).ready(function() {
        i(".project-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 900,
            nav: !1,
            center: !1,
            dots: !0,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin: 15
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }),
        i(".testimonial-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 15,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }),
        i(".single-project-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 1500,
            nav: !1,
            center: !1,
            dots: !0,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }),
        i(".related-project-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 2500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }),
        i(".products-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 900,
            nav: !1,
            center: !1,
            dots: !0,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        }),
        i(".service-leftpanel-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 900,
            nav: !1,
            dots: !1,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }),
        i(".footer-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 20,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        }),
        i(".slider-fade1 .owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            nav: !1,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            margin: 0,
            autoplay: !0,
            smartSpeed: 900,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                768: {
                    nav: !1
                },
                992: {
                    nav: !0
                }
            }
        }),
        i(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            autoplay: !0,
            smartSpeed: 500
        }),
        i(".slider-fade1").on("changed.owl.carousel", function(e) {
            var a = e.item.index - 2;
            i(".number").removeClass("animated fadeInUp"),
            i("h3").removeClass("animated fadeInUp"),
            i("h1").removeClass("animated fadeInUp"),
            i("p").removeClass("animated fadeInUp"),
            i(".butn").removeClass("animated fadeInUp"),
            i(".slider-pic").removeClass("animated fadeInRight"),
            i(".owl-item").not(".cloned").eq(a).find(".number").addClass("animated fadeInUp"),
            i(".owl-item").not(".cloned").eq(a).find("h3").addClass("animated fadeInUp"),
            i(".owl-item").not(".cloned").eq(a).find("h1").addClass("animated fadeInUp"),
            i(".owl-item").not(".cloned").eq(a).find("p").addClass("animated fadeInUp"),
            i(".owl-item").not(".cloned").eq(a).find(".butn").addClass("animated fadeInUp"),
            i(".owl-item").not(".cloned").eq(a).find(".slider-pic").addClass("animated fadeInRight")
        }),
        0 !== i(".horizontaltab").length && i(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function(e) {
                var a = i(this)
                  , o = i("#nested-tabInfo");
                i("span", o).text(a.text()),
                o.show()
            }
        }),
        i(".countup").counterUp({
            delay: 25,
            time: 2e3
        }),
        i(".countdown").countdown({
            date: "01 Jan 2023 00:01:00",
            format: "on"
        })
    }),
    n.on("load", function() {
        i(".gallery").magnificPopup({
            delegate: ".popimg",
            type: "image",
            gallery: {
                enabled: !0
            }
        }),
        i(".grid").masonry({
            itemSelector: ".grid-item"
        });
        var a = i(".gallery").isotope({});
        i(".filtering").on("click", "span", function() {
            var e = i(this).attr("data-filter");
            a.isotope({
                filter: e
            })
        }),
        i(".filtering").on("click", "span", function() {
            i(this).addClass("active").siblings().removeClass("active")
        }),
        n.stellar()
    })
}(jQuery);
