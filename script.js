const translations = {
    'pt-BR': {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contato',
        'hero.experience': '10+ Anos de Experiência',
        'hero.role': 'Back End Engineer | PHP & Laravel',
        'hero.subtitle': 'Transformando desafios em soluções eficientes, alinhando tecnologia à estratégia do negócio.',
        'hero.cta': 'Vamos Conversar',
        'hero.experience_btn': 'Ver Experiência',
        'about.title': 'Sobre Mim',
        'about.p1': 'Sou Miller Pereira Magalhães, Back End Engineer com mais de 10 anos de experiência. Tenho sólida atuação em PHP e Laravel, criando soluções robustas e escaláveis.',
        'about.p2': 'Minha missão é transformar desafios em soluções eficientes. Busco sempre expandir meus conhecimentos e gerar impacto positivo em projetos inovadores.',
        'stats.years': 'Anos de Exp.',
        'stats.cloud': 'Cloud Specialist',
        'stats.focus': 'Specialist',
        'experience.title': 'Experiência Profissional',
        'exp.atlas': 'Desenvolvimento de soluções backend robustas e escaláveis.',
        'exp.namu': 'Atuação como desenvolvedor backend focado em entregas ágeis.',
        'exp.mpdev': 'Desenvolvimento e manutenção de sistemas web com PHP.',
        'exp.simonetti': 'Desenvolvimento de software e manutenção de sistemas legados.',
        'skills.title': 'Stack Tecnológico',
        'skills.backend': 'Backend Core',
        'skills.database': 'Infra & Data',
        'skills.frontend': 'Frontend & Others',
        'contact.title': 'Entre em Contato',
        'contact.subtitle': 'Estou em busca de novos desafios. Vamos conversar sobre como posso contribuir com seu projeto.',
        'form.name': 'Nome',
        'form.email': 'Email',
        'form.message': 'Mensagem',
        'form.send': 'Enviar Mensagem',
        'footer.rights': 'Todos os direitos reservados.'
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',
        'hero.experience': '10+ Years Experience',
        'hero.role': 'Back End Engineer | PHP & Laravel',
        'hero.subtitle': 'Transforming challenges into efficient solutions, aligning technology with business strategy.',
        'hero.cta': 'Let\'s Talk',
        'hero.experience_btn': 'View Experience',
        'about.title': 'About Me',
        'about.p1': 'I am Miller Pereira Magalhães, a Back End Engineer with over 10 years of experience. I have a solid background in PHP and Laravel, creating robust and scalable solutions.',
        'about.p2': 'My mission is to transform challenges into efficient solutions. I always seek to expand my knowledge and generate positive impact on innovative projects.',
        'stats.years': 'Years Exp.',
        'stats.cloud': 'Cloud Specialist',
        'stats.focus': 'Specialist',
        'experience.title': 'Professional Experience',
        'exp.atlas': 'Development of robust and scalable backend solutions.',
        'exp.namu': 'Acting as a backend developer focused on agile deliveries.',
        'exp.mpdev': 'Development and maintenance of web systems with PHP.',
        'exp.simonetti': 'Software development and maintenance of legacy systems.',
        'skills.title': 'Tech Stack',
        'skills.backend': 'Backend Core',
        'skills.database': 'Infra & Data',
        'skills.frontend': 'Frontend & Others',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'I am looking for new challenges. Let\'s talk about how I can contribute to your project.',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.message': 'Message',
        'form.send': 'Send Message',
        'footer.rights': 'All rights reserved.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langPtBtn = document.getElementById('lang-pt');
    const langEnBtn = document.getElementById('lang-en');

    // Set initial language based on html lang attribute or default
    let currentLang = 'pt-BR';

    function updateLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        // Update buttons state
        if (lang === 'pt-BR') {
            langPtBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPtBtn.classList.remove('active');
        }

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    langPtBtn.addEventListener('click', () => updateLanguage('pt-BR'));
    langEnBtn.addEventListener('click', () => updateLanguage('en'));

    // Form handling with AJAX, Loading and Modal
    const form = document.getElementById('contactForm');
    const loadingOverlay = document.getElementById('loading-overlay');
    const modal = document.getElementById('feedback-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');
    const modalBtn = document.getElementById('modal-btn');
    const modalClose = document.querySelector('.modal-close');

    function showLoading() {
        loadingOverlay.classList.add('active');
        form.style.pointerEvents = 'none';
        form.style.opacity = '0.6';
    }

    function hideLoading() {
        loadingOverlay.classList.remove('active');
        form.style.pointerEvents = 'auto';
        form.style.opacity = '1';
    }

    function showModal(type, title, message) {
        modalIcon.className = 'modal-icon ' + type;
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.classList.add('active');
    }

    function hideModal() {
        modal.classList.remove('active');
    }

    modalBtn.addEventListener('click', hideModal);
    modalClose.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    async function handleSubmit(event) {
        event.preventDefault();
        showLoading();

        const data = new FormData(event.target);

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            hideLoading();

            if (response.ok) {
                const title = currentLang === 'pt-BR'
                    ? 'Mensagem Enviada!'
                    : 'Message Sent!';
                const message = currentLang === 'pt-BR'
                    ? 'Obrigado pelo contato! Sua mensagem foi enviada com sucesso e retornarei em breve.'
                    : 'Thanks for contacting! Your message was sent successfully and I will get back to you soon.';

                showModal('success', title, message);
                form.reset();
            } else {
                response.json().then(data => {
                    const title = currentLang === 'pt-BR'
                        ? 'Erro ao Enviar'
                        : 'Send Error';

                    let message;
                    if (Object.hasOwn(data, 'errors')) {
                        message = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        message = currentLang === 'pt-BR'
                            ? 'Ops! Houve um problema ao enviar sua mensagem. Por favor, tente novamente.'
                            : 'Oops! There was a problem submitting your form. Please try again.';
                    }

                    showModal('error', title, message);
                });
            }
        }).catch(error => {
            hideLoading();

            const title = currentLang === 'pt-BR'
                ? 'Erro de Conexão'
                : 'Connection Error';
            const message = currentLang === 'pt-BR'
                ? 'Ops! Houve um problema de conexão. Verifique sua internet e tente novamente.'
                : 'Oops! There was a connection problem. Check your internet and try again.';

            showModal('error', title, message);
        });
    }

    form.addEventListener('submit', handleSubmit);
});
