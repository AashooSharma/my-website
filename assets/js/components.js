
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
      const navLinks = navbar.querySelectorAll("ul li");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 1425) {
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
// Load Services Section
// ===========================
fetch('./components/services.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('services-placeholder');
    if (placeholder) placeholder.innerHTML = data;
    loadServices(); // call after HTML loaded
  })
  .catch(err => console.error('❌ Error loading services section:', err));

let servicesData = [];

// Load services from JSON
function loadServices() {
  fetch('./data/services.json')
    .then(res => res.json())
    .then(data => {
      servicesData = data;
      renderServices();
    })
    .catch(err => console.error('❌ Error loading services JSON:', err));
}

// Render services dynamically
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = ''; // clear previous content

  servicesData.forEach(service => {
    const card = document.createElement('div');
    card.classList.add('neon-card', 'p-6', 'rounded-xl', 'text-white', 'transition', 'transform', 'hover:-translate-y-1');

    card.innerHTML = `
      <div class="service-emoji text-5xl mb-4">${service.emoji || '🛠️'}</div>
      <h3 class="text-xl font-semibold text-teal-300 mb-2">${service.title}</h3>
      <p class="text-sm text-gray-300 mb-4">${service.description}</p>
      <div class="flex justify-between items-center">
        <span class="text-green-400 font-semibold text-lg">${service.price}</span>
        <a href="${service.link}" class="btn-neon text-sm">Book Now</a>
      </div>
    `;

    container.appendChild(card);
  });
}

  

// ===========================
// Load Skills Section
// ===========================
fetch('./components/skills.html')
  .then(res => res.text())
  .then(data => {
    const placeholder = document.getElementById('skills-placeholder');
    if (placeholder) placeholder.innerHTML = data;
    loadSkills(); // call after HTML loaded
  })
  .catch(err => console.error('❌ Error loading skills section:', err));

let skillsData = [];

// Load skills from JSON
function loadSkills() {
  fetch('./data/skills.json')
    .then(res => res.json())
    .then(data => {
      skillsData = data;
      renderSkills();
    })
    .catch(err => console.error('❌ Error loading skills JSON:', err));
}

// Render all skills in one grid
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  skillsData.forEach((skill, index) => {
    const card = document.createElement('div');
    card.classList.add('skill-card');
    card.innerHTML = `<img src="${skill.icon}" alt="${skill.name}" title="${skill.name}">`;

    // Add a data attribute for extra skills (after 8)
    if (index >= 8) card.classList.add('extra-skill', 'hidden');

    container.appendChild(card);
  });
}

// Toggle Show All / Show Less
function toggleSkills() {
  const btn = document.getElementById('toggleSkillsBtn');
  const extraSkills = document.querySelectorAll('.extra-skill');

  const isHidden = extraSkills[0]?.classList.contains('hidden');

  extraSkills.forEach(skill => {
    skill.classList.toggle('hidden', !isHidden);
  });

  btn.textContent = isHidden ? 'Show Less' : 'Show All';
}



// ===========================
// Load Education Section (HTML Component)
// ===========================
fetch('./components/education.html')
  .then(res => {
    if (!res.ok) throw new Error(`Failed to load education.html (${res.status})`);
    return res.text();
  })
  .then(data => {
    const placeholder = document.getElementById('education-placeholder');
    if (placeholder) placeholder.innerHTML = data;
  })
  .catch(err => console.error('❌ Error loading education section:', err));


