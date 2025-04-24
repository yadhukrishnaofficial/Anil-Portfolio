document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content on page load
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('animate');
    }, 500);
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .about-img, .about-text, .service-card, .portfolio-item, .testimonial-container, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
});

const filterButtons = document.querySelectorAll('.portfolio-filters button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter portfolio items
        const filter = button.dataset.filter;
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Portfolio Item Click - Show Project Details
const projectModal = document.getElementById('projectModal');
const closeModal = document.querySelector('.close-modal');
const projectDetails = document.getElementById('projectDetails');

// Project data (in a real site, this would come from a database or API)
const projects = {
    project1: {
        title: 'Modern Minimalist Home',
        category: 'Residential',
        description: 'This complete home renovation transformed a traditional 1990s house into a sleek, minimalist sanctuary for a young professional couple. The project focused on creating open, light-filled spaces with clean lines and a neutral color palette.',
        challenge: 'The main challenge was to open up the compartmentalized floor plan while maintaining structural integrity and creating a cohesive flow throughout the home.',
        solution: 'We removed several non-load bearing walls, replaced outdated finishes with contemporary materials, and designed custom storage solutions to maintain the minimalist aesthetic.',
        client: 'YK',
        location: 'Malappuram, KL',
        year: '2024',
        gallery: [
            'images/rahul/living1.jpg',
            'images/rahul/living2.jpg',
            'images/rahul/bedroom1.jpg',
            'images/rahul/bedroom2.jpg',
            'images/rahul/kitchen1.jpg',
            'images/rahul/kitchen2.jpg',
            ''
        ]
    },
    project2: {
        title: 'Kalyan Horizon ',
        category: 'Residential',
        description: 'This luxury master bedroom renovation converted an outdated space into a spa-like retreat. The design features a freestanding soaking tub, a spacious walk-in shower, and custom marble vanity.',
        challenge: 'Working within the existing footprint while incorporating all the desired luxury elements required careful space planning and material selection.',
        solution: 'We reconfigured the layout to maximize space efficiency and selected high-end materials that provided both luxury and durability.',
        client: 'Abraham',
        location: 'Thrissur, KL',
        year: '2023',
        gallery: [
            'images/kalyan/Kalyan horizon-Bedroom 4-20250307-135051.jpg',
            'images/kalyan/Kalyan horizon-Bedroom 5-20250307-135051.jpg',
            'images/kalyan/Kalyan horizon-MBR 13-20250307-135051.jpg',
            'images/kalyan/Kalyan horizon-MBR 14-20250307-135051.jpg',
            'images/kalyan/Kalyan horizon-MBR 15-20250307-135051.jpg',
            'images/kalyan/Kalyan horizon-Living room 21-20250307-135051.jpg'

        ]
    },
    // Additional projects would be defined here
};

// Open modal with project details
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.dataset.id;
        const project = projects[projectId];
        
        if (project) {
            // Populate project details
            projectDetails.innerHTML = `
                <div class="project-title">
                    <h2>${project.title}</h2>
                    <span>${project.category}</span>
                </div>
                <div class="project-info">
                    <div class="project-description">
                        <p>${project.description}</p>
                        <h4>Challenge:</h4>
                        <p>${project.challenge}</p>
                        <h4>Solution:</h4>
                        <p>${project.solution}</p>
                    </div>
                    <div class="project-meta">
                        <div class="meta-item">
                            <div class="meta-title">Client</div>
                            <div>${project.client}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-title">Location</div>
                            <div>${project.location}</div>
                        </div>
                        <div class="meta-item">
                            <div class="meta-title">Year</div>
                            <div>${project.year}</div>
                        </div>
                    </div>
                </div>
                <div class="project-gallery">
                    ${project.gallery.map(img => `
                        <div class="gallery-item">
                            <img src="${img}" alt="${project.title}">
                        </div>
                    `).join('')}
                </div>
            `;
            
            // Show modal
            projectModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real site, this would send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real site, this would subscribe the user to a newsletter
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});