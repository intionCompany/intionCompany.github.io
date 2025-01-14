$(document).ready(function () {
    const functionUrl = 'https://websiteform.azurewebsites.net/api/HttpTrigger1';
    const requestData = { add: 1 };

    fetch(functionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    });

    let isClicked = false;

    $('.hero-text').css({
        'opacity': '1',
        'transform': 'translateY(0)'
    });

    $('#HomeClick2, #HomeClick').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    $('#exprt').click(function () {
        document.getElementById('expertiseSection').scrollIntoView({ behavior: 'smooth' });
    });
    $('#expr').click(function () {
        document.getElementById('experienceSection').scrollIntoView({ behavior: 'smooth' });
    });
    $('#qual').click(function () {
        document.getElementById('qualificationSection').scrollIntoView({ behavior: 'smooth' });
    });
    $('#exprt2').click(function () {
        document.getElementById('expertiseSection').scrollIntoView({ behavior: 'smooth' });
    });
    $('#expr2').click(function () {
        document.getElementById('experienceSection').scrollIntoView({ behavior: 'smooth' });
    });
    $('#qual2').click(function () {
        document.getElementById('qualificationSection').scrollIntoView({ behavior: 'smooth' });
    });

    $('.HamburgerIcon').click(() => {
        $('.mobileNav').toggleClass('active');
    });

    $('.mobileNav-close').click(() => {
        $('.mobileNav').removeClass('active');
    });

    $(window).on('resize', function () {
        if ($(window).width() > 800) {
            $('.mobileNav').removeClass('active');
        }
    });

    // Fade-in animations
    function initElements(elements) {
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(120px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
    }

    function setupFadeInIndividually(className) {
        const elements = Array.from(document.querySelectorAll(className));
        if (elements.length === 0) return;
        let threshold = 0.2;

        initElements(elements);

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    obs.unobserve(el);
                }
            });
        }, {
            threshold: threshold
        });

        elements.forEach(el => observer.observe(el));
    }

    setupFadeInIndividually('.myExpertiseGridDiv');
    setupFadeInIndividually('.projectsGridDiv');
    setupFadeInIndividually('.aboutMeGrid1div');
    setupFadeInIndividually('.qualificationDiv');
    setupFadeInIndividually('.section-heading');
    setupFadeInIndividually('.sectionText');
    setupFadeInIndividually('.tile');
    setupFadeInIndividually('.modal-content');
    setupFadeInIndividually('.full-service-overlay');
    setupFadeInIndividually('.focused-expertise-section');
    setupFadeInIndividually('.contact-section');
    setupFadeInIndividually('.about-content');
    setupFadeInIndividually('.founder-section');
    setupFadeInIndividually('.focus-content');
    setupFadeInIndividually('.cta-section');
    setupFadeInIndividually('.ai-innovation-container');
});

function showContactForm() {
    document.getElementById('contactForm').reset();
    document.getElementById('overlay').style.display = 'block';
    /*  document.getElementById('contactFormModal').style.display = 'block';*/
}

function cancelForm() {
    document.getElementById('overlay').style.display = 'none';
    /*   document.getElementById('contactFormModal').style.display = 'none';*/
    document.getElementById('thankYouMessageContainer').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'none';
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.onsubmit = function (e) {
        e.preventDefault();
        submitForm();
    };
}
function submitForm() {
    event.preventDefault();
    /*document.getElementById('overlay').style.display = 'none';*/
    document.getElementById('contactForm').style.display = 'none';

    const functionUrl2 = 'https://websiteform.azurewebsites.net/api/HttpTrigger2';
    const requestData = {
        Betreff: "intion: " + document.getElementById('subject').value,
        Anschreiben: document.getElementById('description').value,
        Vorname: document.getElementById('vorname').value,
        Nachname: document.getElementById('nachname').value,
        Firma: document.getElementById('firma').value,
        Telefonnummer: document.getElementById('phone').value,
        Mail: document.getElementById('email').value,
    };

    fetch(functionUrl2, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }).then(() => {
        window.location.href = 'thankyou.html';
    });
    /*
    window.location.href = 'thankyou.html'
    document.getElementById('thankYouMessageContainer').style.display = 'block';
    document.getElementById('thankYouMessage').style.display = 'inline-block';*/
}

document.addEventListener("DOMContentLoaded", function () {
    // Grab both hero sections if they exist
    const heroSections = document.querySelectorAll(".hero-section");
    const fullServiceSection = document.querySelector(".full-service-overlay");

    const updateParallax = () => {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const parallaxOffset = scrollPosition * 0.2;
        // Update each hero-section background
        heroSections.forEach(section => {
            section.style.backgroundPositionY = `${-parallaxOffset}px`;
        });

        // If your sharepoint.html doesn't have a .full-service-overlay, wrap in condition:
        if (fullServiceSection) {
            fullServiceSection.style.backgroundPositionY = `${-parallaxOffset}px`;
        }
    };

    updateParallax();
    document.addEventListener("scroll", updateParallax);
});
