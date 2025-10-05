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
  440: { slidesPerView: 2.5},
  768: { slidesPerView: 3 },

  992: { slidesPerView: 3.5},
  1024: { slidesPerView: 3.5 },
  1300: { slidesPerView: 4.2 },
});

/* ---- ourPartners_slider script ---*/
setupSlider('#ourPartners_slider', {
  0: {
     slidesPerView: 2,
      spaceBetween:20
     },
  440: { slidesPerView: 3, spaceBetween:30 },
  640: { slidesPerView: 4 },
  1024: { slidesPerView: 6 },
  1300: { slidesPerView: 6 },
});

/* ---- testimonials_slider script ---*/
setupSlider('#testimonials_slider', {
  0: { slidesPerView: 1 },
  440: { slidesPerView: 1.6 },
  640: { slidesPerView: 2.3 },
  990: { slidesPerView: 2.3 },
  1024: { slidesPerView: 3.5 },
  1300: { slidesPerView: 3.8 },
});

/* ---- team_slider script ---*/
setupSlider('#team_slider', {
  0: { slidesPerView: 1
   },
  440: { slidesPerView: 2 },
  640: { slidesPerView: 3 },
  990: { slidesPerView: 4 },
  1024: { slidesPerView: 4 },
  1300: { slidesPerView: 5 },
});


/* ---- team_slider script ---*/
setupSlider('#location_slider', {
  0: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  990: { slidesPerView: 3 },
  1024: { slidesPerView: 3 },
  1300: { slidesPerView: 3 },
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
// function toggleAccordion(index) {
//   try {
//     const content = document.getElementById(`content-${index}`);
//     const icon = document.getElementById(`icon-${index}`);

//     if (!content || !icon) {
//       console.warn(`Accordion element(s) missing for index: ${index}`);
//       return;
//     }

//     const minusSVG = `
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
//         <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
//       </svg>`;
//     const plusSVG = `
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
//         <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
//       </svg>`;

//     if (content.style.maxHeight && content.style.maxHeight !== '0px') {
//       content.style.maxHeight = '0';
//       icon.innerHTML = plusSVG;
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       icon.innerHTML = minusSVG;
//     }
//   } catch (err) {
//     console.error("Accordion error:", err);
//   }
// }


// (function () {
//   document.addEventListener("DOMContentLoaded", () => {
//     const nav = document.querySelector('ul[aria-label="Main navigation"]');
//     if (!nav) {
//       console.warn("Navigation element not found.");
//       return;
//     }

//     // ✅ Select all nav links (main + dropdown)
//     const links = nav.querySelectorAll("a, #dropdownNavbar a");
//     if (!links.length) {
//       console.warn("No navigation links found.");
//       return;
//     }

//     const currentPage = window.location.pathname.split("/").pop();
//     const ACTIVE_CLASS = "nav-active";
//     const ROOT_PAGE = "index.html";

//     const ICON_HTML = `
//       <span class="nav-icon block">
//         <img src="./src/images/cap-icon.svg" alt="cap nav icon" class="w-auto h-auto object-cover"/>
//       </span>
//     `;

//     // ✅ Remove active class & icons from all
//     function clearActive() {
//       links.forEach(link => {
//         link.classList.remove(ACTIVE_CLASS);
//         link.removeAttribute("aria-current");

//         const oldIcon = link.querySelector(".nav-icon");
//         if (oldIcon) oldIcon.remove();
//       });
//     }

//     // ✅ Add active + icon only once
//     function setActive(link) {
//       clearActive();

//       link.classList.add(ACTIVE_CLASS);
//       link.setAttribute("aria-current", "page");

//       // ensure <a> has relative position so icon aligns
//       link.style.position = "relative";

//       if (!link.querySelector(".nav-icon")) {
//         link.insertAdjacentHTML("beforeend", ICON_HTML);
//       }
//     }

//     // ✅ Loop through links
//     links.forEach(link => {
//       const href = link.getAttribute("href");
//       if (!href) return;

//       // Highlight current page on load
//       if (href === currentPage || (href === ROOT_PAGE && currentPage === "")) {
//         setActive(link);
//       }

//       // On click → set active
//       link.addEventListener("click", (e) => {
//         if (href === "#") e.preventDefault();
//         setActive(link);
//       });
//     });
//   });
// })();
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

    if (content.classList.contains("open")) {
      // closing
      content.style.maxHeight = content.scrollHeight + "px"; // set current height
      requestAnimationFrame(() => {
        content.style.maxHeight = "0px";
      });
      content.classList.remove("open");
      icon.innerHTML = plusSVG;
    } else {
      // opening
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      icon.innerHTML = minusSVG;

      // after transition, remove maxHeight so it becomes auto
      content.addEventListener("transitionend", function handler() {
        if (content.classList.contains("open")) {
          content.style.maxHeight = "none"; // allow auto height
        }
        content.removeEventListener("transitionend", handler);
      });
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

    // ✅ Get all nav + dropdown links
    const links = nav.querySelectorAll("a, #dropdownNavbar a");
    if (!links.length) {
      console.warn("No navigation links found.");
      return;
    }

    const currentPage = window.location.pathname.split("/").pop();
    const ACTIVE_CLASS = "nav-active";
    const ROOT_PAGE = "index.html";

    const ICON_HTML = `
      <span class="nav-icon block absolute w-[40px] top-[-25px] left-1/2 -translate-x-1/2">
        <img src="./src/images/cap-icon.svg" alt="cap nav icon" class="w-auto h-auto object-cover"/>
      </span>
    `;

    // ✅ Remove active + icons
    function clearActive() {
      links.forEach(link => {
        link.classList.remove(ACTIVE_CLASS);
        link.removeAttribute("aria-current");

        // remove icon inside <a>, <li>, or parent <li>
        const candidates = [
          link.querySelector(".nav-icon"),
          link.parentElement.querySelector(".nav-icon"),
          link.closest("li")?.querySelector(".nav-icon")
        ];
        candidates.forEach(icon => icon && icon.remove());
      });
    }

    // ✅ Add active + icon
    function setActive(link) {
      clearActive();

      link.classList.add(ACTIVE_CLASS);
      link.setAttribute("aria-current", "page");

      if (link.closest("#dropdownNavbar")) {
        // 👉 Dropdown item clicked → icon goes on parent <li> that holds the button
        const parentLi = nav.querySelector("button#dropdownNavbarLink")?.closest("li");
        if (parentLi) {
          parentLi.style.position = "relative";
          parentLi.insertAdjacentHTML("beforeend", ICON_HTML);
        }
      } else {
        // 👉 Normal nav item → icon on <a>
        link.style.position = "relative";
        link.insertAdjacentHTML("beforeend", ICON_HTML);
      }
    }

    // ✅ Loop through links
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (!href) return;

      // Highlight on load
      if (href === currentPage || (href === ROOT_PAGE && currentPage === "")) {
        setActive(link);
      }

      // Handle click
      link.addEventListener("click", (e) => {
        if (href === "#") e.preventDefault();
        setActive(link);
      });
    });
  });
})();



