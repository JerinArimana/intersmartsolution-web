
console.log("Custom JS loaded");


/* ---- scroll header addNew class script ---*/
let lastScrollTop = 0; // Variable to store the last scroll position
const header = document.getElementById('header');

document.addEventListener('scroll', function() {
  let currentScrollTop = window.scrollY; // Current scroll position
  const documentHeight = document.documentElement.scrollHeight; // Total document height
  const windowHeight = window.innerHeight; // Viewport height

  // Check if at the top of the page
  if (currentScrollTop === 0) {
    header.classList.remove('scroll-down');
    header.classList.remove('scroll-up');
  }
  // Check if at the bottom of the page
  else if (currentScrollTop + windowHeight >= documentHeight - 10) { // Small buffer for precision
    header.classList.remove('scroll-down');
    header.classList.remove('scroll-up');
  }
  // Scrolling down
  else if (currentScrollTop > lastScrollTop) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  }
  // Scrolling up
  else {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }

  lastScrollTop = currentScrollTop; // Update the last scroll position
});


 /* ---- ourServices_slider script ---*/
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

 /* ---- ourPartners_slider script ---*/

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

     /* ---- testimonials_slider script ---*/
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

    /* ---- team_slider script ---*/
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


    /* ---- Accordion script ---*/

    function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
 
    // SVG for Minus icon
    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;
 
    // SVG for Plus icon
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;
 
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
  }