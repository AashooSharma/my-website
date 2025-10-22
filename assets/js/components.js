//   // ===========================
// // Load Navbar
// // ===========================

// fetch('./components/navbar.html')
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('navbar-placeholder').innerHTML = data;

//     // Mobile Hamburger Toggle
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navbar = document.querySelector('header');

//     if (menuToggle && navbar) {
//       menuToggle.addEventListener('click', () => {
//         navbar.classList.toggle('active');
//       });

//       // Close navbar on link click (mobile)
//       const navLinks = navbar.querySelectorAll('ul li a');
//       navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//           if (window.innerWidth <= 768) {
//             navbar.classList.remove('active');
//           }
//         });
//       });
//     }
//   });

// // ===========================
// // Load Footer
// // ===========================
// fetch('./components/footer.html')
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('footer-placeholder').innerHTML = data;
//   });

// // ===========================
// // Load Hero Section + Typing Effect
// // ===========================
// fetch('./components/hero.html')
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('hero-placeholder').innerHTML = data;

//     // Hero Typing Effect with Colors
//     const typingText = document.querySelector(".typing-text");

//     // const roles = [
//     //   { text: "DevOps Engineer", color: "#00bcd4" },
//     //   { text: "AI/ML Enthusiast", color: "#9b59b6" },
//     //   { text: "Cybersecurity Expert", color: "#e74c3c" }
//     // ];

//     const roles = [
//   { text: "DevOps Engineer", color: "#1d79e9ff" },       // Bright teal
//   { text: "AI/ML Enthusiast", color: "#daff1fff" },      // Electric purple
//   { text: "Cybersecurity Expert", color: "#ff0000ff" }   // Intense red
// ];

//     let index = 0;
//     let charIndex = 0;
//     let typing = true;
//     const typingDelay = 100;
//     const eraseDelay = 50;

//     function typeRole() {
//       if (!typingText) return;

//       let currentRole = roles[index];

//       if (typing) {
//         typingText.innerHTML = `<span style="color:${currentRole.color}">${currentRole.text.substring(0, charIndex + 1)}</span>`;
//         charIndex++;
//         if (charIndex === currentRole.text.length) {
//           typing = false;
//           setTimeout(typeRole, 1500); // pause at full word
//           return;
//         }
//       } else {
//         charIndex--;
//         typingText.innerHTML = `<span style="color:${currentRole.color}">${currentRole.text.substring(0, charIndex)}</span>`;
//         if (charIndex === 0) {
//           typing = true;
//           index = (index + 1) % roles.length;
//         }
//       }
//       setTimeout(typeRole, typing ? typingDelay : eraseDelay);
//     }

//     typeRole();
//   });

// // ===========================
// // Highlight current section link on scroll
// // ===========================
// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('section');
//   const scrollPos = window.scrollY + 150; // adjust offset if needed
//   const navLinks = document.querySelectorAll('header ul li a');

//   sections.forEach(section => {
//     if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
//       const id = section.getAttribute('id');
//       navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// });

// ===========================
// Load Navbar
// ===========================
fetch("./components/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Mobile Hamburger Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector("header");

    if (menuToggle && navbar) {
      menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });

      // Close navbar on link click (mobile)
      const navLinks = navbar.querySelectorAll("ul li a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 768) {
            navbar.classList.remove("active");
          }
        });
      });
    }
  });