// ===========================
// Load Education Data (From JSON)
// ===========================
fetch('./data/education.json')
  .then(res => {
    if (!res.ok) throw new Error(`Failed to load education.json (${res.status})`);
    return res.json();
  })
  .then(educationData => {
    const container = document.getElementById('education-timeline');
    if (!container) return;

    educationData.forEach(edu => {
      const item = document.createElement('div');
      item.classList.add('timeline-item');
      item.classList.add('timeline-item2');

      item.innerHTML = `
        <div class="timeline-icon"><i class="fas fa-school"></i></div>
        <div class="timeline-content">
          <div class="edu-header">
            <img src="${edu.image || './assets/img/default-edu.jpg'}" 
                alt="${edu.institution}" 
                class="edu-image" />
            <div class="edu-details">
              <h3>${edu.degree}</h3>
              <span class="organization">${edu.institution}</span>
              <span class="duration">${edu.startYear} - ${edu.endYear || 'Present'}</span>
              ${edu.location ? `<p class="location"><i class="fas fa-map-marker-alt"></i> ${edu.location}</p>` : ''}
            </div>
          </div>

          <div class="edu-body">
            ${edu.field ? `<p><strong>Field of Study:</strong> ${edu.field}</p>` : ''}
            ${edu.grade ? `<p><strong>Grade:</strong> ${edu.grade}</p>` : ''}
            ${edu.activities ? `<p><strong>Activities:</strong> ${edu.activities}</p>` : ''}
            ${edu.subjects && edu.subjects.length 
              ? `<p><strong>Key Subjects:</strong> ${edu.subjects.join(', ')}</p>` 
              : ''}
            ${edu.achievements ? `<p><strong>Achievements:</strong> ${edu.achievements}</p>` : ''}
            ${edu.description ? `<p>${edu.description}</p>` : ''}
          </div>
        </div>
      `;

      container.appendChild(item);
    });


    // Scroll animation
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
  })
  .catch(err => console.error('❌ Error loading education JSON:', err));



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
    if(placeholder) placeholder.innerHTML = data;
    loadExperience(); // call after HTML loaded
  })
  .catch(err => console.error('❌ Error loading experience section:', err));

let experienceData = [];

function loadExperience() {
  fetch('./data/experience.json')
    .then(res => res.json())
    .then(data => {
      experienceData = data;
      renderExperience();
      initObserver();
    })
    .catch(err => console.error('❌ Error loading experience JSON:', err));
}

function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if(!container) return;
  container.innerHTML = '';

  experienceData.forEach(exp => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');
    item.classList.add('timeline-item2');


    item.innerHTML = `
      <div class="timeline-icon"><i class="${exp.icon}"></i></div>
      <div class="timeline-content">
        <h3>${exp.title}</h3>
        <span class="company">${exp.company}</span>
        <span class="duration">${exp.duration}</span>
        ${exp.location ? `<span class="location">${exp.location}</span>` : ''}
        ${exp.workType ? `<span class="work-type">${exp.workType}</span>` : ''}
        <p>${exp.description}</p>
        ${exp.responsibilities ? `<ul class="responsibilities">${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>` : ''}
        ${exp.skills ? `<div class="skills-used"><strong>Skills:</strong> ${exp.skills.map(s => `<span>${s}</span>`).join('')}</div>` : ''}
      </div>
    `;

    container.appendChild(item);
  });
}

// Intersection Observer for animation
function initObserver() {
  const items = document.querySelectorAll('.timeline-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
}





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
    renderCertifications(certificationsData.slice(0, 8)); // show first 6 by default
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
        <div class="cert-name">${cert.name}</div>
        <img src="./assets/images/certificates/${cert.image}" alt="${cert.fullName}" onerror="this.src='./assets/images/fallback.png';">
        <div class="project-details">
          <h3><i class="fas fa-certificate"></i> ${cert.fullName || cert.name}</h3>
          <p class="organization"><strong>Organization:</strong> ${cert.issuingOrganization || 'N/A'}</p>
          <p class="duration"><strong>Issued:</strong> ${cert.issueDate || 'N/A'} ${cert.expirationDate ? `- Expires: ${cert.expirationDate}` : ''}</p>
          ${cert.credentialsURL ? `<p><a class="btn-primary" href="${cert.credentialsURL}" target="_blank"><i class="fa-solid fa-eye"></i> View Certificate</a></p>` : ''}
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
      renderCertifications(certificationsData.slice(0, 8));
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
    if (placeholder) {
      placeholder.innerHTML = data;

      // ===========================
      // Contact Form Secure Submission (initialized after HTML loads)
      // ===========================
      const form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();

          const name = form.name.value.trim();
          const email = form.email.value.trim();
          const number = form.number.value.trim();
          const message = form.message.value.trim();

          // Simple XSS prevention
          const sanitize = str => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

          if (!name || !email || !number || !message) {
            alert('❌ Please fill all fields correctly!');
            return;
          }

          // Prepare safe payload
          const payload = {
            name: sanitize(name),
            email: sanitize(email),
            number: sanitize(number),
            message: sanitize(message)
          };

          console.log('✅ Secure Contact Form Data:', payload);

          // Simulate success alert
          alert('Message sent successfully! 🎉');

          form.reset();
        });
      }
    }
  })
  .catch(err => console.error('❌ Error loading contact section:', err));
