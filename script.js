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

    // Form handling
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = currentLang === 'pt-BR'
            ? 'Obrigado pelo contato! Esta é uma demonstração.'
            : 'Thanks for contacting! This is a demo.';
        alert(msg);
        form.reset();
    });
});