// ===========================
// Load Footer
// ===========================
fetch("./components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

// // ===========================
// // Load Hero Section + Typing Effect
// // ===========================
// fetch("./components/hero.html")
//   .then((res) => res.text())
//   .then((data) => {
//     document.getElementById("hero-placeholder").innerHTML = data;

//     // Hero Typing Effect with Colors
//     const typingText = document.querySelector(".typing-text");

    
//     const roles = [
//       { text: "DevOps Engineer", color: "#1d79e9ff" }, // Bright teal
//       { text: "AI/ML Enthusiast", color: "#daff1fff" }, // Electric purple
//       { text: "Cybersecurity Expert", color: "#ff0000ff" }, // Intense red
//     ];

//     let index = 0;
//     let charIndex = 0;
//     let typing = true;
//     const typingDelay = 120;
//     const eraseDelay = 50;

//     function typeRole() {
//       if (!typingText) return;

//       const currentRole = roles[index];

//       if (typing) {
//         typingText.innerHTML = `<span style="color:${
//           currentRole.color
//         }">${currentRole.text.substring(0, charIndex + 1)}</span>`;
//         charIndex++;
//         if (charIndex === currentRole.text.length) {
//           typing = false;
//           setTimeout(typeRole, 1500); // pause at full word
//           return;
//         }
//       } else {
//         charIndex--;
//         typingText.innerHTML = `<span style="color:${
//           currentRole.color
//         }">${currentRole.text.substring(0, charIndex)}</span>`;
//         if (charIndex === 0) {
//           typing = true;
//           index = (index + 1) % roles.length;
//         }
//       }
//       setTimeout(typeRole, typing ? typingDelay : eraseDelay);
//     }

//     // Ensure typing layer is above canvas
//     const heroContent = document.querySelector(".hero-content");
//     if (heroContent) heroContent.style.position = "relative";
//     if (typingText) typingText.style.position = "relative";

//     typeRole();

//     // Optional: call function to init background animation after hero is loaded
//     if (typeof initHeroBackground === "function") initHeroBackground();
//   });

// // ===========================
// // Highlight current section link on scroll
// // ===========================
// window.addEventListener("scroll", () => {
//   const sections = document.querySelectorAll("section");
//   const scrollPos = window.scrollY + 150;
//   const navLinks = document.querySelectorAll("header ul li a");

//   sections.forEach((section) => {
//     if (
//       scrollPos >= section.offsetTop &&
//       scrollPos < section.offsetTop + section.offsetHeight
//     ) {
//       const id = section.getAttribute("id");
//       navLinks.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === `#${id}`) {
//           link.classList.add("active");
//         }
//       });
//     }
//   });
// });



// ===========================
// Load Hero Section + Typing Effect
// ===========================
fetch("./components/hero.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("hero-placeholder").innerHTML = data;

    // Hero Typing Effect with Colors
    const typingText = document.querySelector(".typing-text");
    const roles = [
      { text: "DevOps Engineer", color: "#1d79e9ff" }, // Bright teal
      { text: "AI/ML Enthusiast", color: "#daff1fff" }, // Electric purple
      { text: "Cybersecurity Expert", color: "#ff0000ff" }, // Intense red
    ];

    let index = 0;
    let charIndex = 0;
    let typing = true;
    const typingDelay = 120;
    const eraseDelay = 50;

    // Only one typing loop
    function typeRole() {
      if (!typingText) return;

      const currentRole = roles[index];

      if (typing) {
        typingText.innerHTML = `<span style="color:${currentRole.color}">${currentRole.text.substring(0, charIndex + 1)}</span>`;
        charIndex++;
        if (charIndex === currentRole.text.length) {
          typing = false;
          setTimeout(typeRole, 1500); // pause at full word
          return;
        }
      } else {
        charIndex--;
        typingText.innerHTML = `<span style="color:${currentRole.color}">${currentRole.text.substring(0, charIndex)}</span>`;
        if (charIndex === 0) {
          typing = true;
          index = (index + 1) % roles.length;
        }
      }

      setTimeout(typeRole, typing ? typingDelay : eraseDelay);
    }

    // Ensure typing layer is above canvas
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) heroContent.style.position = "relative";
    if (typingText) typingText.style.position = "relative";

    // Start typing after a small delay to avoid race with canvas init
    setTimeout(typeRole, 200);

    // Optional: init background animation safely
    if (typeof initHeroBackground === "function") {
      setTimeout(initHeroBackground, 300);
    }
  });

// ===========================
// Highlight current section link on scroll
// ===========================
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 150;
  const navLinks = document.querySelectorAll("header ul li a");

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});









