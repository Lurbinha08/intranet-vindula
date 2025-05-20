// Inicialização do AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Adicionar meteoros ao hero
function createMeteors() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 5; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        hero.appendChild(meteor);
    }
}

// Inicializar meteoros
createMeteors();

// FAQ Accordion
const faqItems = [
    {
        question: "Quanto tempo leva para implantar a Intranet?",
        answer: "A implantação básica leva em média 2 semanas, incluindo configuração, treinamento e migração inicial de dados."
    },
    {
        question: "Qual o suporte oferecido?",
        answer: "Oferecemos suporte técnico 24/7, com atendimento prioritário para o plano Profissional."
    },
    {
        question: "Quais são os requisitos mínimos?",
        answer: "Apenas um navegador moderno e conexão com internet. Não é necessário instalar nada."
    },
    {
        question: "Como é garantida a segurança dos dados?",
        answer: "Utilizamos criptografia de ponta a ponta, backups automáticos e servidores em nuvem com certificação ISO 27001."
    }
];

function createFAQ() {
    const faqGrid = document.querySelector('.faq-grid');
    faqItems.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <h3>${item.question}</h3>
                <span class="faq-toggle">+</span>
            </div>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        `;
        faqGrid.appendChild(faqItem);

        // Adicionar evento de clique
        const question = faqItem.querySelector('.faq-question');
        const answer = faqItem.querySelector('.faq-answer');
        const toggle = faqItem.querySelector('.faq-toggle');

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight;
            
            // Fechar todos os outros
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.style.maxHeight = null;
            });
            document.querySelectorAll('.faq-toggle').forEach(t => {
                t.textContent = '+';
            });

            // Abrir/fechar o atual
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                toggle.textContent = '-';
            }
        });
    });
}

// Inicializar FAQ
createFAQ();

// Depoimentos - Agora estáticos no HTML
// A lógica do slider e criação dinâmica foram removidas

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validação básica
        const inputs = form.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // Aqui você pode adicionar o código para enviar o formulário
            alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });
}

// Adicionar estilos dinâmicos para o FAQ
const style = document.createElement('style');
style.textContent = `
    .faq-item {
        margin-bottom: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
    }

    .faq-question {
        padding: 1rem;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .faq-question h3 {
        margin: 0;
        font-size: 1.1rem;
    }

    .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
        padding: 0 1rem;
    }

    .faq-answer p {
        padding: 1rem 0;
        margin: 0;
    }

    /* Estilos do slider de depoimentos removidos */
`;
document.head.appendChild(style); 