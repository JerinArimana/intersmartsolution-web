/* ---- scroll header addNew class script ---*/
(function () {
  let lastScrollTop = 0; 
  const header = document.getElementById('header');
  const BOTTOM_BUFFER = 10; 

  if (header) {
    document.addEventListener('scroll', function () {
      try {
        let currentScrollTop = window.scrollY; 
        const documentHeight = document.documentElement.scrollHeight; 
        const windowHeight = window.innerHeight; 

        if (currentScrollTop === 0) {
          header.classList.remove('scroll-down', 'scroll-up');
        } else if (currentScrollTop + windowHeight >= documentHeight - BOTTOM_BUFFER) {
          header.classList.remove('scroll-down', 'scroll-up');
        } else if (currentScrollTop > lastScrollTop) {
          header.classList.remove('scroll-up');
          header.classList.add('scroll-down');
        } else {
          header.classList.remove('scroll-down');
          header.classList.add('scroll-up');
        }

        lastScrollTop = currentScrollTop;
      } catch (err) {
        console.error("Scroll script error:", err);
      }
    });
  } else {
    console.warn("Header element not found for scroll script.");
  }
})();


/* ---- generic slider setup function ---*/
function setupSlider(selector, breakpoints) {
  const slider = document.querySelector(selector);
  if (slider) {
    try {
      Object.assign(slider, { breakpoints });
    } catch (err) {
      console.error(`Error initializing ${selector}:`, err);
    }
  } else {
    console.warn(`Slider ${selector} not found.`);
  }
}

/* ---- ourServices_slider script ---*/
setupSlider('#ourServices_slider', {
  0: { slidesPerView: 1.1 },
  440: { slidesPerView: 1.3 },
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3.3 },
  1024: { slidesPerView: 4.2 },
});

/* ---- ourPartners_slider script ---*/
setupSlider('#ourPartners_slider', {
  0: { slidesPerView: 1 },
  440: { slidesPerView: 2 },
  640: { slidesPerView: 3 },
  1024: { slidesPerView: 5 },
  1300: { slidesPerView: 6 },
});

/* ---- testimonials_slider script ---*/
setupSlider('#testimonials_slider', {
  0: { slidesPerView: 1 },
  440: { slidesPerView: 1.6 },
  640: { slidesPerView: 2.3 },
  990: { slidesPerView: 2.3 },
  1024: { slidesPerView: 3 },
  1300: { slidesPerView: 3.8 },
});

/* ---- team_slider script ---*/
setupSlider('#team_slider', {
  0: { slidesPerView: 1 },
  440: { slidesPerView: 1.6 },
  640: { slidesPerView: 2 },
  990: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
  1300: { slidesPerView: 5 },
});

/* ---- initialize all swiper containers safely ---*/
try {
  const swipers = document.querySelectorAll('swiper-container');
  if (swipers.length > 0) {
    swipers.forEach(swiper => {
      if (typeof swiper.initialize === "function") {
        swiper.initialize();
      }
    });
  } else {
    console.warn("No swiper-container elements found.");
  }
} catch (err) {
  console.error("Swiper initialization error:", err);
}

/* ---- Accordion script ---*/
function toggleAccordion(index) {
  try {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (!content || !icon) {
      console.warn(`Accordion element(s) missing for index: ${index}`);
      return;
    }

    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>`;
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>`;

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
      icon.innerHTML = plusSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.innerHTML = minusSVG;
    }
  } catch (err) {
    console.error("Accordion error:", err);
  }
}


(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('ul[aria-label="Main navigation"]');
    if (!nav) {
      console.warn("Navigation element not found.");
      return;
    }

    const links = nav.querySelectorAll("a");
    if (!links.length) {
      console.warn("No navigation links found.");
      return;
    }

    const currentPage = window.location.pathname.split("/").pop(); // e.g. "about.html"
    const ACTIVE_CLASS = "nav-active"; // ✅ avoids hardcoding class name everywhere
    const ROOT_PAGE = "index.html"; // ✅ avoids magic strings

    function clearActive() {
      links.forEach(link => {
        link.classList.remove(ACTIVE_CLASS);
        link.removeAttribute("aria-current");
      });
    }

    // ✅ safer loop with null-check
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;

      if (href === currentPage || (href === ROOT_PAGE && currentPage === "")) {
        clearActive();
        link.classList.add(ACTIVE_CLASS);
        link.setAttribute("aria-current", "page");
      }

      // Attach click listener
      const clickHandler = (e) => {
        if (href === "#") e.preventDefault();
        clearActive();
        link.classList.add(ACTIVE_CLASS);
        link.setAttribute("aria-current", "page");
      };

      link.addEventListener("click", clickHandler);

      // ✅ Cleanup: remove event listener if needed later
      window.addEventListener("beforeunload", () => {
        link.removeEventListener("click", clickHandler);
      });
    });
  });
})();