// Load About Section
fetch('./components/about.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('about-placeholder').innerHTML = data;
  });


// ===========================
// Load Skills Section
// ===========================
fetch('./components/skills.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('skills-placeholder').innerHTML = data;
  });


function toggleSkills() {
  const extra = document.querySelector('.extra-skills');
  const btn = document.querySelector('.show-more-btn');
  extra.classList.toggle('show');
  btn.textContent = extra.classList.contains('show') ? 'Show Less' : 'Show All';
}







// // ===========================
// // Load Projects Section (HTML Component)
// // ===========================
// fetch('./components/projects.html')
//   .then(res => res.text())
//   .then(data => {
//     const placeholder = document.getElementById('projects-placeholder');
//     if (placeholder) placeholder.innerHTML = data;
//   })
//   .catch(err => console.error('❌ Error loading projects section:', err));


// // ===========================
// // Load Projects Data (From JSON)
// // ===========================
// fetch('./data/projects.json')
//   .then(res => res.json())
//   .then(projects => {
//     const container = document.getElementById('projects-container');
//     if (!container) return;

//     // Show only first 3 projects on index page
//     const visibleProjects = projects.slice(0, 3);

//     visibleProjects.forEach(project => {
//       const card = document.createElement('div');
//       card.classList.add('project-card');

//       card.innerHTML = `
//         <img src="${project.image_paths[0]}" alt="${project.title}">
//         <div class="project-content">
//           <h3><i class="fas fa-folder-open"></i> ${project.title}</h3>
//           <p>${project.description}</p>
//           <div class="project-skills">
//             ${project.skills.map(skill => `<span>${skill}</span>`).join('')}
//           </div>
//           <div class="project-links">
//             <a href="${project.demo_url}" target="_blank">
//               <i class="fas fa-external-link-alt"></i> Demo
//             </a>
//             <a href="${project.github_repo}" target="_blank">
//               <i class="fab fa-github"></i> Code
//             </a>
//           </div>
//         </div>
//       `;

//       container.appendChild(card);
//     });
//   })
//   .catch(err => console.error('❌ Error loading projects JSON:', err));

// ===========================
// Load Projects Section (HTML Component)
// ===========================
fetch('./components/projects.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('projects-placeholder');
    if (placeholder) placeholder.innerHTML = data;
  })
  .catch(err => console.error('❌ Error loading projects section:', err));