function initTabs() {
    try {
      const tabButtons = document.querySelectorAll(".tab-btn");
      const tabContents = document.querySelectorAll(".tab-content");

      if (tabButtons.length === 0) {
        throw new Error("No tab buttons found. Add elements with class 'tab-btn'.");
      }

      if (tabContents.length === 0) {
        throw new Error("No tab content found. Add elements with class 'tab-content'.");
      }

      tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-tab");
          const targetContent = document.getElementById(target);

          if (!target) {
            console.error("Missing 'data-tab' attribute on:", btn);
            return;
          }

          if (!targetContent) {
            console.error(`No content found with id '${target}'`);
            return;
          }

          // reset all tabs
          tabButtons.forEach((b) => {
            b.classList.remove("bg-white", "text-[var(--text-color)]", "font-normal");
            b.setAttribute("aria-selected", "false");
          });
          tabContents.forEach((c) => c.classList.add("hidden"));

          // activate clicked tab
          btn.classList.add("bg-white", "text-[var(--text-color)]", "font-normal");
          btn.setAttribute("aria-selected", "true");
          targetContent.classList.remove("hidden");
        });
      });

      // Initialize first tab safely
      if (tabButtons[0] && tabContents[0]) {
        tabButtons[0].classList.add("bg-white", "text-[var(--text-color)]", "font-normal");
        tabContents[0].classList.remove("hidden");
      }
    } catch (err) {
      console.error("Tab system initialization failed:", err.message);
    }
  }

  // Run the function after DOM is ready
  document.addEventListener("DOMContentLoaded", initTabs);




  

   // Initialize Lucide icons
    lucide.createIcons();

    let currentIndex = 0;
    const totalCards = 5;

    function updateSlider() {
      const cards = document.querySelectorAll('.card');
      const indicators = document.querySelectorAll('#indicators button');

      // Hide all cards
      cards.forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('scale-100', 'opacity-100', 'border-2', 'border-yellow-500');
        card.classList.add('scale-95', 'opacity-70', 'border', 'border-gray-700');
      });

      // Show and style the three visible cards
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % totalCards;
        const card = cards[index];
        card.classList.remove('hidden');
        if (i === 1) {
          card.classList.remove('scale-95', 'opacity-70', 'border', 'border-gray-700');
          card.classList.add('scale-100', 'opacity-100', 'border-2', 'border-yellow-500');
        }
      }

      // Update indicators
      indicators.forEach((indicator, index) => {
        indicator.classList.remove('bg-yellow-500');
        indicator.classList.add('bg-gray-600');
        if (index === currentIndex) {
          indicator.classList.remove('bg-gray-600');
          indicator.classList.add('bg-yellow-500');
        }
      });
    }

    // Event listeners for navigation buttons
    document.getElementById('next-button').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalCards;
      updateSlider();
    });

    document.getElementById('prev-button').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateSlider();
    });

    // Event listeners for indicators
    document.querySelectorAll('#indicators button').forEach(button => {
      button.addEventListener('click', () => {
        currentIndex = parseInt(button.getAttribute('data-index'));
        updateSlider();
      });
    });

    // Initial render
    updateSlider();






// Usage: const toggle = createToggleSocial(); then call toggle();



function toggleSocial(button) {
    // Get the main container relative to the button
    const mainContainer = button.closest('#mainContainer');
    const socialContainer = mainContainer.querySelector('#socialContainer');

    // Get current visibility state from data attribute (default false)
    const isVisible = mainContainer.dataset.visible === 'true';

    // Toggle the state
    mainContainer.dataset.visible = !isVisible;

    if (!isVisible) {
      // Show: Move container to fully visible
      mainContainer.style.right = '0';
    } else {
      // Hide: Only button visible
      const containerWidth = socialContainer.offsetWidth;
      mainContainer.style.right = `-${containerWidth}px`;
    }
  }