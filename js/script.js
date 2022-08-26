window.addEventListener('DOMContentLoaded', function(){
  
  //плавно по якорям
  let linkNav = document.querySelectorAll('[href^="#"]'), 
  V = .4;  
  for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) { 
      e.preventDefault(); 
      var w = window.pageYOffset,  
          hash = this.href.replace(/[^#]*(.*)/, '$1');  
          t = document.querySelector(hash).getBoundingClientRect().top, 
          start = null;
      requestAnimationFrame(step);  
      function step(time) {
          if (start === null) start = time;
          var progress = time - start,
              r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
          window.scrollTo(0,r);
          if (r != w + t) {
              requestAnimationFrame(step)
          } else {
              location.hash = hash  
          }
      }
      }, false);
  }
    
  /*slider*/
  const swiper = new Swiper('.main-slider__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: '.swiper-bullet-pagination',
      type: 'bullets',
      clickable: true
    }
  })

let gallerySlider = new Swiper(".gallery-right__content", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".gallery-pagination__right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-btn__next",
    prevEl: ".gallery-btn__prev"
  },

breakpoints: {
  320: {
    slidesPerView: 1,
    grid: {
      rows: 1
    },
    spaceBetween: 0
  },
  576: {
    slidesPerView: 2,
    grid: {
      rows: 1
    },
    spaceBetween: 30
  },

  1200: {
    slidesPerView: 3,
    grid: {
      rows: 1
    },
    spaceBetween: 50
  }
},

a11y: {
  prevSlideMessage: 'Предыдущий',
  nextSlideMessage: 'Следующий',
}
});



 /*burger menu*/
  document.querySelector(".btn-open").addEventListener("click", function() {
    document.querySelector(".main-nav").classList.add("active");
  })
  document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".main-nav").classList.remove("active");
  })


  /*dropdown*/
  document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
  })
    
  const btns = document.querySelectorAll(".menu__btn");
  const dropdowns = document.querySelectorAll(".dropdown");
  const activeClassdropdowns = "dropdown__active";
  const activeClassbtns = "btn__active";
  
  btns.forEach(item => {
    item.addEventListener("click", function() {
      let DropThis = this.parentElement.querySelector(".dropdown");
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  })  

  /*search*/
  document.querySelector(".form-btn__open").addEventListener("click", function() {
    document.querySelector(".form-container").classList.add("open");
  })
  document.querySelector(".close-form-icon").addEventListener("click", function() {
    document.querySelector(".form-container").classList.remove("open");
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".form");
    if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
      form.querySelector("input").value = "";
      document.querySelector(".form-btn__open").classList.remove("active")
    }
  }) 
  
    // select filter form
    const element = document.querySelector('#gallery__select');
    const choices = new Choices(element, {              
        searchEnabled: false,
        itemSelectText: '',
    });

});
