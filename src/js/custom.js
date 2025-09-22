
console.log("Custom JS loaded");

document.addEventListener('scroll', function() {
  const target = document.getElementById('header');
  
  // Check if at the top of the page
  if (window.scrollY === 0) {
    target.classList.remove('scroll-down');
    target.classList.add('scroll-up');
  }
});

document.addEventListener('wheel', function(event) {
  const target = document.getElementById('header');

  // Scroll down
  if (event.deltaY > 0) {
    target.classList.remove('scroll-up');
    target.classList.add('scroll-down');
  }
});

const ourServices_slider = document.querySelector('#ourServices_slider');
    if (ourServices_slider) {
      Object.assign(ourServices_slider, {
         breakpoints: {
        0: {
          slidesPerView: 1.1,
        },
        440: {
          slidesPerView: 1.3,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3.3,
        },
        1024: {
          slidesPerView: 4.2,
        },
      },
      });
    }
// Explore Our Services Swiper
 

    const ourPartners_slider = document.querySelector('#ourPartners_slider');
    if (ourPartners_slider) {
      Object.assign(ourPartners_slider, {
        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
          440: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,

          },
          1300: {
            slidesPerView: 6,

          }
        }
      });
    }
const testimonials_slider = document.querySelector('#testimonials_slider');
    if (testimonials_slider) {
      Object.assign(testimonials_slider, {
        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
          440: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 2.3,
          },
           990: {
            slidesPerView: 2.3,
          },
          1024: {
            slidesPerView: 3,

          },
          1300: {
            slidesPerView: 3.8,

          }
        }
      });
    }
const team_slider = document.querySelector('#team_slider');
    if (team_slider) {
      Object.assign(team_slider, {
        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
          440: {
            slidesPerView: 1.6,
          },
          640: {
            slidesPerView: 2,
          },
           990: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,

          },
          1300: {
            slidesPerView: 5,

          }
        }
      });
    }
    const swipers = document.querySelectorAll('swiper-container');
    swipers.forEach(swiper => {
      swiper.initialize();
    });