// ===========================
// Load Projects Data (From JSON)
// ===========================
fetch('./data/projects.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // Show only first 3 projects on index page
    const visibleProjects = projects.slice(0, 3);

    visibleProjects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');

      // Format date to more readable form (YYYY-MM → MMM YYYY)
      const formatDate = (dateStr) => {
        const [year, month] = dateStr.split('-');
        const date = new Date(`${year}-${month}-01`);
        return date.toLocaleString('default', { month: 'short', year: 'numeric' });
      };

      const start = project.start_date ? formatDate(project.start_date) : '';
      const end = project.end_date ? formatDate(project.end_date) : 'Present';

      card.innerHTML = `
        <img src="${project.image_paths[0]}" alt="${project.title}">
        <div class="project-content">
          <h3><i class="fas fa-folder-open"></i> ${project.title}</h3>

          <p class="project-duration">
            <i class="far fa-calendar-alt"></i> ${start} - ${end}
          </p>

          <p class="project-description">${project.description}</p>

          <p class="project-skills-title"><strong>Skills:</strong></p>
          <div class="project-skills">
            ${project.skills.map(skill => `<span>${skill}</span>`).join('')}
          </div>

          <div class="project-links">
            <a href="${project.demo_url}" target="_blank">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
            <a href="${project.github_repo}" target="_blank">
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error('❌ Error loading projects JSON:', err));










  // ===========================
// Load Experience Section
// ===========================
fetch('./components/experience.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('experience-placeholder');
    if (placeholder) placeholder.innerHTML = data;
  })
  .catch(err => console.error('❌ Error loading experience section:', err));

  




// // ===========================
// // Load Certifications Section (HTML Component)
// // ===========================
// fetch('./components/certifications.html')
//   .then(res => res.text())
//   .then(data => {
//     const placeholder = document.getElementById('certifications-placeholder');
//     if (placeholder) placeholder.innerHTML = data;
//   })
//   .catch(err => console.error('❌ Error loading certifications section:', err));


// // ===========================
// // Load Certifications Data (From JSON)
// // ===========================
// fetch('./data/certificates.json')
//   .then(res => res.json())
//   .then(certificates => {
//     const container = document.getElementById('certificates-timeline');
//     if (!container) return;

//     certificates.forEach(cert => {
//       const formatDate = dateStr => {
//         if(!dateStr) return 'Present';
//         const date = new Date(dateStr);
//         return date.toLocaleString('default', { month: 'short', year: 'numeric' });
//       };

//       const item = document.createElement('div');
//       item.classList.add('timeline-item');

//       item.innerHTML = `
//         <div class="timeline-icon"><i class="fas fa-award"></i></div>
//         <div class="timeline-content">
//           <h3>${cert.fullName || cert.name}</h3>
//           <span class="organization">${cert.issuingOrganization}</span>
//           <span class="duration">${formatDate(cert.issueDate)}${cert.expirationDate ? ' – ' + formatDate(cert.expirationDate) : ''}</span>
//           ${cert.credentialsURL ? `<p><a href="${cert.credentialsURL}" target="_blank">View Certificate</a></p>` : ''}
//           <div class="skills-used">
//             ${cert.skills.map(skill => `<span>${skill}</span>`).join('')}
//           </div>
//         </div>
//       `;

//       container.appendChild(item);
//     });

//     // Scroll animation
//     const items = document.querySelectorAll('.timeline-item');
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if(entry.isIntersecting){
//           entry.target.classList.add('visible');
//         }
//       });
//     }, { threshold: 0.1 });

//     items.forEach(item => observer.observe(item));
//   })
//   .catch(err => console.error('❌ Error loading certificates JSON:', err));

  


//   // ===========================
// // Load Certifications Section (HTML Component)
// // ===========================
// fetch('./components/certifications.html')
//   .then(res => res.text())
//   .then(data => {
//     const placeholder = document.getElementById('certifications-placeholder');
//     if (placeholder) placeholder.innerHTML = data;
//   })
//   .catch(err => console.error('❌ Error loading certifications section:', err));

// // ===========================
// // Load Certifications Data (From JSON)
// // ===========================
// let certificationsData = [];

// fetch('./data/certificates.json')
//   .then(res => res.json())
//   .then(certificates => {
//     certificationsData = certificates;
//     populateCategoryFilter(certificationsData);
//     renderCertifications(certificationsData);
//   })
//   .catch(err => console.error('❌ Error loading certifications JSON:', err));

// // Render certifications
// function renderCertifications(certifications) {
//     const container = document.getElementById('certifications-container');
//     if (!container) return;
//     container.innerHTML = '';

//     certifications.forEach(cert => {
//         const card = document.createElement('div');
//         card.classList.add('project-card');

//         card.innerHTML = `
//             <img src="./assets/images/certificates/${cert.image}" alt="${cert.fullName}">
//             <div class="project-details">
//                 <h3><i class="fas fa-certificate"></i> ${cert.fullName}</h3>
//                 <p class="organization"><strong>Organization:</strong> ${cert.issuingOrganization}</p>
//                 <p class="duration"><strong>Issued:</strong> ${cert.issueDate} ${cert.expirationDate ? `- Expires: ${cert.expirationDate}` : ''}</p>
//                 ${cert.credentialsURL ? `<p><a href="${cert.credentialsURL}" target="_blank">View Certificate</a></p>` : ''}
//                 <div class="project-skills">
//                     ${cert.skills.map(skill => `<span>${skill}</span>`).join('')}
//                 </div>
//             </div>
//         `;
//         container.appendChild(card);
//     });
// }

// // Populate category filter dropdown
// function populateCategoryFilter(certifications) {
//     const filter = document.getElementById('cert-category-filter');
//     if (!filter) return;

//     const allCategories = [...new Set(certifications.map(c => c.category))].sort();
//     allCategories.forEach(cat => {
//         const option = document.createElement('option');
//         option.value = cat;
//         option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
//         filter.appendChild(option);
//     });
// }

// // Search + Filter functionality
// const certSearchBox = document.getElementById('cert-search-box');
// const certCategoryFilter = document.getElementById('cert-category-filter');

// if (certSearchBox) certSearchBox.addEventListener('input', applyCertFilters);
// if (certCategoryFilter) certCategoryFilter.addEventListener('change', applyCertFilters);

// function applyCertFilters() {
//     const searchText = certSearchBox.value.toLowerCase();
//     const selectedCategory = certCategoryFilter.value;

//     const filtered = certificationsData.filter(cert => {
//         const matchesSearch = cert.fullName.toLowerCase().includes(searchText);
//         const matchesCategory = selectedCategory ? cert.category === selectedCategory : true;
//         return matchesSearch && matchesCategory;
//     });

//     renderCertifications(filtered);
// }



// ===========================
// Load Certifications Section (HTML Component)
// ===========================
fetch('./components/certifications.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('certifications-placeholder');
    if (placeholder) placeholder.innerHTML = data;
  })
  .catch(err => console.error('❌ Error loading certifications section:', err));

// ===========================
// Load Certifications Data (From JSON)
// ===========================
let certificationsData = [];
let showingAll = false;

fetch('./data/certificates.json')
  .then(res => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  })
  .then(certificates => {
    certificationsData = certificates;
    renderCertifications(certificationsData.slice(0, 6)); // show first 6 by default
    addShowAllButton();
  })
  .catch(err => console.error('❌ Error loading certifications JSON:', err));

