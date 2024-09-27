// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // AI Chatbot functionality
    document.getElementById('open-chatbot').addEventListener('click', function() {
        // This is a placeholder for the chatbot functionality
        alert('AI Chatbot is opening... (Functionality to be implemented)');
        // In a real implementation, this would open a chat interface
    });

    // Voice Assistant functionality
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function(event) {
            const last = event.results.length - 1;
            const command = event.results[last][0].transcript.toLowerCase();

            console.log('Recognized speech:', command);

            // Example commands
            if (command.includes('emergency')) {
                alert('Triggering emergency protocol');
                // In a real app, this would activate emergency features
            } else if (command.includes('health')) {
                document.querySelector('#health-tracker').scrollIntoView({ behavior: 'smooth' });
            } else if (command.includes('support')) {
                document.querySelector('#ipv-support').scrollIntoView({ behavior: 'smooth' });
            }
            // Add more voice commands as needed
        };

        document.getElementById('start-voice-assistant').addEventListener('click', function() {
            recognition.start();
            alert('Voice Assistant is now listening... Say a command.');
        });
    } else {
        console.log('Speech recognition not supported');
        document.getElementById('start-voice-assistant').style.display = 'none';
    }

    // Newsletter form submission
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // In a real app, you would send this email to your server
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.feature-section').forEach(section => {
        observer.observe(section);
    });

    // Handle report button click
    document.querySelector('a[href="#report"]').addEventListener('click', function(e) {
        e.preventDefault();
        // This is a placeholder for the report functionality
        alert('Opening report form... (Functionality to be implemented)');
        // In a real app, this would open a report form or navigate to a report section
    });

    // Active section highlighting
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});