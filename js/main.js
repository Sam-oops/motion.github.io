//Carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
      center: true,
      loop: true,
      margin: 30,
    responsive : {
    // breakpoint from 0 up
    100 : {
        items: 1,
        margin: 15,
    },
    320 : {
        items: 1,
        margin: 15,
    },
    460 : {
        items: 2,
        margin: 15,
    },
    650 : {
        items: 2,
    },
    850 : {
        items : 2,
    },
    1000 : {
        margin : 20,
        items : 2,
    },
    1200 : {
        margin : 30,
        items : 3,
    },
}
  });
$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(param) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4; 

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 200);
    
}