// Render certifications
function renderCertifications(certifications) {
  const container = document.getElementById('certifications-container');
  if (!container) {
    console.error('❌ certifications-container div not found!');
    return;
  }
  container.innerHTML = '';

  certifications.forEach(cert => {
    try {
      const card = document.createElement('div');
      card.classList.add('project-card');

      card.innerHTML = `
        <img src="./assets/images/certificates/${cert.image}" alt="${cert.fullName}" onerror="this.src='./assets/images/fallback.png';">
        <div class="project-details">
          <h3><i class="fas fa-certificate"></i> ${cert.fullName || cert.name}</h3>
          <p class="organization"><strong>Organization:</strong> ${cert.issuingOrganization || 'N/A'}</p>
          <p class="duration"><strong>Issued:</strong> ${cert.issueDate || 'N/A'} ${cert.expirationDate ? `- Expires: ${cert.expirationDate}` : ''}</p>
          ${cert.credentialsURL ? `<p><a href="${cert.credentialsURL}" target="_blank">View Certificate</a></p>` : ''}
          <div class="project-skills">
            ${(cert.skills || []).map(skill => `<span>${skill}</span>`).join('')}
          </div>
        </div>
      `;
      container.appendChild(card);
    } catch (e) {
      console.error('❌ Error rendering certificate:', cert, e);
    }
  });
}

// Add Show All / Show Less button
function addShowAllButton() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  let btn = document.getElementById('show-all-cert-btn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'show-all-cert-btn';
    btn.classList.add('back-btn');
    btn.style.marginTop = '20px';
    container.parentElement.appendChild(btn);
  }

  btn.textContent = 'Show All';
  btn.onclick = () => {
    if (!showingAll) {
      renderCertifications(certificationsData);
      btn.textContent = 'Show Less';
      showingAll = true;
    } else {
      renderCertifications(certificationsData.slice(0, 6));
      btn.textContent = 'Show All';
      showingAll = false;
    }
  };
}






// ===========================
// Load Contact Section (HTML Component)
// ===========================
fetch('./components/contact.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('contact-placeholder');
    if (placeholder) placeholder.innerHTML = data;
  })
  .catch(err => console.error('❌ Error loading contact section:', err));
